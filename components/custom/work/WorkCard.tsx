"use client"

import { BookOpenText } from "lucide-react"
import HorizontalCard from "../HorizontalCard"
import { WorkInterface } from "@/type"
import { CardAction, CardDescription, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const WorkCard = ({ workItem }: { workItem: WorkInterface }) => {
  const { title, description } = workItem

  // HELPER COMPONENTS
  const WorkHeader = () => {
    return (
      <>
        <CardTitle
          title={title}
          aria-label={title}
          className="mt-1 line-clamp-2 text-2xl font-semibold tracking-normal"
        >
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardAction>
          <Link
            href={`#`}
            title="View Work"
            className={cn(
              buttonVariants({ variant: "outline", size: "icon-lg" }),
              "text-muted-foreground"
            )}
          >
            <BookOpenText className="size-5" />
          </Link>
        </CardAction>
      </>
    )
  }

  return (
    <HorizontalCard
      className="cursor-pointer border-accent shadow-none ring-0 transition-opacity duration-300 group-hover/work:bg-transparent group-hover/work:opacity-30 hover:bg-card hover:!opacity-100 hover:shadow-none"
      header={<WorkHeader />}
    />
  )
}

export default WorkCard
