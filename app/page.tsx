import CaseStudiesSection from "@/components/custom/case-studies/CaseStudiesSection"
import ResearchSection from "@/components/custom/research/ResearchSection"
import SidebarNavigation from "@/components/custom/SidebarNavigation"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"

import { Footer } from "@/components/custom/Footer"
import Header from "@/components/custom/Header"
import WorkSection from "@/components/custom/work/WorkSection"
import WritingSection from "@/components/custom/writing/WritingSection"

export default function Page() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <div className="item-center flex h-full w-full justify-between gap-0">
        <aside className="flex h-full w-[40%] max-w-[40%] flex-col gap-3 bg-transparent p-6 sm:p-8 lg:px-22 lg:pt-22 lg:pb-6">
          <Header />
          <SidebarNavigation />
          <Footer />
        </aside>
        <Separator orientation="vertical" className="bg-muted/50" />
        <main className="h-full flex-1 overflow-hidden overflow-y-auto bg-transparent p-6 sm:p-8 lg:px-18 lg:pt-22">
          <div id="hero-section" className="mb-5 space-y-3">
            <span className="eyebrow">Engineer · Researcher · Builder</span>

            <h1 className="mb-10 font-heading text-6xl">
              I connect reliable AI evaluation with production software.
            </h1>
            <p className="mb-15 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              My strongest production depth is in frontend engineering, with
              developing full-stack and AI-system breadth. I work with product
              constraints, experimental evaluation, and research interpretation
              to understand what AI can do, where it fails, and what is
              practical to build.
            </p>

            <div className="flex items-center gap-3">
              <Button size="lg">Contact Me</Button>
              <Button
                size="lg"
                variant="ghost"
                className={cn(
                  "text-muted-foreground",
                  "hover:text-secondary-foreground"
                )}
              >
                Read about me
              </Button>
            </div>
          </div>
          <Separator className="my-24 bg-muted/10" />

          <div className="flex w-full flex-col gap-3">
            <WritingSection key={"writing-section-component"} />
            <Separator className="mt-10 mb-15 bg-transparent" />
            <ResearchSection key={"research-section-component"} />
            <Separator className="mt-10 mb-15 bg-transparent" />
            <CaseStudiesSection key={"case-studies-section-component"} />
            <Separator className="mt-10 mb-15 bg-transparent" />
            <WorkSection key={"work-section-component"} />
          </div>
        </main>
      </div>
    </div>
  )
}
