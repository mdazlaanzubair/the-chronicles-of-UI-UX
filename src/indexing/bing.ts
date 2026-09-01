const BING_SUBMIT_URL_BATCH_ENDPOINT =
  "https://ssl.bing.com/webmaster/api.svc/json/SubmitUrlbatch"

const BING_REQUEST_TIMEOUT_MS = 10_000

export const PORTFOLIO_SITE_URL = "https://mdazlaanzubair.com"
export const BLOG_SITE_URL = "https://blog.mdazlaanzubair.com"

const PORTFOLIO_ROOT_URL = `${PORTFOLIO_SITE_URL}/`
const BLOG_ROOT_URL = `${BLOG_SITE_URL}/`

export type BingSubmissionBatch = {
  siteUrl: string
  urlList: string[]
}

export type BingSubmissionResult = {
  accepted: boolean
  siteUrl: string
  urlCount: number
  status: number | null
  failureCategory?: "timeout" | "network"
}

export type SanitizedBingSubmissionResult = Pick<
  BingSubmissionResult,
  "accepted" | "siteUrl" | "urlCount" | "status" | "failureCategory"
>

type SubmitBingUrlBatchesOptions = {
  apiKey: string
  batches: BingSubmissionBatch[]
  fetchImplementation?: typeof fetch
}

function isUrlOwnedBySite(url: string, siteUrl: string): boolean {
  try {
    return new URL(url).origin === new URL(siteUrl).origin
  } catch {
    return false
  }
}

function validateBatch(batch: BingSubmissionBatch): void {
  if (batch.urlList.length === 0) {
    throw new Error("Bing submission batches cannot be empty")
  }

  if (
    !batch.urlList.every((url) =>
      isUrlOwnedBySite(url, batch.siteUrl)
    )
  ) {
    throw new Error(
      `Bing submission batch contains a URL outside ${batch.siteUrl}`
    )
  }
}

export function buildBingSubmissionBatches(
  resourceUrl: string
): BingSubmissionBatch[] {
  if (!isUrlOwnedBySite(resourceUrl, BLOG_SITE_URL)) {
    throw new Error(
      "Hashnode resource URL does not belong to the configured blog"
    )
  }

  return [
    {
      siteUrl: PORTFOLIO_SITE_URL,
      urlList: [PORTFOLIO_ROOT_URL],
    },
    {
      siteUrl: BLOG_SITE_URL,
      urlList: [BLOG_ROOT_URL, resourceUrl],
    },
  ]
}

async function submitBingUrlBatch({
  apiKey,
  batch,
  fetchImplementation,
}: {
  apiKey: string
  batch: BingSubmissionBatch
  fetchImplementation: typeof fetch
}): Promise<BingSubmissionResult> {
  validateBatch(batch)

  const endpoint = new URL(BING_SUBMIT_URL_BATCH_ENDPOINT)
  endpoint.searchParams.set("apikey", apiKey)

  try {
    const response = await fetchImplementation(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(batch),
      cache: "no-store",
      signal: AbortSignal.timeout(BING_REQUEST_TIMEOUT_MS),
    })

    // Bing documents empty and JSON success bodies, so only status determines
    // acceptance. Consuming the body still allows the connection to be reused.
    await response.text()

    return {
      accepted: response.status === 200,
      siteUrl: batch.siteUrl,
      urlCount: batch.urlList.length,
      status: response.status,
    }
  } catch (error) {
    const failureCategory =
      error instanceof Error && error.name === "TimeoutError"
        ? "timeout"
        : "network"

    return {
      accepted: false,
      siteUrl: batch.siteUrl,
      urlCount: batch.urlList.length,
      status: null,
      failureCategory,
    }
  }
}

export async function submitBingUrlBatches({
  apiKey,
  batches,
  fetchImplementation = fetch,
}: SubmitBingUrlBatchesOptions): Promise<BingSubmissionResult[]> {
  return Promise.all(
    batches.map((batch) =>
      submitBingUrlBatch({
        apiKey,
        batch,
        fetchImplementation,
      })
    )
  )
}

export function sanitizeBingSubmissionResult(
  result: BingSubmissionResult
): SanitizedBingSubmissionResult {
  return {
    accepted: result.accepted,
    siteUrl: result.siteUrl,
    urlCount: result.urlCount,
    status: result.status,
    ...(result.failureCategory
      ? { failureCategory: result.failureCategory }
      : {}),
  }
}
