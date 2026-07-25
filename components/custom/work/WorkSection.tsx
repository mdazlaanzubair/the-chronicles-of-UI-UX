import Link from "next/link"
import localConstantData from "@/constant.json"
import { cn } from "@/lib/utils"
import { ExternalLinkIcon } from "lucide-react"
import { CaseStudyInterface, WorkInterface } from "@/type"
import { buttonVariants } from "@/components/ui/button"
import WorkCard from "./WorkCard"

const WorkSection = () => {
  const works = localConstantData.works as WorkInterface[]
  const featured = works.filter((item) => item.metadata.isFeatured)
  if (featured.length <= 0) return null
  return (
    <section id="work" className="mb-10 flex flex-col gap-10">
      <div id="work-header" className="space-y-3">
        <span className="eyebrow">Side Projects</span>
        <h1 className="font-heading text-6xl">Work</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Developed while learning, and exploring technologies.
          </p>
          <Link
            href="/work"
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
      <div id="work-card" className="group/work flex w-full flex-col gap-0.5">
        {featured.slice(0, 2).map((item, idx) => {
          return <WorkCard key={`${idx}-${item.title}-work`} workItem={item} />
        })}
      </div>
    </section>
  )
}

export default WorkSection
