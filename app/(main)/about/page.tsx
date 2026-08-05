import EducationAccordion from "@/components/custom/EducationAccordion"
import ExperienceAccordion from "@/components/custom/ExperienceAccordion"
import Interest from "@/components/custom/Interest"
import Skills from "@/components/custom/Skills"
import JsonLd from "@/components/seo/JsonLd"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import {
  toAcademicHistory,
  toExperience,
  toInterests,
  toSkills,
} from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import {
  ACADEMIC_HISTORY_QUERY,
  EXPERIENCE_QUERY,
  INTERESTS_QUERY,
  SKILLS_QUERY,
} from "@/src/sanity/queries"
import { createPageMetadata } from "@/src/seo/site"
import { createAboutPageJsonLd } from "@/src/seo/structured-data"
import Link from "next/link"
import ReactMarkdown from "react-markdown"

const description =
  "Learn about Muhammad Azlaan Zubair's professional experience, academic background, software engineering skills, AI expertise, and technical interests."

export const metadata = createPageMetadata({
  title: "About",
  description,
  path: "/about",
  keywords: [
    "Muhammad Azlaan Zubair experience",
    "software architect biography",
    "web engineering skills",
    "AI engineer education",
    "Next.js and Sanity developer",
  ],
})

export const revalidate = 21600

const fetchOptions = {
  next: { revalidate: 21600, tags: ["sanity-about"] },
}

const errorMessage = (error: unknown, fallback: string) =>
  error instanceof Error ? error.message : fallback

const Page = async () => {
  const bio = {
    p1: `I specialize in **system architecture** and **web engineering**. From backend services to frontend performance, I approach development with **structure**, **clarity**, and **long-term thinking**.`,
    p2: `Over the years, I've led **architectural initiatives**, optimized high-traffic **applications**, and contributed to **technical decision-making** that supports **product growth**. I believe **strong engineering** is defined not just by delivery, but by **durability**.`,
  }

  const [experienceResult, academicResult, skillsResult, interestsResult] =
    await Promise.allSettled([
      client.fetch(EXPERIENCE_QUERY, {}, fetchOptions),
      client.fetch(ACADEMIC_HISTORY_QUERY, {}, fetchOptions),
      client.fetch(SKILLS_QUERY, {}, fetchOptions),
      client.fetch(INTERESTS_QUERY, {}, fetchOptions),
    ])

  const experiences =
    experienceResult.status === "fulfilled"
      ? toExperience(experienceResult.value)
      : []
  const academics =
    academicResult.status === "fulfilled"
      ? toAcademicHistory(academicResult.value)
      : []
  const skillSets =
    skillsResult.status === "fulfilled" ? toSkills(skillsResult.value) : []
  const interests =
    interestsResult.status === "fulfilled"
      ? toInterests(interestsResult.value)
      : []

  const experienceError =
    experienceResult.status === "rejected"
      ? errorMessage(
          experienceResult.reason,
          "Professional experience is temporarily unavailable."
        )
      : undefined
  const academicError =
    academicResult.status === "rejected"
      ? errorMessage(
          academicResult.reason,
          "Academic history is temporarily unavailable."
        )
      : undefined
  const skillsError =
    skillsResult.status === "rejected"
      ? errorMessage(skillsResult.reason, "Skills are temporarily unavailable.")
      : undefined
  const interestsError =
    interestsResult.status === "rejected"
      ? errorMessage(
          interestsResult.reason,
          "Interests are temporarily unavailable."
        )
      : undefined

  if (experienceError)
    console.error("Sanity experience fetch error:", experienceError)
  if (academicError)
    console.error("Sanity academic fetch error:", academicError)
  if (skillsError) console.error("Sanity skills fetch error:", skillsError)
  if (interestsError)
    console.error("Sanity interests fetch error:", interestsError)

  const aboutJsonLd = createAboutPageJsonLd({
    experiences,
    academics,
    skills: skillSets,
    description,
  })

  return (
    <article
      id="about"
      aria-labelledby="about-heading"
      className="motion-page-enter flex flex-col"
    >
      <JsonLd data={aboutJsonLd} />
      <section
        aria-labelledby="professional-summary-heading"
        className="prose dark:prose-invert space-y-3 p-6 text-sm leading-6 text-muted-foreground"
      >
        <h2 id="professional-summary-heading" className="sr-only">
          Professional summary
        </h2>
        <ReactMarkdown>{bio.p1}</ReactMarkdown>
        <ReactMarkdown>{bio.p2}</ReactMarkdown>

        {/* Resume download section */}
        <div className="flex items-center gap-1.5">
          <Link
            href="/resume/Resume - Software Engineer - Muhammad Azlaan Zubair.pdf"
            className={cn(buttonVariants({ variant: "default"}))}
            download
          >
            Resume (PDF)
          </Link>
          <Link
            href="/resume/CV - Software Engineer - Muhammad Azlaan Zubair (Academic).pdf"
            className={cn(buttonVariants({ variant: "ghost"}))}
            download
          >
            Academic CV (PDF)
          </Link>
        </div>
      </section>
      <hr className="border-accent" />
      <ExperienceAccordion items={experiences} fetchError={experienceError} />
      <hr className="border-accent" />
      <EducationAccordion items={academics} fetchError={academicError} />
      <hr className="border-accent" />
      <Skills skillSets={skillSets} fetchError={skillsError} />
      <hr className="border-accent" />
      <Interest interests={interests} fetchError={interestsError} />
    </article>
  )
}

export default Page
