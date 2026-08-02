import EducationAccordion from "@/components/custom/EducationAccordion"
import ExperienceAccordion from "@/components/custom/ExperienceAccordion"
import Interest from "@/components/custom/Interest"
import Skills from "@/components/custom/Skills"
import ReactMarkdown from "react-markdown"

const Page = () => {
  const bio = {
    p1: `I specialize in **system architecture** and **web engineering**. From backend services to frontend performance, I approach development with **structure**, **clarity**, and **long-term thinking**.`,
    p2: `Over the years, I&apos;ve led **architectural initiatives**, optimized high-traffic **applications**, and contributed to **technical decision-making** that supports **product growth**. I believe **strong engineering** is defined not just by delivery, but by **durability**.`,
  }

  return (
    <section id="about" className="flex flex-col">
      <div className="p-6">
        {/* <h1 className="mb-3 flex flex-wrap items-center gap-2 font-heading text-3xl">
          <strong>Hi, I'm Azlaan: </strong>
          <span>Software Engineer</span>
        </h1> */}
        <div className="prose dark:prose-invert space-y-3 text-sm leading-6 text-muted-foreground">
          <ReactMarkdown>{bio.p1}</ReactMarkdown>
          <ReactMarkdown>{bio.p2}</ReactMarkdown>
        </div>
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
