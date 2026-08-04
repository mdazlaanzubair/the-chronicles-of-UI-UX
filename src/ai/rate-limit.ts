import "server-only"

const WINDOW_MS = 60_000
const MAX_REQUESTS = 10

interface RateEntry {
  count: number
  resetAt: number
}

const requests = new Map<string, RateEntry>()

export function checkAssistantRateLimit(identifier: string) {
  const now = Date.now()

  if (requests.size > 1_000) {
    for (const [key, entry] of requests) {
      if (entry.resetAt <= now) requests.delete(key)
    }
  }

  const existing = requests.get(identifier)
  if (!existing || existing.resetAt <= now) {
    requests.set(identifier, { count: 1, resetAt: now + WINDOW_MS })
    return { allowed: true, retryAfter: 0 }
  }

  if (existing.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      retryAfter: Math.max(1, Math.ceil((existing.resetAt - now) / 1_000)),
    }
  }

  existing.count += 1
  return { allowed: true, retryAfter: 0 }
}
