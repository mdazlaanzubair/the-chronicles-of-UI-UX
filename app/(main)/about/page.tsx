import EducationAccordion from "@/components/custom/EducationAccordion"
import ExperienceAccordion from "@/components/custom/ExperienceAccordion"
import Interest from "@/components/custom/Interest"
import Skills from "@/components/custom/Skills"
import JsonLd from "@/components/seo/JsonLd"
import { createPageMetadata, absoluteUrl } from "@/src/seo/site"
import { PERSON_ID, WEBSITE_ID } from "@/src/seo/structured-data"
import ReactMarkdown from "react-markdown"

const description =
  "Learn about Muhammad Azlaan Zubair's professional experience, academic background, software engineering skills, AI expertise, and technical interests."

export const metadata = createPageMetadata({
  title: "About",
  description,
  path: "/about",
})

const Page = () => {
  const bio = {
    p1: `I specialize in **system architecture** and **web engineering**. From backend services to frontend performance, I approach development with **structure**, **clarity**, and **long-term thinking**.`,
    p2: `Over the years, I&apos;ve led **architectural initiatives**, optimized high-traffic **applications**, and contributed to **technical decision-making** that supports **product growth**. I believe **strong engineering** is defined not just by delivery, but by **durability**.`,
  }

  const aboutJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${absoluteUrl("/about")}#profile`,
    url: absoluteUrl("/about"),
    name: "About Muhammad Azlaan Zubair",
    description,
    inLanguage: "en",
    isPartOf: { "@id": WEBSITE_ID },
    mainEntity: { "@id": PERSON_ID },
  }

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="flex flex-col"
    >
      <JsonLd data={aboutJsonLd} />
      <header className="sr-only">
        <h1 id="about-heading">About Muhammad Azlaan Zubair</h1>
        <p>{description}</p>
      </header>
      <div className="prose dark:prose-invert space-y-3 p-6 text-sm leading-6 text-muted-foreground">
        <ReactMarkdown>{bio.p1}</ReactMarkdown>
        <ReactMarkdown>{bio.p2}</ReactMarkdown>
      </div>
      <hr className="border-accent" />
      <ExperienceAccordion />
      <hr className="border-accent" />
      <EducationAccordion />
      <hr className="border-accent" />
      <Skills />
      <hr className="border-accent" />
      <Interest />
    </section>
  )
}

export default Page
