import {
  Item,
  ItemActions,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "@/components/ui/item"
import ExternalLink from "@/components/custom/ExternalLink"
import Image from "next/image"
import localConstantData from "@/constant.json"
import ThemeToggler from "./ThemeToggler"
import { SocialMediaInterface } from "@/type"

export const Footer = () => {
  const social_links = localConstantData.socialMedia as SocialMediaInterface[]

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
        <ItemContent>
          <ItemTitle className="text-sm font-semibold">
            I&apos;m social
          </ItemTitle>
          <div className="flex flex-1 items-center gap-3">
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
        </ItemContent>
        <ItemActions>
          <ThemeToggler />
        </ItemActions>
      </Item>
    </footer>
  )
}
