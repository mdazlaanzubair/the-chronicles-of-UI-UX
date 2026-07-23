import CaseStudiesSection from "@/components/custom/CaseStudiesSection"
import ResearchSection from "@/components/custom/ResearchSection"
import SidebarNavigation from "@/components/custom/SidebarNavigation"
import WorkSection from "@/components/custom/WorkSection"
import WritingSection from "@/components/custom/WritingSection"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import { Footer } from "@/components/custom/Footer"

export default function Page() {
  return (
    <div className="h-screen w-screen overflow-hidden bg-background">
      <div className="item-center flex h-full w-full justify-between gap-0">
        <aside className="flex h-full w-[40%] max-w-[40%] flex-col gap-3 bg-transparent p-6 sm:p-8 lg:px-22 lg:pt-22 lg:pb-6">
          <header className="mb-10 space-y-3">
            <span className="eyebrow">Software · AI · Research</span>
            <h1 className="font-heading text-4xl font-bold">
              <HoverCard>
                <HoverCardTrigger className="cursor-pointer border-b border-dashed border-secondary-foreground">
                  Md.
                </HoverCardTrigger>
                <HoverCardContent
                  side="bottom"
                  align="start"
                  className="space-y-3"
                >
                  <p className="text-sm leading-6 text-muted-foreground">
                    Muslims use{" "}
                    <span className="text-secondary-foreground">
                      "Muhammad"
                    </span>{" "}
                    <em className="text-xs">
                      (or its variations like Mohammad or Md. or M.)
                    </em>{" "}
                    as a name prefix primarily out of{" "}
                    <span className="text-secondary-foreground">
                      deep veneration
                    </span>{" "}
                    for the{" "}
                    <span className="text-secondary-foreground">
                      Prophet Muhammad.
                    </span>
                  </p>
                  <p className="text-sm leading-6 text-muted-foreground">
                    It serves as a respectful honorific and a blessing,
                    reflecting the belief that the name brings spiritual
                    blessings and embodies excellent moral character.
                  </p>
                </HoverCardContent>
              </HoverCard>{" "}
              Azlaan Zubair
            </h1>
            <p className="mb-5 text-lg font-semibold text-secondary-foreground">
              Software Engineer · Applied AI Researcher
            </p>
            <p className="text- text-muted-foreground">
              I build production software and evaluate AI systems connecting
              product engineering with research discipline.
            </p>
          </header>

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
            <WritingSection />

            <Separator className="mt-10 mb-15 bg-transparent" />

            <ResearchSection />

            <Separator className="mt-10 mb-15 bg-transparent" />

            <CaseStudiesSection />

            <Separator className="mt-10 mb-15 bg-transparent" />

            <WorkSection />
          </div>
        </main>
      </div>
    </div>
  )
}
