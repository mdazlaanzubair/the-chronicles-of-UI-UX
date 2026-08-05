export type AssistantMessageRole = "user" | "assistant"

export interface AssistantMessageInput {
  role: AssistantMessageRole
  content: string
}

export interface AssistantSource {
  id: string
  title: string
  label: string
  url: string
}

export interface AssistantAction {
  label: string
  url: string
  kind: "link" | "download"
}

export interface AssistantReply {
  answer: string
  sources: AssistantSource[]
  suggestions: string[]
  actions: AssistantAction[]
  scope: "answered" | "redirected"
}

export type KnowledgeKind =
  | "profile"
  | "principle"
  | "experience"
  | "education"
  | "skill"
  | "interest"
  | "project"
  | "publication"
  | "article"
  | "case-study"

export interface KnowledgeDocument {
  id: string
  kind: KnowledgeKind
  title: string
  body: string
  tags: string[]
  sourceUrl: string
  citationLabel: string
  publishedAt?: string
  updatedAt?: string
}
