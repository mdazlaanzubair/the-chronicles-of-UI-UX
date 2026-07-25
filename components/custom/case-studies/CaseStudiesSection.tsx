import Link from "next/link"
import localConstantData from "@/constant.json"
import { cn } from "@/lib/utils"
import { ExternalLinkIcon } from "lucide-react"
import { CaseStudyInterface } from "@/type"
import CaseStudyCard from "./CaseStudyCard"
import { buttonVariants } from "@/components/ui/button"

const CaseStudiesSection = () => {
  const caseStudies = localConstantData.caseStudies as CaseStudyInterface[]
  const featured = caseStudies.filter((item) => item.metadata.isFeatured)
  if (featured.length <= 0) return null
  return (
    <section id="case-studies" className="mb-10 flex flex-col gap-10">
      <div id="case-studies-header" className="space-y-3">
        <span className="eyebrow">Solution Walkthrough</span>
        <h1 className="font-heading text-6xl">Case Studies</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Transforming complex challenges into outcomes.
          </p>
          <Link
            href="/case-studies"
            className={cn(
              buttonVariants({ variant: "ghost", size: "sm" }),
              "section-view-link"
            )}
          >
            View more
            <ExternalLinkIcon className="size-3" />
          </Link>
        </div>
      </div>
      <div id="case-studies-card" className="flex w-full flex-col gap-5">
        {featured.slice(0, 2).map((item, idx) => {
          return (
            <CaseStudyCard
              key={`${idx}-${item.slug}-case-study`}
              caseStudyItem={item}
            />
          )
        })}
      </div>
    </section>
  )
}

export default CaseStudiesSection
