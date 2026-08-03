import ResearchList from "@/components/custom/research-list/ResearchList"
import JsonLd from "@/components/seo/JsonLd"
import { toPublications } from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import { PUBLICATIONS_LIST_QUERY } from "@/src/sanity/queries"
import { absoluteUrl, createPageMetadata } from "@/src/seo/site"
import { createCollectionJsonLd } from "@/src/seo/structured-data"
import type { PublicationInterface } from "@/type"

const options = { next: { revalidate: 30 } }
const description =
  "Research publications by Muhammad Azlaan Zubair, including full abstracts, co-authors, publication status, journals, and DOI links."

export const metadata = createPageMetadata({
  title: "Research",
  description,
  path: "/research",
})

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

  const researchJsonLd = createCollectionJsonLd({
    path: "/research",
    name: "Research publications",
    description,
    items: publications.map((publication) => {
      const doiUrl = publication.metadata.doi
        ? /^https?:\/\//i.test(publication.metadata.doi)
          ? publication.metadata.doi
          : `https://doi.org/${publication.metadata.doi.replace(/^doi:\s*/i, "")}`
        : null

      return {
        "@type": "ScholarlyArticle",
        "@id": `${absoluteUrl("/research")}#${encodeURIComponent(publication.id)}`,
        headline: publication.title,
        description: publication.abstract,
        abstract: publication.abstract,
        author: publication.authors.map((author) => ({
          "@type": "Person",
          name: author,
        })),
        dateCreated: publication.createdAt,
        dateModified: publication.updatedAt,
        ...(publication.metadata.year
          ? { datePublished: String(publication.metadata.year) }
          : {}),
        ...(publication.metadata.journal
          ? {
              isPartOf: {
                "@type": "Periodical",
                name: publication.metadata.journal,
              },
            }
          : {}),
        ...(doiUrl ? { url: doiUrl, sameAs: doiUrl } : {}),
      }
    }),
  })

  return (
    <section
      id="research"
      aria-labelledby="research-heading"
      className="flex flex-col"
    >
      <JsonLd data={researchJsonLd} />
      <header className="sr-only">
        <h1 id="research-heading">Research publications</h1>
        <p>{description}</p>
      </header>
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
