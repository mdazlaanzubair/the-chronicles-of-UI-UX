import "server-only"

import { GoogleGenAI, ThinkingLevel } from "@google/genai"

import { loadPortfolioKnowledge, selectKnowledge } from "./knowledge"
import { OFF_TOPIC_REPLY, PERSONA_FOUNDATION } from "./persona"
import type {
  AssistantAction,
  AssistantMessageInput,
  AssistantReply,
  AssistantSource,
  KnowledgeDocument,
} from "./types"

const DEFAULT_MODEL = "gemini-3.5-flash-lite"
const MAX_CONTEXT_CHARACTERS = 18_000

export class AssistantConfigurationError extends Error {}

const CLEARLY_OFF_TOPIC = [
  /\b(weather|forecast|temperature)\b/i,
  /\b(recipe|cook|bake|ingredients)\b/i,
  /\b(cricket|football|soccer|basketball)\b.*\b(score|fixture|match)\b/i,
  /\b(stock|crypto|bitcoin)\b.*\b(price|buy|sell|invest)\b/i,
  /\b(diagnose|medical advice|legal advice)\b/i,
  /\b(write|do|finish|solve)\b.*\b(homework|assignment|exam|equation)\b/i,
  /\b(capital of|president of|prime minister of)\b/i,
]

const PORTFOLIO_CONTEXT =
  /\b(azlaan|dazlaan|mdazlaan|you|your|work|career|project|research|writing|article|blog|case study|experience|skill|technology|approach|think|personality|hire|resume|résumé|cv|contact|email|call|portfolio)\b/i

const isClearlyOffTopic = (question: string) =>
  !PORTFOLIO_CONTEXT.test(question) &&
  CLEARLY_OFF_TOPIC.some((pattern) => pattern.test(question))

const formatKnowledge = (documents: KnowledgeDocument[]) => {
  let used = 0

  return documents
    .map((document) => {
      const remaining = MAX_CONTEXT_CHARACTERS - used
      if (remaining <= 0) return ""

      const body = document.body.slice(0, Math.min(remaining, 5_000))
      const block = [
        `<source id="${document.id}">`,
        `Title: ${document.title}`,
        `Type: ${document.citationLabel}`,
        document.publishedAt ? `Published: ${document.publishedAt}` : undefined,
        document.updatedAt ? `Updated: ${document.updatedAt}` : undefined,
        `Content: ${body}`,
        "</source>",
      ]
        .filter(Boolean)
        .join("\n")

      used += block.length
      return block
    })
    .filter(Boolean)
    .join("\n\n")
}

const toSource = (document: KnowledgeDocument): AssistantSource => ({
  id: document.id,
  title: document.title,
  label: document.citationLabel,
  url: document.sourceUrl,
})

const getResumeAction = (): AssistantAction | null => {
  const url = process.env.PORTFOLIO_RESUME_URL?.trim()
  if (!url) return null

  return {
    label: "Download résumé",
    url,
    kind: "download",
  }
}

const getActions = (question: string, sources: AssistantSource[]) => {
  const actions: AssistantAction[] = []
  const resumeAction = getResumeAction()

  if (resumeAction && /\b(resume|résumé|cv)\b/i.test(question)) {
    actions.push(resumeAction)
  }

  const firstSource = sources[0]
  if (firstSource) {
    actions.push({
      label: `Open ${firstSource.label.toLowerCase()}`,
      url: firstSource.url,
      kind: "link",
    })
  }

  return actions.slice(0, 2)
}

const safeSuggestions = (value: unknown) => {
  if (!Array.isArray(value)) return []

  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter((item) => item.length > 0 && item.length <= 120)
    .slice(0, 3)
}

interface ModelReply {
  answer: string
  sourceIds: string[]
  suggestions: string[]
  scope: "answered" | "redirected"
}

