"use client"

import ResearchViewModal from "@/components/custom/research-list/ResearchViewModal"
import type { PublicationInterface } from "@/type"
import { useState } from "react"

const ResearchList = ({
  publications,
}: {
  publications: PublicationInterface[]
}) => {
  const [selectedPublication, setSelectedPublication] =
    useState<PublicationInterface | null>(null)

  return (
    <>
      <section className="flex flex-col gap-0">
        {publications.map((publication) => (
          <article
            key={publication.id}
            className="group/research relative flex flex-col gap-2 border-b border-accent bg-card p-4 transition-colors last:border-b-0 hover:bg-muted/30"
          >
            <button
              type="button"
              aria-label={`Read abstract for ${publication.title}`}
              onClick={() => setSelectedPublication(publication)}
              className="absolute inset-0 z-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset"
            />

            <div className="pointer-events-none relative z-10 min-w-0">
              <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
                {publication.metadata.isFeatured && (
                  <span className="text-xs font-medium text-primary">
                    Featured
                  </span>
                )}
                <span className="text-xs font-medium text-muted-foreground capitalize">
                  {publication.metadata.journal ||
                    publication.metadata.status.replaceAll("_", " ")}
                </span>
                {publication.metadata.year && (
                  <span className="text-xs font-medium text-muted-foreground">
                    • {publication.metadata.year}
                  </span>
                )}
              </div>

              <h2 className="line-clamp-2 text-lg leading-snug font-semibold tracking-tight transition-colors group-hover/research:text-foreground sm:text-base">
                {publication.title}
              </h2>

              <p className="mt-1 line-clamp-3 text-xs leading-5 text-muted-foreground">
                {publication.abstract}
              </p>
            </div>
          </article>
        ))}
      </section>

      <ResearchViewModal
        isOpen={selectedPublication !== null}
        data={selectedPublication}
        onClose={() => setSelectedPublication(null)}
      />
    </>
  )
}

export default ResearchList
