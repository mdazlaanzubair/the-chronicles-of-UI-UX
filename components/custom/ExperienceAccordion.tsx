import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import localConstantData from "@/constant.json"
import { cn } from "@/lib/utils"
import { ExperienceInterface } from "@/type"
import { AtSignIcon, Briefcase, MapPinIcon } from "lucide-react"
import { PortableText } from "next-sanity"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

const ExperienceAccordion = () => {
  const items = localConstantData.experiences as ExperienceInterface[]
  return (
    <section id="experience">
      <div className="p-4">
        <span className="eyebrow text-xs">Work</span>
        <h1 className="mb-3 font-heading text-2xl font-semibold">
          Experiences
        </h1>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Professional roles that shaped my expertise in product development &amp;
          engineering.
        </p>
      </div>
      <Accordion defaultValue={["experience-0"]}>
        {items.map((item, idx) => {
          const { key_contributions, company, role, timeline } = item
          const { website, location, name: companyName } = company

          return (
            <AccordionItem
              key={`experience-${idx}`}
              value={`${website}-${role}`}
              className="border-b border-accent last:border-b-0"
            >
              <AccordionTrigger className="group flex items-center px-4 hover:no-underline">
                <div className="rounded bg-secondary p-3">
                  <Briefcase className="size-3" />
                </div>
                <div>
                  <span className="text-xs font-medium text-muted-foreground">
                    {timeline}
                  </span>

                  <h2 className="line-clamp-2 leading-snug font-semibold tracking-tight">
                    {role}
                  </h2>
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-3 bg-background">
                <div className="flex items-center justify-between border-t border-b border-accent text-xs text-muted-foreground">
                  <Link
                    href={
                      website ||
                      `https://www.google.com/search?q=${companyName.replace(/\s/g, "+")}`
                    }
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
                    href={`https://www.google.com/search?q=${companyName.replace(/\s/g, "+") + " " + location.replace(/\s/g, "+")}`}
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
                <div className="space-y-1 px-5 pt-2 text-xs text-muted-foreground">
                  <h3 className="mb-3 font-medium text-foreground">
                    Responsibilities
                  </h3>
                  <div className="text-xs text-muted-foreground">
                    <PortableText value={key_contributions} />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          )
        })}
      </Accordion>
    </section>
  )
}

export default ExperienceAccordion
