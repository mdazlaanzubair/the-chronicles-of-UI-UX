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
      <div className="motion-stagger flex flex-col gap-0">
        {publications.map((publication) => {
          const statusLabel = publication.metadata.status.replaceAll("_", " ")

          return (
            <article
              id={encodeURIComponent(publication.id)}
              key={publication.id}
              className="motion-lift group/research relative flex flex-col gap-2 border-b border-accent bg-card p-4 last:border-b-0 hover:bg-muted/30"
            >
              <button
                type="button"
                aria-label={`View details for ${publication.title}`}
                aria-haspopup="dialog"
                onClick={() => setSelectedPublication(publication)}
                className="absolute inset-0 z-0 focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-inset"
              />

              <header className="pointer-events-none relative z-10 min-w-0">
                <div className="mb-1.5 flex flex-wrap items-center gap-1.5">
                  {publication.metadata.isFeatured ? (
                    <span className="text-xs font-medium text-primary">
                      Featured
                    </span>
                  ) : null}
                  <span className="text-xs font-medium text-muted-foreground capitalize">
                    {publication.metadata.journal || statusLabel}
                  </span>
                  {publication.metadata.year ? (
                    <span className="text-xs font-medium text-muted-foreground">
                      <span aria-hidden="true">• </span>
                      <time dateTime={String(publication.metadata.year)}>
                        {publication.metadata.year}
                      </time>
                    </span>
                  ) : null}
                </div>

                <h2 className="text-lg leading-snug font-semibold tracking-tight transition-colors group-hover/research:text-foreground sm:text-base">
                  {publication.title}
                </h2>
              </header>
            </article>
          )
        })}
      </div>

      <ResearchViewModal
        isOpen={selectedPublication !== null}
        data={selectedPublication}
        onClose={() => setSelectedPublication(null)}
      />
    </>
  )
}

export default ResearchList
