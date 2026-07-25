"use client"

import { PublicationInterface } from "@/type"
import HorizontalCard from "../HorizontalCard"
import { ChevronRightIcon, GlobeIcon } from "lucide-react"
import { CardAction, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ResearchCardProps {
  researchItem: PublicationInterface
}

const ResearchCard = ({ researchItem }: ResearchCardProps) => {
  const { title, authors, metadata } = researchItem
  const { journal, year, status, doi } = metadata

  // HELPER COMPONENTS
  const ResearchEyebrow = () => {
    return (
      <div className="flex items-center gap-1 text-muted-foreground">
        <span className="text-primary">{status}</span>
        {journal && status === "published" && (
          <>
            <ChevronRightIcon className="mb-0.5 h-3 w-3" />
            <span title={journal}>
              {journal && journal.split(" ").slice(0, 5).join(" ")}
            </span>
          </>
        )}
        {year && (
          <>
            <ChevronRightIcon className="mb-0.5 h-3 w-3" />
            <span>{year && year}</span>
          </>
        )}
      </div>
    )
  }

  const ResearchHeader = () => {
    return (
      <>
        <span className="eyebrow md:text-[11px]">
          <ResearchEyebrow />
        </span>
        <CardTitle
          title={title}
          aria-label={title}
          className="line-clamp-2 text-2xl font-semibold tracking-normal"
        >
          {title.split(" ").slice(0).join(" ")}
        </CardTitle>
        {doi && (
          <CardAction>
            <Link
              href={doi}
              target="_blank"
              title={title || "View"}
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "icon-lg" }),
                "text-muted-foreground"
              )}
            >
              <GlobeIcon className="size-5" />
            </Link>
          </CardAction>
        )}
      </>
    )
  }

  const ResearchFooter = () => {
    return (
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="section-card-badge bg-transparent p-0 font-semibold">
          Authors
        </h3>
        {authors.map((author, idx) => (
          <span
            key={`author-${title}-${author}-${idx}`}
            className="section-card-badge"
          >
            {author}
          </span>
        ))}
      </div>
    )
  }

  const handleCardClick = () => {
    if (doi) {
      window.open(doi, "_blank")
    }
  }

  return (
    <HorizontalCard
      className="cursor-pointer"
      header={<ResearchHeader />}
      footer={<ResearchFooter />}
      onCardClick={handleCardClick}
    />
  )
}

export default ResearchCard
