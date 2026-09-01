import crypto from "node:crypto"
import { revalidatePath, revalidateTag } from "next/cache"
import { NextResponse } from "next/server"

import {
  buildBingSubmissionBatches,
  sanitizeBingSubmissionResult,
  submitBingUrlBatches,
} from "@/src/indexing/bing"
import {
  isSupportedHashnodeEvent,
  parseHashnodeWebhookPayload,
  type HashnodeWebhookPayload,
  type SupportedHashnodeEvent,
} from "@/src/hashnode/webhook-payload"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const BLOG_HOST = "blog.mdazlaanzubair.com"

const HASHNODE_SIGNATURE_HEADER = "x-hashnode-signature"
const HASHNODE_EVENT_HEADER = "x-hashnode-event"
const HASHNODE_DELIVERY_HEADER = "x-hashnode-delivery"
const HASHNODE_GRAPHQL_ENDPOINT = "https://gql.hashnode.com"
const HASHNODE_POSTS_CACHE_TAG = "hashnode-posts"

const SIGNATURE_TOLERANCE_MS = 5 * 60 * 1000
const HEX_SHA256_PATTERN = /^[a-fA-F0-9]{64}$/

type SignatureVerificationResult =
  | {
      valid: true
      format: "sha256" | "timestamped"
    }
  | {
      valid: false
      reason: string
    }

type HashnodePostQueryResponse = {
  data?: {
    post?: {
      url?: string
    }
  }
  errors?: Array<{
    message?: string
  }>
}

function jsonResponse(
  body: Record<string, unknown>,
  status = 200
): NextResponse {
  return NextResponse.json(body, { status })
}

function readEnvironment(): {
  bingApiKey: string
  webhookSecret: string
} | null {
  const bingApiKey = process.env.BING_SEARCH_CONSOLE_API_KEY?.trim()
  const webhookSecret = process.env.HASHNODE_WEBHOOK_SECRET?.trim()

  if (!bingApiKey || !webhookSecret) {
    console.error("Missing required server environment variables", {
      hasBingApiKey: Boolean(bingApiKey),
      hasWebhookSecret: Boolean(webhookSecret),
    })

    return null
  }

  return {
    bingApiKey,
    webhookSecret,
  }
}

function isSha256HexDigest(value: string): boolean {
  return HEX_SHA256_PATTERN.test(value)
}

function timingSafeHexEqual(received: string, expected: string): boolean {
  if (!isSha256HexDigest(received) || !isSha256HexDigest(expected)) {
    return false
  }

  const receivedBuffer = Buffer.from(received, "hex")
  const expectedBuffer = Buffer.from(expected, "hex")

  return (
    receivedBuffer.length === expectedBuffer.length &&
    crypto.timingSafeEqual(receivedBuffer, expectedBuffer)
  )
}

function createHmacDigest(value: string, secret: string): string {
  return crypto.createHmac("sha256", secret).update(value, "utf8").digest("hex")
}

function verifySha256Signature({
  rawBody,
  signatureHeader,
  secret,
}: {
  rawBody: string
  signatureHeader: string
  secret: string
}): SignatureVerificationResult {
  const receivedSignature = signatureHeader.slice("sha256=".length).trim()

  if (!isSha256HexDigest(receivedSignature)) {
    return {
      valid: false,
      reason: "Malformed sha256 webhook signature",
    }
  }

  const expectedSignature = createHmacDigest(rawBody, secret)

  if (!timingSafeHexEqual(receivedSignature, expectedSignature)) {
    return {
      valid: false,
      reason: "Invalid sha256 webhook signature",
    }
  }

  return {
    valid: true,
    format: "sha256",
  }
}

