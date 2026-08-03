"use client"

import React, { useState, useEffect, useLayoutEffect, useRef } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

interface NavItem {
  label: string
  href: string
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Feed", href: "/" },
  { label: "About", href: "/about" },
  { label: "Work", href: "/work" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
]

export default function Navbar({
  items = DEFAULT_NAV_ITEMS,
}: {
  items?: NavItem[]
}) {
  const pathname = usePathname()
  const [visibleCount, setVisibleCount] = useState(items.length)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const navRef = useRef<HTMLDivElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const itemWidthsRef = useRef<(number | null)[]>([])
  const moreWidthRef = useRef<number>(80)

  // Measure and calculate visible items
  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      if (!navRef.current) return
      const containerWidth = navRef.current.clientWidth
      if (!containerWidth) return

      const itemWidths = itemWidthsRef.current
      const moreWidth = moreWidthRef.current || 80
      const GAP = 8 // Gap between items in px

      let totalWidth = 0
      for (let i = 0; i < items.length; i++) {
        const w = itemWidths[i] || 0
        totalWidth += w + (i > 0 ? GAP : 0)
      }

      // If all items fit comfortably inside container
      if (totalWidth <= containerWidth) {
        setVisibleCount(items.length)
        return
      }

      // Otherwise calculate how many fit with "More" dropdown button
      let usedWidth = 0
      let count = 0

      for (let i = 0; i < items.length; i++) {
        const itemW = itemWidths[i] || 0
        const widthWithThisItem = usedWidth + itemW + (i > 0 ? GAP : 0)

        // Must leave space for "More" button
        if (widthWithThisItem + GAP + moreWidth <= containerWidth) {
          usedWidth = widthWithThisItem
          count++
        } else {
          break
        }
      }

      setVisibleCount(Math.max(1, count))
    }

    handleResize()

    const observer = new ResizeObserver(handleResize)
    if (navRef.current) {
      observer.observe(navRef.current)
    }

    return () => observer.disconnect()
  }, [items])

  // Close dropdown on click outside
  useEffect(() => {
    if (!isMoreOpen) return
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsMoreOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMoreOpen])

  const isItemActive = (href: string) => {
    if (href === "/") return pathname === "/"
    return pathname === href || pathname?.startsWith(href + "/")
  }

  const visibleItems = items.slice(0, visibleCount)
  const overflowItems = items.slice(visibleCount)
  const isOverflowActive = overflowItems.some((item) => isItemActive(item.href))

  return (
    <div className="sticky top-0 z-50 w-full border-b border-accent bg-card/95 text-card-foreground supports-backdrop-filter:backdrop-blur-md">
      {/* Hidden measurer container */}
      <div
        className="pointer-events-none invisible absolute top-0 left-0 -z-50 flex items-center gap-2 opacity-0"
        aria-hidden="true"
      >
        {items.map((item, index) => (
          <span
            key={item.href}
            ref={(el) => {
              itemWidthsRef.current[index] = el ? el.offsetWidth : 0
            }}
            className="px-4 py-3 text-sm font-semibold whitespace-nowrap"
          >
            {item.label}
          </span>
        ))}
        <span
          ref={(el) => {
            if (el) moreWidthRef.current = el.offsetWidth
          }}
          className="px-4 py-3 text-sm font-semibold whitespace-nowrap"
        >
          More ▾
        </span>
      </div>

      {/* Visible Nav container */}
      <nav
        ref={navRef}
        className="flex w-full items-center justify-start gap-2 px-2"
        role="navigation"
        aria-label="Main Navigation"
      >
        {visibleItems.map((item) => {
          const active = isItemActive(item.href)
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative -mb-px flex items-center justify-center border-b-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-150",
                active
                  ? "border-primary font-semibold text-primary"
                  : "border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          )
        })}

        {/* More ▾ Overflow Button */}
        {overflowItems.length > 0 && (
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsMoreOpen((prev) => !prev)}
              type="button"
              className={cn(
                "relative -mb-px flex cursor-pointer items-center gap-1.5 rounded-t-md border-b-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-150",
                isOverflowActive
                  ? "border-primary font-semibold text-primary"
                  : isMoreOpen
                    ? "border-transparent bg-muted/60 text-foreground"
                    : "border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
              aria-expanded={isMoreOpen}
              aria-haspopup="true"
            >
              <span>More</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  isMoreOpen && "rotate-180"
                )}
              />
            </button>

            {/* Dropdown Menu */}
            {isMoreOpen && (
              <div className="absolute top-full right-0 z-50 mt-1.5 w-48 animate-in rounded-lg border border-accent bg-popover p-1.5 shadow-md duration-150 fade-in-0 zoom-in-95 motion-reduce:animate-none">
                {overflowItems.map((item) => {
                  const active = isItemActive(item.href)
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsMoreOpen(false)}
                      className={cn(
                        "flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-popover-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  )
}
