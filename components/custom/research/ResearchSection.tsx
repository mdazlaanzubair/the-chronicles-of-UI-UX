import { buttonVariants } from "../../ui/button"
import { ExternalLinkIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import localConstantData from "@/constant.json"
import { PublicationInterface } from "@/type"
import ResearchCard from "./ResearchCard"

const ResearchSection = () => {
  const publications = localConstantData.publications as PublicationInterface[]
  const featured = publications.filter((item) => item.metadata.isFeatured)
  if (featured.length <= 0) return null
  return (
    <section id="research" className="mb-10 flex flex-col gap-10">
      <div id="research-header" className="space-y-3">
        <span className="eyebrow">Featured Research</span>
        <h1 className="section-title">Research</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="section-para">
            Uncovering insights that drive innovation.
          </p>
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
        </div>
      </div>
      <div
        id="research-card"
        className="group/research flex w-full flex-col gap-5"
      >
        {featured.map((item, idx) => {
          return (
            <ResearchCard
              key={`${idx}-${item.title}-research-card`}
              researchItem={item}
            />
          )
        })}
      </div>
    </section>
  )
}

export default ResearchSection
