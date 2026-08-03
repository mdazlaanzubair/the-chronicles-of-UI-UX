import ResearchList from "@/components/custom/research-list/ResearchList"
import { toPublications } from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import { PUBLICATIONS_LIST_QUERY } from "@/src/sanity/queries"
import type { PublicationInterface } from "@/type"

const options = { next: { revalidate: 30 } }

export default async function Page() {
  let publications: PublicationInterface[] = []
  let fetchError: string | null = null

  try {
    const res = await client.fetch(PUBLICATIONS_LIST_QUERY, {}, options)
    publications = toPublications(res)
  } catch (error: unknown) {
    console.error("Sanity fetch error:", error)
    fetchError =
      error instanceof Error ? error.message : "Failed to load publications."
  }

  return (
    <section id="research" className="flex flex-col">
      {publications.length === 0 ? (
        <div className="rounded-md border border-dashed border-accent bg-muted/20 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            {fetchError || "No research publications have been added yet."}
          </p>
        </div>
      ) : (
        <ResearchList publications={publications} />
      )}
    </section>
  )
}
