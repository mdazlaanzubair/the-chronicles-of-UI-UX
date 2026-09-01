import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Timeline from "@/components/seo/Timeline"
import { cn } from "@/lib/utils"
import type { ExperienceInterface } from "@/type"
import { AtSignIcon, Briefcase, MapPinIcon } from "lucide-react"
import { PortableText, type PortableTextComponents } from "next-sanity"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

type ExperienceAccordionProps = {
  items: ExperienceInterface[]
  fetchError?: string
}

const portableTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h4 className="mt-4 font-medium text-foreground">{children}</h4>
    ),
    h3: ({ children }) => (
      <h4 className="mt-4 font-medium text-foreground">{children}</h4>
    ),
    h4: ({ children }) => (
      <h4 className="mt-4 font-medium text-foreground">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-outside list-disc space-y-1 pl-5">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-outside list-decimal space-y-1 pl-5">{children}</ol>
    ),
  },
}

const googleSearchUrl = (query: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(query)}`

const ExperienceAccordion = ({
  items,
  fetchError,
}: ExperienceAccordionProps) => {
  if (!fetchError && items.length === 0) return null

  return (
    <section id="experience" aria-labelledby="experience-heading">
      <header className="p-4">
        <span className="eyebrow text-xs">Work</span>
        <h2
          id="experience-heading"
          className="mb-3 font-heading text-2xl font-semibold"
        >
          Experiences
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Professional roles that shaped my expertise in product development
          &amp; engineering.
        </p>
      </header>

      {fetchError ? (
        <p className="border-t border-accent p-4 text-xs text-muted-foreground">
          {fetchError}
        </p>
      ) : (
        <Accordion defaultValue={["experience-0"]} hiddenUntilFound>
          {items.reverse().map((item, idx) => {
            const { key_contributions, company, role, timeline } = item
            const { website, location, name: companyName } = company
            const contributionHeadingId = `experience-${idx}-contributions`

            return (
              <AccordionItem
                key={`${companyName}-${role}-${timeline}`}
                value={`experience-${idx}`}
                className="border-b border-accent last:border-b-0"
              >
                <article>
                  <AccordionTrigger className="group flex items-center px-4 hover:no-underline">
                    <div className="rounded bg-secondary p-3">
                      <Briefcase className="size-3" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        <Timeline value={timeline} />
                      </span>

                      <span className="line-clamp-2 leading-snug font-semibold tracking-tight">
                        {role}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="space-y-3 bg-background">
                    <div className="flex items-center justify-between border-t border-b border-accent text-xs text-muted-foreground">
                      <Link
                        href={website || googleSearchUrl(companyName)}
                        className={cn(
                          buttonVariants({ variant: "link", size: "sm" }),
                          "text-[10px]"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AtSignIcon className="size-3" /> {companyName}
                      </Link>
                      <Link
                        href={googleSearchUrl(`${companyName} ${location}`)}
                        className={cn(
                          buttonVariants({ variant: "link", size: "sm" }),
                          "text-[10px]"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPinIcon className="size-3" />
                        {location}
                      </Link>
                    </div>
                    <section
                      aria-labelledby={contributionHeadingId}
                      className="space-y-1 px-5 pt-2 text-xs text-muted-foreground"
                    >
                      <h4
                        id={contributionHeadingId}
                        className="mb-3 font-medium text-foreground"
                      >
                        Responsibilities
                      </h4>
                      <div className="text-xs text-muted-foreground">
                        <PortableText
                          value={key_contributions}
                          components={portableTextComponents}
                        />
                      </div>
                    </section>
                  </AccordionContent>
                </article>
              </AccordionItem>
            )
          })}
        </Accordion>
      )}
    </section>
  )
}

export default ExperienceAccordion
