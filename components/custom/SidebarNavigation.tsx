"use client"

import { cn } from "@/lib/utils"
import { useState } from "react"

const nav_items = [
  {
    url: "#writing",
    title: "Writing",
    slug: "writing",
  },
  {
    url: "#research",
    title: "Research",
    slug: "research",
  },
  {
    url: "#case-studies",
    title: "Case Studies",
    slug: "case-studies",
  },
  {
    url: "#work",
    title: "Work",
    slug: "work",
  },
]

const SidebarNavigation = () => {
  const [isActive, setIsActive] = useState<string>("")

  return (
    <nav className="my-10 flex w-full flex-1 flex-col gap-6">
      {nav_items.map((item, idx) => {
        return (
          <a
            key={`nav-${item.slug}-${idx}-item`}
            className={cn(
              "group flex w-full items-center gap-3 overflow-hidden text-sm"
            )}
            href={item.url}
            onClick={() => setIsActive(item.url)}
          >
            <span
              className={cn(
                "transition-all duration-500 ease-in-out",
                isActive === item.url
                  ? "font-bold text-secondary-foreground"
                  : "font-medium"
              )}
            >
              0{idx}
            </span>
            <span
              className={cn(
                `h-px w-5 bg-muted-foreground`,
                isActive === item.url
                  ? "w-14 bg-secondary-foreground"
                  : "group-hover:w-8 group-hover:bg-secondary-foreground",
                "transition-all duration-500 ease-in-out"
              )}
            />
            <span
              className={cn(
                "text-muted-foreground",
                isActive === item.url
                  ? "font-bold text-secondary-foreground"
                  : "font-medium group-hover:text-secondary-foreground",
                "transition-all duration-500 ease-in-out"
              )}
            >
              {item.title}
            </span>
          </a>
        )
      })}
    </nav>
  )
}

export default SidebarNavigation
