import ExternalLink from "@/components/custom/ExternalLink"
import { toSocialProfiles } from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import { SOCIAL_PROFILES_QUERY } from "@/src/sanity/queries"
import type { SocialMediaInterface } from "@/type"

const options = { next: { revalidate: 30 } }

export const Footer = async () => {
  let social_links: SocialMediaInterface[] = []
  let fetchError: string | null = null

  try {
    const res = await client.fetch(SOCIAL_PROFILES_QUERY, {}, options)
    social_links = toSocialProfiles(res)
  } catch (error: unknown) {
    console.error("Sanity fetch error:", error)
    fetchError =
      error instanceof Error ? error.message : "Failed to load social links."
  }

  if (fetchError) {
    return (
      <footer className="flex w-full items-center justify-between gap-3 border-b border-accent bg-card p-4">
        <p className="text-xs text-muted-foreground">{fetchError}</p>
      </footer>
    )
  }

  if (social_links.length === 0) return null
  return (
    <footer className="flex w-full items-center justify-between gap-3 border-b border-accent bg-card p-4">
      <p className="text-xs text-muted-foreground">
        © 2026 Muhammad Azlaan Zubair
      </p>

      <div className="flex items-center gap-3">
        {social_links.map((item) => {
          if (
            item.isHidden ||
            ["github", "scholar", "linkedin"].includes(item.platform)
          )
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
      </div>
    </footer>
  )
}
