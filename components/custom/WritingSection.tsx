import Link from "next/link"
import localConstantData from "@/constant.json"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import { ExternalLinkIcon } from "lucide-react"
import HorizontalCard from "./HorizontalCard"
import { Badge } from "../ui/badge"
import { WritingInterface } from "@/type"

const WritingSection = () => {
  const writing = (localConstantData.writings || []) as WritingInterface[]
  const featured = writing.filter((item) => item.metadata.isFeatured)
  if (featured.length <= 0) return null
  return (
    <section id="writing" className="mb-10 flex flex-col gap-10">
      <div id="writing-header" className="space-y-3">
        <span className="eyebrow">Articles & Essays</span>
        <h1 className="section-title">Writing</h1>
        <div className="flex items-center justify-between gap-3">
          <p className="section-para">
            Thoughts on software engineering, AI systems, and design.
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
      <div id="writing-card" className="flex w-full flex-col gap-5">
        <div className="mx-auto w-full max-w-5xl">
          {/* Masonry Parent Wrapper */}
          <div className="columns-1 gap-5 sm:columns-2">
            {featured.map((item, idx) => {
              return <div key={`${idx}-${item.title}`}>{item.title}</div>
              //   <HorizontalCard
              //     key={`writing-card-${idx}-${item.title}`}
              //     tag={item.metadata.category}
              //     title={item.title}
              //     // description={item.description}
              //     content={
              //       <>
              //         <div className="flex flex-wrap gap-3">
              //           {item.tags.map((tag, idx) => (
              //             <Badge
              //               key={`tag-${item.title}-${tag}-${idx}`}
              //               variant="ghost"
              //               className="section-card-badge"
              //             >
              //               {tag}
              //             </Badge>
              //           ))}
              //         </div>
              //       </>
              //     }
              //     // footer={<></>}
              //   />
              // )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WritingSection
