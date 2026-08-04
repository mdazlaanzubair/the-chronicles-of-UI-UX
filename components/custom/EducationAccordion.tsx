import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Timeline from "@/components/seo/Timeline"
import { cn } from "@/lib/utils"
import type { AcademicInterface } from "@/type"
import { AtSignIcon, BookAIcon, GraduationCapIcon } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

type EducationAccordionProps = {
  items: AcademicInterface[]
  fetchError?: string
}

const googleSearchUrl = (query: string) =>
  `https://www.google.com/search?q=${encodeURIComponent(query)}`

const EducationAccordion = ({ items, fetchError }: EducationAccordionProps) => {
  if (!fetchError && items.length === 0) return null

  return (
    <section id="education" aria-labelledby="education-heading">
      <header className="p-4">
        <span className="eyebrow text-xs">Education</span>
        <h2
          id="education-heading"
          className="mb-3 font-heading text-2xl font-semibold"
        >
          Academics
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Education laid the foundation of my technical and academic knowledge.
        </p>
      </header>

      {fetchError ? (
        <p className="border-t border-accent p-4 text-xs text-muted-foreground">
          {fetchError}
        </p>
      ) : (
        <Accordion hiddenUntilFound>
          {items.map((item, idx) => {
            const { institute, degree, field, timeline } = item
            const { website, name } = institute

            return (
              <AccordionItem
                key={`${name}-${degree}-${timeline}`}
                value={`education-${idx}`}
                className="border-b border-accent last:border-b-0"
              >
                <article>
                  <AccordionTrigger className="group flex items-center px-4 hover:no-underline">
                    <div className="rounded bg-secondary p-3">
                      <GraduationCapIcon className="size-3" />
                    </div>
                    <div>
                      <span className="text-xs font-medium text-muted-foreground">
                        <Timeline value={timeline} />
                      </span>

                      <span className="line-clamp-2 leading-snug font-semibold tracking-tight">
                        {degree}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="bg-background p-0">
                    <div className="flex items-center justify-between border-t border-b border-accent text-xs text-muted-foreground">
                      <Link
                        href={website || googleSearchUrl(name)}
                        className={cn(
                          buttonVariants({ variant: "link", size: "sm" }),
                          "text-[10px]"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AtSignIcon className="size-3" /> {name}
                      </Link>
                      <Link
                        href={googleSearchUrl(field)}
                        className={cn(
                          buttonVariants({ variant: "link", size: "sm" }),
                          "text-[10px]"
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BookAIcon className="size-3" />
                        {field}
                      </Link>
                    </div>
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

export default EducationAccordion
