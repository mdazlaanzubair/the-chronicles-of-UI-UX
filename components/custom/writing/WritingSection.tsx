import Link from "next/link"
import localConstantData from "@/constant.json"
import { cn } from "@/lib/utils"
import { ExternalLinkIcon } from "lucide-react"
import { WritingInterface } from "@/type"
import { buttonVariants } from "@/components/ui/button"
import WritingCard from "./WritingCard"

const WritingSection = () => {
  const works = localConstantData.writings as WritingInterface[]
  const featured = works.filter((item) => item.metadata.isFeatured)
  if (featured.length <= 0) return null
  return (
    <section id="work" className="mb-10 flex flex-col gap-10">
      <div id="work-header" className="space-y-3">
        <span className="eyebrow">Featured Posts</span>
        <h1 className="font-heading text-6xl">Writing</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Technical, academic, and visual communication.
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
      <div
        id="writing-card"
        className="group/writing columns-1 gap-4 space-y-4 md:columns-2"
      >
        {featured.map((item, idx) => {
          return (
            <WritingCard key={`${idx}-${item.title}-writing`} writing={item} />
          )
        })}
      </div>
    </section>
  )
}

export default WritingSection
