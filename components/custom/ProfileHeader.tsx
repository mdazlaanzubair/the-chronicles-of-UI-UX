import {
  Calendar,
  MapPin,
  GraduationCapIcon,
  MailIcon,
  ExternalLinkIcon,
} from "lucide-react"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { buttonVariants } from "../ui/button"
import LinkedinIcon from "@sanity/icons/Linkedin"
import GithubIcon from "@sanity/icons/Github"
import { SocialMediaInterface } from "@/type"
import { SOCIAL_PROFILES_QUERY } from "@/src/sanity/queries"
import { toSocialProfiles } from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip"

const options = { next: { revalidate: 30 } }

export default async function ProfileHeader() {
  let social_links: SocialMediaInterface[] = []
  let fetchError: string | null = null

  try {
    const res = await client.fetch(SOCIAL_PROFILES_QUERY, {}, options)
    social_links = toSocialProfiles(res)
  } catch (error: any) {
    console.error("Sanity fetch error:", error)
    fetchError = error?.message || "Failed to load social links."
  }

  if (fetchError) {
    return (
      <footer className="flex w-full items-center justify-between gap-3 border-b border-accent bg-card p-4">
        <p className="text-xs text-muted-foreground">{fetchError}</p>
      </footer>
    )
  }

  return (
    <header className="flex w-full flex-col bg-card text-foreground">
      {/* Cover Banner Photo */}
      <div className="relative h-36 w-full overflow-hidden border-b border-accent">
        <img
          src="/cover.jpeg"
          alt="Cover photo"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 top-0 right-0 bottom-0 left-0 z-10 bg-black/50">
          <h2 className="absolute top-[50%] left-[50%] translate-[-50%] translate-y-[-50%] text-center text-2xl font-bold text-primary-foreground md:text-3xl lg:text-4xl">
            Hello World
          </h2>
        </div>
      </div>

      {/* Profile Info Container */}
      <div className="z-20 border-b border-accent px-4 pb-4">
        {/* Top Row: Avatar & Edit Profile Button */}
        <div className="relative -mt-14 mb-3 flex items-end justify-between sm:-mt-16">
          {/* Avatar Container */}
          <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-full border-4 border-accent bg-background shadow-md sm:h-28 sm:w-28">
            <img
              src="/portrait.png"
              alt="Muhammad Azlaan Zubair"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Profile Details */}
        <div className="space-y-3">
          {/* Name & Explanation */}
          <div>
            <div className="grid grid-cols-1 items-start justify-between gap-3 lg:grid-cols-2">
              <div>
                <h1 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
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
                <p className="mt-1.5 text-sm font-normal text-muted-foreground">
                  @mdazlaanzubair
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2 lg:justify-end">
                <Link
                  href="https://calendar.app.google/Le7g5jxPwGDRSJRSA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({
                      size: "sm",
                    })
                  )}
                >
                  Book a Call
                </Link>
                {social_links &&
                  social_links.length > 0 &&
                  social_links.map((social_link, idx) => {
                    const { url, platform, username } = social_link

                    if (platform === "instagram" || platform === "x") return
                    return (
                      <Tooltip key={`${url}-${platform}-${username}-${idx}`}>
                        <TooltipTrigger>
                          <Link
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              buttonVariants({
                                variant: "outline",
                                size: "icon-sm",
                              })
                            )}
                          >
                            {(() => {
                              if (platform === "github") return <GithubIcon />
                              else if (platform === "linkedin")
                                return <LinkedinIcon />
                              else if (platform === "scholar")
                                return <GraduationCapIcon />
                              else return <ExternalLinkIcon />
                            })()}
                          </Link>
                        </TooltipTrigger>

                        <TooltipContent className="capitalize">
                          {platform}
                        </TooltipContent>
                      </Tooltip>
                    )
                  })}
              </div>
            </div>
          </div>

          {/* Bio */}
          <p className="text-sm leading-relaxed font-normal text-foreground/90 sm:text-base"></p>

          {/* Meta Links & Location */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-xs text-muted-foreground">
            <div className="flex cursor-pointer items-center gap-1.5 hover:text-foreground">
              <Calendar className="h-4 w-4 shrink-0" />
              <span>Born in July 1996</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" />
              <span>Karachi, Pakistan</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MailIcon className="h-4 w-4 shrink-0" />
              <a
                href="mailto:mdazlaan1996@gmail.com"
                className="text-sky-500 hover:underline"
              >
                mdazlaan1996@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
