"use client"

import { GlassesIcon } from "lucide-react"
import HorizontalCard from "../HorizontalCard"
import { CaseStudyInterface } from "@/type"
import { CardAction, CardDescription, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const CaseStudyCard = ({
  caseStudyItem,
}: {
  caseStudyItem: CaseStudyInterface
}) => {
  const { title, slug, description, metadata } = caseStudyItem
  const { project, company } = metadata

  // HELPER COMPONENTS
  const CaseStudyHeader = () => {
    return (
      <>
        <span className="eyebrow md:text-[11px]">Featured</span>
        <CardTitle
          title={title}
          aria-label={title}
          className="line-clamp-2 text-2xl font-semibold tracking-normal"
        >
          {title.split(" ").slice(0).join(" ")}
        </CardTitle>
        <CardDescription>
          <p className="line-clamp-3 text-muted-foreground">{description}</p>
        </CardDescription>
        <CardAction>
          <Link
            href={`/case-studies/${slug}`}
            target="_blank"
            title="Read Case Study"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon-lg" }),
              "text-muted-foreground"
            )}
          >
            <GlassesIcon className="size-5" />
          </Link>
        </CardAction>
      </>
    )
  }

  const CaseStudyFooter = () => {
    return (
      <div className="flex flex-wrap items-center gap-3">
        {/* Attributes list */}
        <h3 className="section-card-badge bg-transparent p-0 font-semibold">
          Entities
        </h3>

        {/* Project */}
        {project && project.website && (
          <HoverCard key={`item-${slug}-${project.name}`}>
            <HoverCardTrigger>
              <span className="border-b border-dashed border-foreground">
                {project.name}
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="flex flex-wrap items-center gap-1">
                <Link
                  href={project.website}
                  className="inline-block text-primary underline underline-offset-2"
                  title={`${project.name}'s website`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.name}
                </Link>
                <span>is the project I worked on.</span>
              </p>
            </HoverCardContent>
          </HoverCard>
        )}

        {/* Company */}
        {company && company.website && (
          <HoverCard key={`item-${slug}-${company.name}`}>
            <HoverCardTrigger>
              <span className="border-b border-dashed border-foreground">
                {company.name}
              </span>
            </HoverCardTrigger>
            <HoverCardContent>
              <p className="flex flex-wrap items-center gap-1">
                <Link
                  href={company.website}
                  className="text-primary underline underline-offset-2"
                  title={`${company.name}'s website`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {company.name}
                </Link>
                <span>is the company I worked at.</span>
              </p>
            </HoverCardContent>
          </HoverCard>
        )}
      </div>
    )
  }

  return (
    <HorizontalCard header={<CaseStudyHeader />} footer={<CaseStudyFooter />} />
  )
}

export default CaseStudyCard
