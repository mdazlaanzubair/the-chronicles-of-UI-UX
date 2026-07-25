"use client"

import { BookOpenText } from "lucide-react"
import VerticalCard from "../VerticalCard"
import { WritingInterface } from "@/type"
import { CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WritingCard = ({ writing }: { writing: WritingInterface }) => {
  const { title, metadata } = writing
  const { category, topics } = metadata

  // HELPER COMPONENTS
  const WorkFooter = () => {
    return (
      <div className="space-y-3">
        <CardTitle
          title={title}
          aria-label={title}
          className="line-clamp-3 text-2xl font-semibold tracking-normal"
        >
          {title}
        </CardTitle>

        <Link
          href={`#`}
          title="View Post"
          className={cn(
            buttonVariants({ variant: "outline", size: "sm" }),
            "text-muted-foreground"
          )}
        >
          <BookOpenText className="size-3" />
          View Post
        </Link>
      </div>
    )
  }

  return (
    <VerticalCard
      className="mb-3 h-85 w-full"
      header={
        <>
          <strong className="eyebrow" title="Category">
            {category}
          </strong>
          <span className="text-muted-foreground" title="Topics">
            {topics.join(" • ")}
          </span>
        </>
      }
      footer={<WorkFooter />}
    />
  )
}

export default WritingCard
