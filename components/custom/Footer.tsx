import ExternalLink from "@/components/custom/ExternalLink"
import type { SocialMediaInterface } from "@/type"
import { ModeToggle } from "./ModeToggle"

export const Footer = ({
  socialLinks,
}: {
  socialLinks: SocialMediaInterface[]
}) => {
  return (
    <footer className="flex w-full items-center justify-between gap-3 border-b border-accent bg-card p-4">
      <p className="text-xs text-muted-foreground">
        &copy;{" "}
        <span className="hidden sm:inline-block">
          {new Date().getFullYear()}
        </span>{" "}
        Muhammad Azlaan Zubair
      </p>

      <div className="flex items-center gap-3">
        {socialLinks.map((item) => {
          if (item.isHidden || ["github", "linkedin"].includes(item.platform))
            return
          return (
            <ExternalLink
              key={item.url}
              label={item.platform}
              title={item.username}
              url={item.url}
              classname="text-xs tracking-wider capitalize"
            />
          )
        })}
        <ModeToggle />
      </div>
    </footer>
  )
}
