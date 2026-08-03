import { toInterests } from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import { INTERESTS_QUERY } from "@/src/sanity/queries"
import type { InterestType } from "@/type"

const options = { next: { revalidate: 30 } }

const Interest = async () => {
  let interests: InterestType = []
  let fetchError: string | null = null

  try {
    const response = await client.fetch(INTERESTS_QUERY, {}, options)
    interests = toInterests(response)
  } catch (error: unknown) {
    console.error("Sanity interests fetch error:", error)
    fetchError =
      error instanceof Error ? error.message : "Failed to load interests."
  }

  if (fetchError) {
    return (
      <section id="interests" className="p-4">
        <p className="text-xs text-muted-foreground">{fetchError}</p>
      </section>
    )
  }

  if (interests.length === 0) return null

  return (
    <section id="interests">
      <div className="p-4">
        <span className="eyebrow text-xs">Beyond the work</span>
        <h1 className="mb-3 font-heading text-2xl font-semibold">Interests</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          A broad toolkit organized around shipping robust digital products.
        </p>
      </div>
      <ul className="motion-stagger grid grid-cols-1 gap-4 px-4 pb-4 md:grid-cols-2 lg:grid-cols-3">
        {interests.map((interest, idx) => (
          <li
            key={interest}
            className="flex items-center gap-2 border border-accent bg-background p-3 text-xs font-semibold"
          >
            <span className="eyebrow">{idx + 1}</span>
            <p className="text-muted-foreground">{interest}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Interest
