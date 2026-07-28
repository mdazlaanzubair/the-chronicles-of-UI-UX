import ExternalLink from "@/components/custom/ExternalLink"
import localConstantData from "@/constant.json"
import { SocialMediaInterface } from "@/type"

export const Footer = () => {
  const social_links = localConstantData.socialMedia as SocialMediaInterface[]

  return (
    <footer className="flex w-full items-center justify-between gap-3 border-b border-accent bg-card p-4">
      <p className="text-xs text-muted-foreground">
        © 2026 Muhammad Azlaan Zubair
      </p>

      <div className="flex items-center gap-3">
        {social_links.map((item, idx) => {
          if (item.isHidden) return
          return (
            <ExternalLink
              key={`social-link-${idx}`}
              label={item.platform}
              title={item.username}
              url={item.url}
              classname="text-xs tracking-wider"
            />
          )
        })}
      </div>
    </footer>
  )
}
