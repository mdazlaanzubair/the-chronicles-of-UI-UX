import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"

const Header = () => {
  return (
    <header className="mb-10 space-y-3">
      <span className="eyebrow">Software · AI · Research</span>
      <h1 className="font-heading text-4xl font-bold">
        <HoverCard>
          <HoverCardTrigger className="cursor-pointer border-b border-dashed border-secondary-foreground">
            Md.
          </HoverCardTrigger>
          <HoverCardContent side="bottom" align="start" className="space-y-3">
            <p className="text-sm leading-6 text-muted-foreground">
              Muslims use{" "}
              <span className="text-secondary-foreground">"Muhammad"</span>{" "}
              <em className="text-xs">
                (or its variations like Mohammad or Md. or M.)
              </em>{" "}
              as a name prefix primarily out of{" "}
              <span className="text-secondary-foreground">deep veneration</span>{" "}
              for the{" "}
              <span className="text-secondary-foreground">
                Prophet Muhammad.
              </span>
            </p>
            <p className="text-sm leading-6 text-muted-foreground">
              It serves as a respectful honorific and a blessing, reflecting the
              belief that the name brings spiritual blessings and embodies
              excellent moral character.
            </p>
          </HoverCardContent>
        </HoverCard>{" "}
        Azlaan Zubair
      </h1>
      <p className="mb-5 text-lg font-semibold text-secondary-foreground">
        Software Engineer · Applied AI Researcher
      </p>
      <p className="text- text-muted-foreground">
        I build production software and evaluate AI systems connecting product
        engineering with research discipline.
      </p>
    </header>
  )
}

export default Header
