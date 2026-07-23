// "use client"

import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import ExternalLink from "@/components/custom/ExternalLink"
import Image from "next/image"
import { SocialLink } from "@/type"
import localConstantData from "@/constant.json"
// import { useTheme } from "next-themes"
import ThemeToggler from "./ThemeToggler"

export const Footer = () => {
  //   const { theme } = useTheme()
  const social_links = localConstantData.social_links as SocialLink[]

  return (
    <footer className="flex w-full items-center gap-3">
      <Item className="p-0">
        <ItemMedia
          variant="image"
          className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary bg-secondary"
        >
          <div className="absolute -right-1 -bottom-5 h-14 w-14 rounded-full bg-primary" />
          <Image
            src={`/portrait.png`}
            alt={"Muhammad Azlaan Zubair's profile picture"}
            width={128}
            height={128}
            className="z-10 object-cover"
          />
        </ItemMedia>
        {/* <ItemMedia
          variant="icon"
          className="relative h-14 w-14 overflow-hidden rounded-full bg-secondary"
        >
          <Image
            src={`/logo-${theme}.svg`}
            alt={"Muhammad Azlaan Zubair's profile picture"}
            width={128}
            height={128}
            className="size-12 pb-1"
          />
        </ItemMedia> */}
        <ItemContent>
          <ItemTitle className="text-sm font-semibold">
            I&apos;m social
          </ItemTitle>
          <div className="flex flex-1 items-center gap-3">
            {social_links.map((item, idx) => {
              if (item.isHide) return
              return (
                <ExternalLink
                  key={`social-link-${idx}`}
                  label={item.label}
                  title={item.username}
                  url={item.url}
                  classname="text-xs tracking-wider"
                />
              )
            })}
          </div>
        </ItemContent>
        <ItemActions>
          <ThemeToggler />
        </ItemActions>
      </Item>
    </footer>
  )
}