const parseModelReply = (value: string): ModelReply => {
  const normalized = value
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/, "")
  const objectStart = normalized.indexOf("{")
  const objectEnd = normalized.lastIndexOf("}")
  const json =
    objectStart >= 0 && objectEnd > objectStart
      ? normalized.slice(objectStart, objectEnd + 1)
      : normalized
  const parsed: unknown = JSON.parse(json)
  if (!parsed || typeof parsed !== "object") {
    throw new Error("Gemini returned an invalid response.")
  }

  const candidate = parsed as Record<string, unknown>
  if (typeof candidate.answer !== "string" || !candidate.answer.trim()) {
    throw new Error("Gemini returned an empty response.")
  }

  const sourceIds = Array.isArray(candidate.sourceIds)
    ? candidate.sourceIds.filter(
        (item): item is string => typeof item === "string"
      )
    : []

  return {
    answer: candidate.answer.trim().slice(0, 4_000),
    sourceIds: sourceIds.slice(0, 4),
    suggestions: safeSuggestions(candidate.suggestions),
    scope: candidate.scope === "redirected" ? "redirected" : "answered",
  }
}

const buildSystemInstruction = (documents: KnowledgeDocument[]) =>
  `
${PERSONA_FOUNDATION}

CURRENT CAPABILITIES
- A résumé download is ${process.env.PORTFOLIO_RESUME_URL?.trim() ? "available" : "not configured yet"}. If it is unavailable, point visitors to the About/Experience source instead of promising a file.

RESPONSE CONTRACT
- Produce a concise answer in Azlaan's documented voice.
- Set scope to "redirected" for unrelated requests.
- Return up to four supporting IDs in sourceIds.
- Return up to three short, relevant follow-up questions in suggestions.

APPROVED SOURCE SET
${formatKnowledge(documents)}
`.trim()

export async function createAssistantReply(
  messages: AssistantMessageInput[]
): Promise<AssistantReply> {
  const question = messages.at(-1)?.content.trim() || ""

  if (isClearlyOffTopic(question)) {
    return {
      answer: OFF_TOPIC_REPLY.answer,
      sources: [],
      suggestions: [...OFF_TOPIC_REPLY.suggestions],
      actions: [],
      scope: "redirected",
    }
  }

  const apiKey =
    process.env.GOOGLE_GEMINI_API_KEY?.trim() ||
    process.env.GEMINI_API_KEY?.trim()

  if (!apiKey) {
    throw new AssistantConfigurationError(
      "The Gemini API key has not been configured."
    )
  }

  const allDocuments = await loadPortfolioKnowledge()
  const selectedDocuments = selectKnowledge(question, allDocuments)
  const selectedById = new Map(
    selectedDocuments.map((document) => [document.id, document])
  )

  const ai = new GoogleGenAI({ apiKey })
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 25_000)

  try {
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_MODEL?.trim() || DEFAULT_MODEL,
      contents: messages.slice(-8).map((message) => ({
        role: message.role === "assistant" ? "model" : "user",
        parts: [{ text: message.content }],
      })),
      config: {
        abortSignal: controller.signal,
        systemInstruction: buildSystemInstruction(selectedDocuments),
        maxOutputTokens: 2_048,
        thinkingConfig: { thinkingLevel: ThinkingLevel.MINIMAL },
        responseMimeType: "application/json",
        responseJsonSchema: {
          type: "object",
          properties: {
            answer: { type: "string" },
            sourceIds: {
              type: "array",
              items: { type: "string" },
              maxItems: 4,
            },
            suggestions: {
              type: "array",
              items: { type: "string" },
              maxItems: 3,
            },
            scope: {
              type: "string",
              enum: ["answered", "redirected"],
            },
          },
          required: ["answer", "sourceIds", "suggestions", "scope"],
          additionalProperties: false,
        },
      },
    })

    if (!response.text) {
      throw new Error("Gemini did not return a response.")
    }

    const modelReply = parseModelReply(response.text)
    const sources = modelReply.sourceIds
      .map((id) => selectedById.get(id))
      .filter((document): document is KnowledgeDocument => Boolean(document))
      .map(toSource)

    return {
      answer: modelReply.answer,
      sources,
      suggestions:
        modelReply.suggestions.length > 0
          ? modelReply.suggestions
          : [
              "Which project should I look at first?",
              "How do you make technical decisions?",
              "What have you written recently?",
            ],
      actions: getActions(question, sources),
      scope: modelReply.scope,
    }
  } finally {
    clearTimeout(timeout)
  }
}