function verifyTimestampedSignature({
  rawBody,
  signatureHeader,
  secret,
}: {
  rawBody: string
  signatureHeader: string
  secret: string
}): SignatureVerificationResult {
  const components = signatureHeader
    .split(",")
    .map((component) => component.trim())

  const timestampValue = components
    .find((component) => component.startsWith("t="))
    ?.slice(2)

  const receivedSignature = components
    .find((component) => component.startsWith("v1="))
    ?.slice(3)

  if (!timestampValue || !receivedSignature) {
    return {
      valid: false,
      reason: "Malformed timestamped webhook signature",
    }
  }

  if (!isSha256HexDigest(receivedSignature)) {
    return {
      valid: false,
      reason: "Malformed v1 webhook signature",
    }
  }

  const timestamp = Number(timestampValue)

  if (!Number.isFinite(timestamp)) {
    return {
      valid: false,
      reason: "Invalid webhook signature timestamp",
    }
  }

  const age = Math.abs(Date.now() - timestamp)

  if (age > SIGNATURE_TOLERANCE_MS) {
    return {
      valid: false,
      reason: "Webhook signature timestamp is outside the allowed window",
    }
  }

  const signedPayload = `${timestampValue}.${rawBody}`
  const expectedSignature = createHmacDigest(signedPayload, secret)

  if (!timingSafeHexEqual(receivedSignature, expectedSignature)) {
    return {
      valid: false,
      reason: "Invalid timestamped webhook signature",
    }
  }

  return {
    valid: true,
    format: "timestamped",
  }
}

function verifyHashnodeSignature({
  rawBody,
  signatureHeader,
  secret,
}: {
  rawBody: string
  signatureHeader: string
  secret: string
}): SignatureVerificationResult {
  const normalizedHeader = signatureHeader.trim()

  if (normalizedHeader.startsWith("sha256=")) {
    return verifySha256Signature({
      rawBody,
      signatureHeader: normalizedHeader,
      secret,
    })
  }

  if (normalizedHeader.includes("t=") && normalizedHeader.includes("v1=")) {
    return verifyTimestampedSignature({
      rawBody,
      signatureHeader: normalizedHeader,
      secret,
    })
  }

  return {
    valid: false,
    reason: "Unsupported x-hashnode-signature format",
  }
}

function normalizeUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.protocol !== "https:") {
      return null
    }

    if (parsedUrl.hostname !== BLOG_HOST) {
      return null
    }

    parsedUrl.hash = ""

    return parsedUrl.toString()
  } catch {
    return null
  }
}

async function resolveHashnodePostUrl(postId: string): Promise<string | null> {
  const response = await fetch(HASHNODE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetPostUrl($id: ID!) {
          post(id: $id) {
            url
          }
        }
      `,
      variables: {
        id: postId,
      },
    }),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  })

  if (!response.ok) {
    const responseBody = await response.text()

    console.error("Hashnode GraphQL request failed", {
      status: response.status,
      responseBody: responseBody.slice(0, 500),
    })

    throw new Error(`Hashnode GraphQL returned ${response.status}`)
  }

  const result = (await response.json()) as HashnodePostQueryResponse

  if (result.errors?.length) {
    console.error("Hashnode GraphQL returned errors", {
      errors: result.errors.map((error) => error.message),
    })

    throw new Error("Hashnode GraphQL returned an error")
  }

  return result.data?.post?.url ?? null
}

async function getEventResourceUrl(
  payload: HashnodeWebhookPayload,
  eventType: SupportedHashnodeEvent
): Promise<string | null> {
  const isStaticPageEvent = eventType.startsWith("static_page_")
  const resource = isStaticPageEvent
    ? payload.data?.staticPage
    : payload.data?.post
  const payloadUrl = resource?.url

  if (payloadUrl) {
    return normalizeUrl(payloadUrl)
  }

  if (resource?.slug) {
    const slugUrl = new URL(resource.slug, `https://${BLOG_HOST}/`)
    const normalizedSlugUrl = normalizeUrl(slugUrl.toString())

    if (normalizedSlugUrl) {
      return normalizedSlugUrl
    }
  }

  const postId = resource?.id

  if (!postId || isStaticPageEvent || eventType === "post_deleted") {
    return null
  }

  const resolvedUrl = await resolveHashnodePostUrl(postId)

  if (!resolvedUrl) {
    return null
  }

  return normalizeUrl(resolvedUrl)
}

