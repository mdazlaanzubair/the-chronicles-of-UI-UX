import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { toAcademicHistory } from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import { ACADEMIC_HISTORY_QUERY } from "@/src/sanity/queries"
import { AcademicInterface } from "@/type"
import { AtSignIcon, BookAIcon, GraduationCapIcon } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

const options = { next: { revalidate: 30 } }

const EducationAccordion = async () => {
  let items: AcademicInterface[] = []
  let fetchError: string | null = null

  try {
    const response = await client.fetch(ACADEMIC_HISTORY_QUERY, {}, options)
    items = toAcademicHistory(response)
  } catch (error: unknown) {
    console.error("Sanity academic history fetch error:", error)
    fetchError =
      error instanceof Error
        ? error.message
        : "Failed to load academic history."
  }

  if (fetchError) {
    return (
      <section id="experience" className="p-4">
        <p className="text-xs text-muted-foreground">{fetchError}</p>
      </section>
    )
  }

  if (items.length === 0) return null

  return (
    <section id="experience">
      <div className="p-4">
        <span className="eyebrow text-xs">Education</span>
        <h1 className="mb-3 font-heading text-2xl font-semibold">Academics</h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Education laid the foundation of my technical and academic knowledge.
        </p>
      </div>
      <Accordion defaultValue={["education-0"]}>
        {items.map((item, idx) => {
          const { institute, degree, field, timeline } = item
          const { website, name } = institute

          return (
            <AccordionItem
              key={`education-${idx}`}
              value={`${website}-${degree}`}
              className="border-b border-accent last:border-b-0"
            >
              <AccordionTrigger className="group flex items-center px-4 hover:no-underline">
                <div className="rounded bg-secondary p-3">
                  <GraduationCapIcon className="size-3" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {timeline}
                  </span>

                  <h2 className="line-clamp-2 leading-snug font-semibold tracking-tight">
                    {degree}
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="bg-background p-0">
                <div className="flex items-center justify-between border-t border-b border-accent text-xs text-muted-foreground">
                  <Link
                    href={
                      website ||
                      `https://www.google.com/search?q=${name.replace(/\s/g, "+")}`
                    }
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
                    href={`https://www.google.com/search?q=${field.replace(/\s/g, "+")}`}
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
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}

export default EducationAccordion
