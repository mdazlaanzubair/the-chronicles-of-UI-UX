import Link from "next/link"
import localConstantData from "@/constant.json"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import { ExternalLinkIcon } from "lucide-react"
import { HorizontalCardData } from "@/type"
import HorizontalCard from "./HorizontalCard"
import { Badge } from "../ui/badge"

const CaseStudiesSection = () => {
  const caseStudies = localConstantData.case_studies as HorizontalCardData[]
  const hasMore = caseStudies.length > 2

  if (caseStudies.length <= 0) return null
  return (
    <section id="case-studies" className="mb-10 flex flex-col gap-10">
      <div id="case-studies-header" className="space-y-3">
        <span className="eyebrow">Solution Walkthrough</span>
        <h1 className="font-heading text-6xl">Case Studies</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Transforming complex challenges into outcomes.
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
      <div id="case-studies-card" className="flex w-full flex-col gap-5">
        {caseStudies.slice(0, 2).map((item, idx) => {
          const journal = item.journal.trim().length <= 0 ? null : item.journal
          const year = item.year.trim().length <= 0 ? null : item.year

          const Tag = () => {
            return (
              <div className="flex items-center justify-between gap-3">
                <span className="eyebrow md:text-[11px]">{`${item.status} ${journal && `· ${journal}`} ${year && `· ${year}`}`}</span>

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
              key={`research-card-${idx}-${item.title}`}
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
    </section>
  )
}

export default CaseStudiesSection
