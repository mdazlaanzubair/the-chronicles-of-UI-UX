import crypto from "node:crypto"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

const HOST = "mdazlaanzubair.com"
const INDEXNOW_KEY = process.env.INDEXNOW_KEY
const HASHNODE_WEBHOOK_SECRET = process.env.HASHNODE_WEBHOOK_SECRET

const HASHNODE_GRAPHQL_ENDPOINT = "https://gql.hashnode.com"
const INDEXNOW_ENDPOINT = "https://api.indexnow.org/indexnow"

const SIGNATURE_TOLERANCE_MS = 5 * 60 * 1000

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
    }
  }
}

type SignatureParts = {
  timestamp: number
  signature: string
}

function parseSignatureHeader(header: string): SignatureParts | null {
  const parts = header.split(",").map((part) => part.trim())

  const timestampPart = parts.find((part) => part.startsWith("t="))
  const signaturePart = parts.find((part) => part.startsWith("v1="))

  if (!timestampPart || !signaturePart) {
    return null
  }

  const timestamp = Number(timestampPart.slice(2))
  const signature = signaturePart.slice(3)

  if (!Number.isFinite(timestamp) || !/^[a-fA-F0-9]{64}$/.test(signature)) {
    return null
  }

  return {
    timestamp,
    signature: signature.toLowerCase(),
  }
}

function verifyHashnodeSignature({
  payload,
  signatureHeader,
  secret,
}: {
  payload: HashnodeWebhookPayload
  signatureHeader: string
  secret: string
}): { valid: true } | { valid: false; reason: string } {
  const parsedSignature = parseSignatureHeader(signatureHeader)

  if (!parsedSignature) {
    return {
      valid: false,
      reason: "Malformed x-hashnode-signature header",
    }
  }

  const { timestamp, signature } = parsedSignature

  const timestampDifference = Math.abs(Date.now() - timestamp)

  if (timestampDifference > SIGNATURE_TOLERANCE_MS) {
    return {
      valid: false,
      reason: "Webhook timestamp is outside the allowed window",
    }
  }

  const signedPayload = `${timestamp}.${JSON.stringify(payload)}`

  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(signedPayload)
    .digest("hex")

  const receivedBuffer = Buffer.from(signature, "hex")
  const expectedBuffer = Buffer.from(expectedSignature, "hex")

  if (
    receivedBuffer.length !== expectedBuffer.length ||
    !crypto.timingSafeEqual(receivedBuffer, expectedBuffer)
  ) {
    return {
      valid: false,
      reason: "Invalid webhook signature",
    }
  }

  return { valid: true }
}

async function getHashnodePostUrl(postId: string): Promise<string | null> {
  const response = await fetch(HASHNODE_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query GetPostById($id: ID!) {
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
  })

  if (!response.ok) {
    const responseBody = await response.text()

    console.error("Hashnode GraphQL request failed", {
      status: response.status,
      responseBody,
    })

    throw new Error("Could not retrieve the published post")
  }

  const result = (await response.json()) as {
    data?: {
      post?: {
        url?: string
      }
    }
    errors?: Array<{
      message?: string
    }>
  }

  if (result.errors?.length) {
    console.error("Hashnode GraphQL errors", result.errors)
    throw new Error("Hashnode returned a GraphQL error")
  }

  return result.data?.post?.url ?? null
}

export async function POST(request: Request) {
  if (!HASHNODE_WEBHOOK_SECRET || !INDEXNOW_KEY) {
    console.error("Required server environment variables are missing")

    return NextResponse.json(
      {
        success: false,
        error: "Server configuration error",
      },
      { status: 500 }
    )
  }

  const signatureHeader = request.headers.get("x-hashnode-signature")

  if (!signatureHeader) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing x-hashnode-signature header",
      },
      { status: 401 }
    )
  }

  let body: HashnodeWebhookPayload

  try {
    body = (await request.json()) as HashnodeWebhookPayload
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid JSON payload",
      },
      { status: 400 }
    )
  }

  const verification = verifyHashnodeSignature({
    payload: body,
    signatureHeader,
    secret: HASHNODE_WEBHOOK_SECRET,
  })

  if (!verification.valid) {
    console.warn("Hashnode webhook verification failed", {
      reason: verification.reason,
      signatureHeaderFormat: signatureHeader
        .split(",")
        .map((part) => part.split("=")[0])
        .join(","),
    })

    return NextResponse.json(
      {
        success: false,
        error: verification.reason,
      },
      { status: 401 }
    )
  }

  const eventType = body.data?.eventType

  if (eventType !== "post_published") {
    return NextResponse.json({
      success: true,
      message: `Ignored event: ${eventType ?? "unknown"}`,
    })
  }

  const postId = body.data?.post?.id

  if (!postId) {
    return NextResponse.json(
      {
        success: false,
        error: "Webhook payload does not contain a post ID",
      },
      { status: 400 }
    )
  }

  try {
    const postUrl = await getHashnodePostUrl(postId)

    if (!postUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Published post URL could not be resolved",
        },
        { status: 502 }
      )
    }

    const parsedPostUrl = new URL(postUrl)

    if (parsedPostUrl.hostname !== HOST) {
      return NextResponse.json(
        {
          success: false,
          error: `Post URL does not belong to ${HOST}`,
        },
        { status: 422 }
      )
    }

    const indexNowPayload = {
      host: HOST,
      key: INDEXNOW_KEY,
      keyLocation: `https://${HOST}/${INDEXNOW_KEY}.txt`,
      urlList: [postUrl],
    }

    const indexNowResponse = await fetch(INDEXNOW_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(indexNowPayload),
      cache: "no-store",
    })

    if (!indexNowResponse.ok) {
      const responseBody = await indexNowResponse.text()

      console.error("IndexNow submission failed", {
        status: indexNowResponse.status,
        responseBody,
        postUrl,
      })

      return NextResponse.json(
        {
          success: false,
          error: "IndexNow rejected the URL submission",
          upstreamStatus: indexNowResponse.status,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      success: true,
      message: "URL submitted to IndexNow",
      postUrl,
      webhookId: body.metadata?.uuid,
    })
  } catch (error) {
    console.error("Hashnode webhook processing failed", error)

    return NextResponse.json(
      {
        success: false,
        error: "Webhook processing failed",
      },
      { status: 500 }
    )
  }
}
