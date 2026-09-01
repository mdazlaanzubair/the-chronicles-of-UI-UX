type UnknownRecord = Record<string, unknown>

type HashnodeWebhookMetadata = {
  uuid?: string
}

export const SUPPORTED_HASHNODE_EVENTS = [
  "post_published",
  "post_updated",
  "post_deleted",
  "static_page_published",
  "static_page_edited",
  "static_page_deleted",
] as const

export type SupportedHashnodeEvent =
  (typeof SUPPORTED_HASHNODE_EVENTS)[number]

type HashnodeWebhookResource = {
  id?: string
  url?: string
  slug?: string
}

type HashnodeWebhookPublication = {
  id?: string
}

export type HashnodeWebhookPayload = {
  metadata?: HashnodeWebhookMetadata
  data?: {
    eventType?: string
    publication?: HashnodeWebhookPublication
    post?: HashnodeWebhookResource
    staticPage?: HashnodeWebhookResource
  }
}

export type ParsedHashnodeWebhookPayload = {
  payload: HashnodeWebhookPayload
  payloadShape: string
  topLevelKeys: string[]
}

function asRecord(value: unknown): UnknownRecord | null {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value)
  ) {
    return null
  }

  return value as UnknownRecord
}

function readString(record: UnknownRecord, key: string): string | undefined {
  const value = record[key]

  return typeof value === "string" && value.length > 0
    ? value
    : undefined
}

function readMetadata(
  ...records: Array<UnknownRecord | null>
): HashnodeWebhookMetadata | undefined {
  for (const record of records) {
    const metadata = asRecord(record?.metadata)
    const uuid = metadata ? readString(metadata, "uuid") : undefined

    if (uuid) {
      return { uuid }
    }
  }

  return undefined
}

function readResource(
  keys: string[],
  ...records: Array<UnknownRecord | null>
): HashnodeWebhookResource | undefined {
  for (const record of records) {
    const resource = keys
      .map((key) => asRecord(record?.[key]))
      .find((candidate) => candidate !== null)

    if (!resource) {
      continue
    }

    const id = readString(resource, "id")
    const url = readString(resource, "url")
    const slug = readString(resource, "slug")

    if (id || url || slug) {
      return {
        ...(id ? { id } : {}),
        ...(url ? { url } : {}),
        ...(slug ? { slug } : {}),
      }
    }
  }

  return undefined
}

function readPublication(
  ...records: Array<UnknownRecord | null>
): HashnodeWebhookPublication | undefined {
  for (const record of records) {
    const publication = asRecord(record?.publication)
    const id =
      (publication && readString(publication, "id")) ??
      (record && readString(record, "publicationId"))

    if (id) {
      return { id }
    }
  }

  return undefined
}

function parseJsonRecord(rawBody: string): UnknownRecord | null {
  try {
    let parsed: unknown = JSON.parse(rawBody)

    // Some webhook relays encode the original JSON payload as a JSON string.
    if (typeof parsed === "string") {
      parsed = JSON.parse(parsed)
    }

    return asRecord(parsed)
  } catch {
    return null
  }
}

export function parseHashnodeWebhookPayload(
  rawBody: string
): ParsedHashnodeWebhookPayload | null {
  const root = parseJsonRecord(rawBody)

  if (!root) {
    return null
  }

  const payloadEnvelope = asRecord(root.payload)
  const eventEnvelope = asRecord(root.event)
  const envelope = payloadEnvelope ?? eventEnvelope ?? root
  const data = asRecord(envelope.data)
  const rootData = asRecord(root.data)

  const payloadShape = payloadEnvelope
    ? data
      ? "payload.data"
      : "payload"
    : eventEnvelope
      ? data
        ? "event.data"
        : "event"
      : data
        ? "root.data"
        : "root"

  const eventType =
    (data && readString(data, "eventType")) ??
    readString(envelope, "eventType") ??
    (rootData && readString(rootData, "eventType")) ??
    readString(root, "eventType")

  const metadata = readMetadata(envelope, root)
  const post = readResource(
    ["post"],
    data,
    envelope,
    rootData,
    root
  )
  const staticPage = readResource(
    ["staticPage", "static_page", "page"],
    data,
    envelope,
    rootData,
    root
  )
  const publication = readPublication(data, envelope, rootData, root)

  return {
    payload: {
      ...(metadata ? { metadata } : {}),
      data: {
        ...(eventType ? { eventType } : {}),
        ...(publication ? { publication } : {}),
        ...(post ? { post } : {}),
        ...(staticPage ? { staticPage } : {}),
      },
    },
    payloadShape,
    topLevelKeys: Object.keys(root).slice(0, 20),
  }
}

export function isSupportedHashnodeEvent(
  eventType: string
): eventType is SupportedHashnodeEvent {
  return (SUPPORTED_HASHNODE_EVENTS as readonly string[]).includes(
    eventType
  )
}
