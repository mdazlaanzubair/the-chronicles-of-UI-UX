import crypto from "node:crypto"
import { NextResponse } from "next/server"

export const runtime = "nodejs"
export const dynamic = "force-dynamic"

const SITE_HOST = "mdazlaanzubair.com"

const HASHNODE_SIGNATURE_HEADER = "x-hashnode-signature"
const HASHNODE_GRAPHQL_ENDPOINT = "https://gql.hashnode.com"
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"

const SIGNATURE_TOLERANCE_MS = 5 * 60 * 1000
const HEX_SHA256_PATTERN = /^[a-fA-F0-9]{64}$/

type HashnodeWebhookPayload = {
  metadata?: {
    uuid?: string
  }
  data?: {
    eventType?: string
    publication?: {
      id?: string
    }
    post?: {
      id?: string
      url?: string
    }
  }
}

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

type IndexNowPayload = {
  host: string
  key: string
  keyLocation: string
  urlList: string[]
}

function jsonResponse(
  body: Record<string, unknown>,
  status = 200
): NextResponse {
  return NextResponse.json(body, { status })
}

function readEnvironment(): {
  indexNowKey: string
  webhookSecret: string
} | null {
  const indexNowKey = process.env.INDEXNOW_KEY?.trim()
  const webhookSecret = process.env.HASHNODE_WEBHOOK_SECRET?.trim()

  if (!indexNowKey || !webhookSecret) {
    console.error("Missing required server environment variables", {
      hasIndexNowKey: Boolean(indexNowKey),
      hasWebhookSecret: Boolean(webhookSecret),
    })

    return null
  }

  return {
    indexNowKey,
    webhookSecret,
  }
}

function isSha256HexDigest(value: string): boolean {
  return HEX_SHA256_PATTERN.test(value)
}

function timingSafeHexEqual(received: string, expected: string): boolean {
  if (
    !isSha256HexDigest(received) ||
    !isSha256HexDigest(expected)
  ) {
    return false
  }

  const receivedBuffer = Buffer.from(received, "hex")
  const expectedBuffer = Buffer.from(expected, "hex")

  return (
    receivedBuffer.length === expectedBuffer.length &&
    crypto.timingSafeEqual(receivedBuffer, expectedBuffer)
  )
}

function createHmacDigest(
  value: string,
  secret: string
): string {
  return crypto
    .createHmac("sha256", secret)
    .update(value, "utf8")
    .digest("hex")
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
  const receivedSignature = signatureHeader
    .slice("sha256=".length)
    .trim()

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
  const expectedSignature = createHmacDigest(
    signedPayload,
    secret
  )

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

  if (
    normalizedHeader.includes("t=") &&
    normalizedHeader.includes("v1=")
  ) {
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

function parseWebhookPayload(
  rawBody: string
): HashnodeWebhookPayload | null {
  try {
    const payload: unknown = JSON.parse(rawBody)

    if (
      typeof payload !== "object" ||
      payload === null ||
      Array.isArray(payload)
    ) {
      return null
    }

    return payload as HashnodeWebhookPayload
  } catch {
    return null
  }
}

function normalizeUrl(url: string): string | null {
  try {
    const parsedUrl = new URL(url)

    if (parsedUrl.protocol !== "https:") {
      return null
    }

    if (parsedUrl.hostname !== SITE_HOST) {
      return null
    }

    parsedUrl.hash = ""

    return parsedUrl.toString()
  } catch {
    return null
  }
}

async function resolveHashnodePostUrl(
  postId: string
): Promise<string | null> {
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

    throw new Error(
      `Hashnode GraphQL returned ${response.status}`
    )
  }

  const result =
    (await response.json()) as HashnodePostQueryResponse

  if (result.errors?.length) {
    console.error("Hashnode GraphQL returned errors", {
      errors: result.errors.map((error) => error.message),
    })

    throw new Error("Hashnode GraphQL returned an error")
  }

  return result.data?.post?.url ?? null
}

async function getPublishedPostUrl(
  payload: HashnodeWebhookPayload
): Promise<string | null> {
  const payloadUrl = payload.data?.post?.url

  if (payloadUrl) {
    return normalizeUrl(payloadUrl)
  }

  const postId = payload.data?.post?.id

  if (!postId) {
    return null
  }

  const resolvedUrl = await resolveHashnodePostUrl(postId)

  if (!resolvedUrl) {
    return null
  }

  return normalizeUrl(resolvedUrl)
}

async function submitToIndexNow({
  postUrl,
  indexNowKey,
}: {
  postUrl: string
  indexNowKey: string
}): Promise<{
  accepted: boolean
  status: number
  responseBody: string
}> {
  const payload: IndexNowPayload = {
    host: SITE_HOST,
    key: indexNowKey,
    keyLocation: `https://${SITE_HOST}/${indexNowKey}.txt`,
    urlList: [postUrl],
  }

  const response = await fetch(INDEXNOW_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
    signal: AbortSignal.timeout(10_000),
  })

  const responseBody = await response.text()

  return {
    accepted:
      response.status === 200 || response.status === 202,
    status: response.status,
    responseBody,
  }
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

  const signatureHeader = request.headers.get(
    HASHNODE_SIGNATURE_HEADER
  )

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

  const payload = parseWebhookPayload(rawBody)

  if (!payload) {
    return jsonResponse(
      {
        success: false,
        error: "Invalid JSON webhook payload",
      },
      400
    )
  }

  const webhookId = payload.metadata?.uuid
  const eventType = payload.data?.eventType

  console.info("Hashnode webhook verified", {
    webhookId,
    eventType,
    signatureFormat: verification.format,
  })

  if (eventType !== "post_published") {
    return jsonResponse({
      success: true,
      ignored: true,
      message: `Ignored Hashnode event: ${eventType ?? "unknown"}`,
      webhookId,
    })
  }

  try {
    const postUrl = await getPublishedPostUrl(payload)

    if (!postUrl) {
      return jsonResponse(
        {
          success: false,
          error:
            "Could not resolve a valid published post URL",
          webhookId,
        },
        422
      )
    }

    const indexNowResult = await submitToIndexNow({
      postUrl,
      indexNowKey: environment.indexNowKey,
    })

    if (!indexNowResult.accepted) {
      console.error("IndexNow submission failed", {
        status: indexNowResult.status,
        responseBody: indexNowResult.responseBody.slice(
          0,
          500
        ),
        postUrl,
        webhookId,
      })

      return jsonResponse(
        {
          success: false,
          error: "IndexNow rejected the URL submission",
          upstreamStatus: indexNowResult.status,
          webhookId,
        },
        502
      )
    }

    return jsonResponse({
      success: true,
      message:
        indexNowResult.status === 202
          ? "URL accepted by IndexNow and is pending validation"
          : "URL submitted successfully to IndexNow",
      indexNowStatus: indexNowResult.status,
      postUrl,
      webhookId,
    })
  } catch (error) {
    console.error("Hashnode webhook processing failed", {
      webhookId,
      error:
        error instanceof Error
          ? error.message
          : "Unknown processing error",
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