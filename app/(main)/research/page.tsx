import Link from "next/link"
import { PUBLICATIONS_LIST_QUERY } from "@/src/sanity/queries/publications"
import { toPublications } from "@/src/sanity/adapters"
import { PublicationInterface } from "@/type"
import { client } from "@/src/sanity/client"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const options = { next: { revalidate: 30 } }

export default async function Page() {
  let publications: PublicationInterface[] = []
  let fetchError: string | null = null

  try {
    // const { data } = await sanityFetch({ query: PUBLICATIONS_LIST_QUERY })
    const data = await client.fetch(PUBLICATIONS_LIST_QUERY, {}, options)
    publications = toPublications(data)
  } catch (error: any) {
    console.error("Sanity fetch error:", error)
    fetchError = error?.message || "Failed to load publications."
  }

  return (
    <section id="research" className="flex flex-col">
      {(() => {
        if (publications.length <= 0) {
          return (
            <div
              key="no-publication-container"
              className="rounded-md border border-dashed border-accent bg-muted/20 p-4"
            >
              <p className="text-sm font-medium text-muted-foreground">
                {fetchError
                  ? fetchError
                  : "No research publications have been added yet."}
              </p>
            </div>
          )
        }

        return (
          <section key="publication-container" className="flex flex-col gap-0">
            {publications.map((pub, idx) => {
              const doiUrl = pub.metadata.doi

              return (
                <article
                  key={`publication-${pub.title}-${idx}`}
                  className="group/research flex cursor-pointer flex-row items-center gap-4 border-b border-accent p-4 last:border-b-0"
                >
                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 self-stretch">
                    <div>
                      <div className="mb-1.5 flex flex-wrap gap-1.5">
                        <span className="text-xs font-medium text-muted-foreground capitalize">
                          {pub.metadata.journal ||
                            pub.metadata.status?.replace(/_/g, " ")}
                        </span>
                        {pub.metadata.year && (
                          <span className="text-xs font-medium text-muted-foreground">
                            • {pub.metadata.year}
                          </span>
                        )}
                      </div>

                      {doiUrl ? (
                        <h2 className="line-clamp-3 text-lg leading-snug font-semibold tracking-tight text-muted-foreground sm:text-base">
                          <Link
                            href={doiUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="transition-all duration-300 ease-in-out group-hover/research:text-foreground group-hover/research:underline"
                          >
                            {pub.title}
                          </Link>
                        </h2>
                      ) : (
                        <HoverCard>
                          <HoverCardTrigger className="cursor-pointer border-b border-dashed border-secondary-foreground">
                            {pub.title}
                          </HoverCardTrigger>
                          <HoverCardContent
                            side="top"
                            align="center"
                            className="space-y-3 w-56"
                          >
                            <h1 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                              Abstract
                            </h1>
                            <p className="text-sm leading-6 text-muted-foreground">
                              {pub.abstract}
                            </p>
                          </HoverCardContent>
                        </HoverCard>
                      )}

                      {pub.authors && pub.authors.length > 0 && (
                        <p className="mt-1 text-xs text-muted-foreground">
                          {pub.authors.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              )
            })}
          </section>
        )
      })()}
    </section>
  )
}
