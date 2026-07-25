import Link from "next/link"
import localConstantData from "@/constant.json"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import { ExternalLinkIcon, FileTextIcon } from "lucide-react"
import type { LegacyCaseStudyCardData } from "./legacyTypes"
import HorizontalCard from "./HorizontalCard"

const CaseStudiesSection = () => {
  const caseStudies =
    localConstantData.case_studies as LegacyCaseStudyCardData[]
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
        {caseStudies.slice(0).map((item, idx) => {
          return (
            <HorizontalCard
              key={`research-card-${idx}-${item.title}`}
              tag={`${item.timeline}`}
              title={item.title}
              content={item.description}
              // content={
              //   <>
              //     <div className="flex flex-wrap gap-3">
              //       {item.authors.map((author, idx) => (
              //         <Badge
              //           key={`author-${item.title}-${author}-${idx}`}
              //           variant="ghost"
              //           className="section-card-badge"
              //         >
              //           {author}
              //         </Badge>
              //       ))}
              //     </div>
              //   </>
              // }
              footer={
                <div className="flex w-full items-center justify-between gap-3">
                  <span className="eyebrow text-primary md:text-[11px]">
                    @{item.company.name}
                  </span>

                  <Link
                    href={`/case-studies/${item.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "sm" }),
                      "section-view-link"
                    )}
                  >
                    <FileTextIcon className="size-3" />
                    Read Case Study
                  </Link>
                </div>
              }
            />
          )
        })}
      </div>
    </section>
  )
}

export default CaseStudiesSection
