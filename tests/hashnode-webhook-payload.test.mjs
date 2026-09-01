import assert from "node:assert/strict"
import test from "node:test"

import {
  isSupportedHashnodeEvent,
  parseHashnodeWebhookPayload,
  SUPPORTED_HASHNODE_EVENTS,
} from "../src/hashnode/webhook-payload.ts"

const canonicalPayload = {
  metadata: {
    uuid: "webhook-uuid",
  },
  data: {
    eventType: "post_published",
    publication: {
      id: "publication-id",
    },
    post: {
      id: "post-id",
    },
  },
}

test("parses Hashnode's canonical nested webhook payload", () => {
  const result = parseHashnodeWebhookPayload(
    JSON.stringify(canonicalPayload)
  )

  assert.equal(result?.payloadShape, "root.data")
  assert.deepEqual(result?.payload, canonicalPayload)
})

test("normalizes a payload envelope", () => {
  const result = parseHashnodeWebhookPayload(
    JSON.stringify({ payload: canonicalPayload })
  )

  assert.equal(result?.payloadShape, "payload.data")
  assert.deepEqual(result?.payload, canonicalPayload)
})

test("normalizes flat and mixed webhook payloads", () => {
  const flatResult = parseHashnodeWebhookPayload(
    JSON.stringify({
      metadata: canonicalPayload.metadata,
      eventType: canonicalPayload.data.eventType,
      publication: canonicalPayload.data.publication,
      post: canonicalPayload.data.post,
    })
  )

  const mixedResult = parseHashnodeWebhookPayload(
    JSON.stringify({
      metadata: canonicalPayload.metadata,
      eventType: canonicalPayload.data.eventType,
      data: {
        publication: canonicalPayload.data.publication,
        post: canonicalPayload.data.post,
      },
    })
  )

  assert.equal(flatResult?.payloadShape, "root")
  assert.deepEqual(flatResult?.payload, canonicalPayload)
  assert.equal(mixedResult?.payloadShape, "root.data")
  assert.deepEqual(mixedResult?.payload, canonicalPayload)
})

test("normalizes Hashnode's current root event and publication fields", () => {
  const result = parseHashnodeWebhookPayload(
    JSON.stringify({
      eventType: "post_updated",
      publicationId: "current-publication-id",
      occurredAt: "2026-09-01T08:50:33.577Z",
      data: {
        post: {
          id: "current-post-id",
          title: "Testing Blogs",
          slug: "testing-blogs",
          cuid: "current-post-cuid",
        },
      },
    })
  )

  assert.equal(result?.payloadShape, "root.data")
  assert.deepEqual(result?.payload, {
    data: {
      eventType: "post_updated",
      publication: {
        id: "current-publication-id",
      },
      post: {
        id: "current-post-id",
        slug: "testing-blogs",
      },
    },
  })
})

test("normalizes static-page payload key variants", () => {
  for (const key of ["staticPage", "static_page", "page"]) {
    const result = parseHashnodeWebhookPayload(
      JSON.stringify({
        eventType: "static_page_edited",
        data: {
          [key]: {
            id: "static-page-id",
            slug: "about",
          },
        },
      })
    )

    assert.deepEqual(result?.payload.data?.staticPage, {
      id: "static-page-id",
      slug: "about",
    })
  }
})

test("supports all six configured Hashnode events", () => {
  assert.deepEqual(SUPPORTED_HASHNODE_EVENTS, [
    "post_published",
    "post_updated",
    "post_deleted",
    "static_page_published",
    "static_page_edited",
    "static_page_deleted",
  ])

  assert.equal(
    SUPPORTED_HASHNODE_EVENTS.every(isSupportedHashnodeEvent),
    true
  )
  assert.equal(isSupportedHashnodeEvent("unknown_event"), false)
})

test("parses a double-encoded JSON payload", () => {
  const result = parseHashnodeWebhookPayload(
    JSON.stringify(JSON.stringify(canonicalPayload))
  )

  assert.deepEqual(result?.payload, canonicalPayload)
})

test("returns null for malformed and non-object JSON", () => {
  assert.equal(parseHashnodeWebhookPayload("{bad-json"), null)
  assert.equal(parseHashnodeWebhookPayload("[]"), null)
  assert.equal(parseHashnodeWebhookPayload('"not-json"'), null)
})