export async function POST(request: Request) {
  const environment = readEnvironment()

  if (!environment) {
    return jsonResponse(
      {
        success: false,
        error: "Server configuration error",
      },
      500
    )
  }

  const signatureHeader = request.headers.get(HASHNODE_SIGNATURE_HEADER)

  if (!signatureHeader) {
    return jsonResponse(
      {
        success: false,
        error: `Missing ${HASHNODE_SIGNATURE_HEADER} header`,
      },
      401
    )
  }

  const rawBody = await request.text()

  if (!rawBody) {
    return jsonResponse(
      {
        success: false,
        error: "Empty webhook payload",
      },
      400
    )
  }

  const verification = verifyHashnodeSignature({
    rawBody,
    signatureHeader,
    secret: environment.webhookSecret,
  })

  if (!verification.valid) {
    console.warn("Hashnode webhook verification failed", {
      reason: verification.reason,
      signatureFormat: signatureHeader.split("=")[0],
      signatureHeaderLength: signatureHeader.length,
      payloadByteLength: Buffer.byteLength(rawBody, "utf8"),
    })

    return jsonResponse(
      {
        success: false,
        error: verification.reason,
      },
      401
    )
  }

  const parsedWebhook = parseHashnodeWebhookPayload(rawBody)

  if (!parsedWebhook) {
    return jsonResponse(
      {
        success: false,
        error: "Invalid JSON webhook payload",
      },
      400
    )
  }

  const { payload, payloadShape, topLevelKeys } = parsedWebhook
  const webhookId =
    payload.metadata?.uuid ??
    request.headers.get(HASHNODE_DELIVERY_HEADER)?.trim() ??
    undefined
  const eventType =
    payload.data?.eventType ??
    request.headers.get(HASHNODE_EVENT_HEADER)?.trim() ??
    undefined

  console.info("Hashnode webhook verified", {
    webhookId,
    eventType,
    payloadShape,
    signatureFormat: verification.format,
  })

  if (!eventType) {
    console.warn("Hashnode webhook payload has no event type", {
      webhookId,
      payloadShape,
      topLevelKeys,
    })

    return jsonResponse(
      {
        success: false,
        error: "Unrecognized Hashnode webhook payload",
        webhookId,
        payloadShape,
      },
      422
    )
  }

  if (!isSupportedHashnodeEvent(eventType)) {
    return jsonResponse({
      success: true,
      ignored: true,
      message: `Ignored Hashnode event: ${eventType ?? "unknown"}`,
      webhookId,
    })
  }

  try {
    revalidateTag(HASHNODE_POSTS_CACHE_TAG, {
      expire: 0,
    })
    revalidatePath("/")

    const cacheRevalidation = {
      revalidated: true,
      tag: HASHNODE_POSTS_CACHE_TAG,
      path: "/",
    }

    const resourceUrl = await getEventResourceUrl(payload, eventType)

    if (!resourceUrl) {
      return jsonResponse(
        {
          success: false,
          error: "Could not resolve a valid Hashnode resource URL",
          webhookId,
          eventType,
          cacheRevalidation,
        },
        422
      )
    }

    const batches = buildBingSubmissionBatches(resourceUrl)
    const submissionResults = await submitBingUrlBatches({
      apiKey: environment.bingApiKey,
      batches,
    })
    const submissions = submissionResults.map(sanitizeBingSubmissionResult)
    const failedSubmissions = submissionResults.filter(
      (result) => !result.accepted
    )

    if (failedSubmissions.length > 0) {
      console.error("Bing URL submission failed", {
        resourceUrl,
        webhookId,
        eventType,
        failures: failedSubmissions.map(sanitizeBingSubmissionResult),
      })

      return jsonResponse(
        {
          success: false,
          error: "Bing rejected one or more URL batches",
          resourceUrl,
          webhookId,
          eventType,
          cacheRevalidation,
          submissions,
        },
        502
      )
    }

    console.info("Bing URL submissions completed", {
      resourceUrl,
      webhookId,
      eventType,
      submissions,
    })

    return jsonResponse({
      success: true,
      message: "URLs submitted successfully to Bing",
      resourceUrl,
      webhookId,
      eventType,
      cacheRevalidation,
      submissions,
    })
  } catch (error) {
    console.error("Hashnode webhook processing failed", {
      webhookId,
      error:
        error instanceof Error ? error.message : "Unknown processing error",
    })

    return jsonResponse(
      {
        success: false,
        error: "Webhook processing failed",
        webhookId,
      },
      500
    )
  }
}
