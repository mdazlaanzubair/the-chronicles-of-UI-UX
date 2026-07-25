import Link from "next/link"
import localConstantData from "@/constant.json"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import { ExternalLinkIcon } from "lucide-react"
import type { LegacyHorizontalCardData } from "./legacyTypes"
import HorizontalCard from "./HorizontalCard"
import { Badge } from "../ui/badge"

const WritingSection = () => {
  const writing = (localConstantData.writing ||
    []) as LegacyHorizontalCardData[]
  const hasMore = writing.length > 2

  if (writing.length <= 0) return null
  return (
    <section id="writing" className="mb-10 flex flex-col gap-10">
      <div id="writing-header" className="space-y-3">
        <span className="eyebrow">Articles & Essays</span>
        <h1 className="section-title">Writing</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="section-para">
            Thoughts on software engineering, AI systems, and design.
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
      <div id="writing-card" className="flex w-full flex-col gap-5">
        <div className="mx-auto w-full max-w-5xl">
          {/* Masonry Parent Wrapper */}
          <div className="columns-1 gap-5 sm:columns-2">
            {writing.slice(0, 2).map((item, idx) => {
              const journal = item.journal?.trim().length ? item.journal : null
              const year = item.year?.trim().length ? item.year : null

              const Tag = () => {
                return (
                  <div className="flex items-center justify-between gap-3">
                    <span className="eyebrow md:text-[11px]">{`${item.status} ${journal ? `· ${journal}` : ""} ${year ? `· ${year}` : ""}`}</span>

                    {item.url.trim().length <= 0 ? null : (
                      <Link
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "sm" }),
                          "text-muted-foreground capitalize opacity-0 transition-opacity group-hover:opacity-100 hover:text-secondary-foreground"
                        )}
                      >
                        Read here
                        <ExternalLinkIcon className="size-3" />
                      </Link>
                    )}
                  </div>
                )
              }

              return (
                <HorizontalCard
                  key={`writing-card-${idx}-${item.title}`}
                  tag={<Tag />}
                  title={item.title}
                  // description={""}
                  content={
                    <>
                      <div className="flex flex-wrap gap-3">
                        {item.authors.map((author, idx) => (
                          <Badge
                            key={`author-${item.title}-${author}-${idx}`}
                            variant="ghost"
                            className="section-card-badge"
                          >
                            {author}
                          </Badge>
                        ))}
                      </div>
                    </>
                  }
                  // footer={<></>}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WritingSection
