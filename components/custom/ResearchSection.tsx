import { buttonVariants } from "../ui/button"
import { ChevronRightIcon, ExternalLinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import type { LegacyPublicationCardData } from "./legacyTypes"
import Link from "next/link"
import HorizontalCard from "./HorizontalCard"
import localConstantData from "@/constant.json"

const ResearchSection = () => {
  const publications =
    localConstantData.publications as LegacyPublicationCardData[]
  const hasMore = publications.length > 2

  if (publications.length <= 0) return null
  return (
    <section id="research" className="mb-10 flex flex-col gap-10">
      <div id="research-header" className="space-y-3">
        <span className="eyebrow">Featured Research</span>
        <h1 className="section-title">Research</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="section-para">
            Uncovering insights that drive innovation.
          </p>
          {hasMore && (
            <Link
              href="https://scholar.google.com/citations?user=K7XC7-MAAAAJ&hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "section-view-link"
              )}
            >
              View more
              <ExternalLinkIcon className="size-3" />
            </Link>
          )}
        </div>
      </div>
      <div id="research-card" className="flex w-full flex-col gap-5">
        {publications.slice(0, 2).map((item, idx) => {
          const journal = item.journal.trim().length <= 0 ? null : item.journal
          const year = item.year.trim().length <= 0 ? null : item.year

          const ResearchTag = () => {
            return (
              <div className="flex items-center gap-1">
                <strong className="text-primary">{item.status}</strong>
                {journal && (
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

          return (
            <HorizontalCard
              key={`research-card-${idx}-${item.title}`}
              tag={<ResearchTag />}
              title={item.title}
              // description=""
              footer={
                <div className="space-y-3">
                  <h3 className="font-heading text-sm font-semibold text-foreground">
                    Authors
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {item.authors.map((author, idx) => (
                      <span
                        key={`author-${item.title}-${author}-${idx}`}
                        className="section-card-badge"
                      >
                        {author}
                      </span>
                    ))}
                  </div>
                </div>
              }
              action={
                item.url.trim().length <= 0
                  ? null
                  : {
                      url: item.url,
                      title: "Read here",
                    }
              }
              // footer={<></>}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ResearchSection
