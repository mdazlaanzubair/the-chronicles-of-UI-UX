import assert from "node:assert/strict"
import test from "node:test"

import {
  BLOG_SITE_URL,
  buildBingSubmissionBatches,
  PORTFOLIO_SITE_URL,
  submitBingUrlBatches,
} from "../src/indexing/bing.ts"

const articleUrl = `${BLOG_SITE_URL}/claude-pro-worth-20`

test("builds one ownership-safe batch for each Bing site", () => {
  assert.deepEqual(buildBingSubmissionBatches(articleUrl), [
    {
      siteUrl: PORTFOLIO_SITE_URL,
      urlList: [`${PORTFOLIO_SITE_URL}/`],
    },
    {
      siteUrl: BLOG_SITE_URL,
      urlList: [`${BLOG_SITE_URL}/`, articleUrl],
    },
  ])

  assert.throws(
    () =>
      buildBingSubmissionBatches(
        "https://attacker.example/published-post"
      ),
    /does not belong to the configured blog/
  )
})

test("submits both batches, URL-encodes the API key, and accepts HTTP 200", async () => {
  const apiKey = "key with +, / and ? characters"
  const calls = []
  const batches = buildBingSubmissionBatches(articleUrl)

  const results = await submitBingUrlBatches({
    apiKey,
    batches,
    fetchImplementation: async (input, init) => {
      calls.push({ input, init })

      // A malformed body is still valid because Bing documents acceptance by
      // HTTP status and may return either an empty or JSON response body.
      return new Response("not-json", { status: 200 })
    },
  })

  assert.equal(calls.length, 2)
  assert.equal(results.every((result) => result.accepted), true)
  assert.equal(JSON.stringify(results).includes(apiKey), false)

  calls.forEach(({ input, init }, index) => {
    const endpoint = new URL(input)
    assert.equal(endpoint.searchParams.get("apikey"), apiKey)
    assert.equal(init.method, "POST")
    assert.equal(
      init.headers["Content-Type"],
      "application/json; charset=utf-8"
    )
    assert.deepEqual(JSON.parse(init.body), batches[index])
  })
})

test("attempts both batches and reports a single HTTP failure", async () => {
  const batches = buildBingSubmissionBatches(articleUrl)
  let callCount = 0

  const results = await submitBingUrlBatches({
    apiKey: "test-key",
    batches,
    fetchImplementation: async () => {
      callCount += 1
      return new Response("", {
        status: callCount === 1 ? 200 : 429,
      })
    },
  })

  assert.equal(callCount, 2)
  assert.deepEqual(
    results.map(({ accepted, status }) => ({ accepted, status })),
    [
      { accepted: true, status: 200 },
      { accepted: false, status: 429 },
    ]
  )
})

test("reports both network failures without leaking exception details", async () => {
  const results = await submitBingUrlBatches({
    apiKey: "test-key",
    batches: buildBingSubmissionBatches(articleUrl),
    fetchImplementation: async () => {
      throw new Error("request failed with secret upstream details")
    },
  })

  assert.equal(results.length, 2)
  assert.equal(results.every((result) => !result.accepted), true)
  assert.equal(
    results.every(
      (result) =>
        result.status === null &&
        result.failureCategory === "network"
    ),
    true
  )
  assert.equal(JSON.stringify(results).includes("secret"), false)
})

test("classifies timeout failures separately", async () => {
  const timeoutError = new Error("request timed out")
  timeoutError.name = "TimeoutError"

  const results = await submitBingUrlBatches({
    apiKey: "test-key",
    batches: buildBingSubmissionBatches(articleUrl),
    fetchImplementation: async () => {
      throw timeoutError
    },
  })

  assert.equal(
    results.every(
      (result) => result.failureCategory === "timeout"
    ),
    true
  )
})
