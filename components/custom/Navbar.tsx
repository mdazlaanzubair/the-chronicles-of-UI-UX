"use client"

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronDown, ExternalLinkIcon } from "lucide-react"

import { cn } from "@/lib/utils"

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

interface NavItem {
  label: string
  href: string
}

const DEFAULT_NAV_ITEMS: NavItem[] = [
  { label: "Feed", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "https://blog.mdazlaanzubair.com/" },
  {
    label: "Case Studies",
    href: "https://blog.mdazlaanzubair.com/series/case-studies",
  },
  {
    label: "Product Observations",
    href: "https://blog.mdazlaanzubair.com/series/product-observations",
  },
]

function isExternalHref(href: string) {
  return /^(https?:)?\/\//i.test(href)
}

export default function Navbar({
  items = DEFAULT_NAV_ITEMS,
}: {
  items?: NavItem[]
}) {
  const pathname = usePathname()

  const internalItems = useMemo(
    () => items.filter((item) => !isExternalHref(item.href)),
    [items]
  )

  const externalItems = useMemo(
    () => items.filter((item) => isExternalHref(item.href)),
    [items]
  )

  const [visibleCount, setVisibleCount] = useState(internalItems.length)
  const [isMoreOpen, setIsMoreOpen] = useState(false)

  const navRef = useRef<HTMLElement>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const itemWidthsRef = useRef<(number | null)[]>([])
  const moreWidthRef = useRef(80)

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      const container = navRef.current

      if (!container) return

      const containerWidth = container.clientWidth

      if (!containerWidth) return

      const itemWidths = itemWidthsRef.current
      const moreWidth = moreWidthRef.current || 80
      const gap = 8
      const hasPermanentDropdown = externalItems.length > 0

      const totalInternalWidth = internalItems.reduce((total, _, index) => {
        const itemWidth = itemWidths[index] ?? 0
        return total + itemWidth + (index > 0 ? gap : 0)
      }, 0)

      const totalWidthWithDropdown =
        totalInternalWidth +
        (hasPermanentDropdown
          ? (internalItems.length > 0 ? gap : 0) + moreWidth
          : 0)

      if (totalWidthWithDropdown <= containerWidth) {
        setVisibleCount(internalItems.length)
        return
      }

      let usedWidth = 0
      let count = 0

      for (let index = 0; index < internalItems.length; index++) {
        const itemWidth = itemWidths[index] ?? 0
        const itemGap = index > 0 ? gap : 0
        const nextUsedWidth = usedWidth + itemGap + itemWidth

        // A dropdown is required whenever:
        // 1. external links exist, or
        // 2. at least one internal link will overflow.
        const dropdownGap = count >= 0 ? gap : 0
        const requiredWidth = nextUsedWidth + dropdownGap + moreWidth

        if (requiredWidth <= containerWidth) {
          usedWidth = nextUsedWidth
          count++
        } else {
          break
        }
      }

      setVisibleCount(count)
    }

    handleResize()

    const observer = new ResizeObserver(handleResize)
    const nav = navRef.current

    if (nav) {
      observer.observe(nav)
    }

    return () => {
      observer.disconnect()
    }
  }, [internalItems, externalItems.length])

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

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMoreOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    document.addEventListener("keydown", handleEscape)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("keydown", handleEscape)
    }
  }, [isMoreOpen])

  useEffect(() => {
    setIsMoreOpen(false)
  }, [pathname])

  const isItemActive = (href: string) => {
    if (isExternalHref(href)) return false
    if (href === "/") return pathname === "/"

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  const visibleItems = internalItems.slice(0, visibleCount)
  const overflowInternalItems = internalItems.slice(visibleCount)

  const dropdownItems = [...overflowInternalItems, ...externalItems]
  const hasDropdown = dropdownItems.length > 0

  const isOverflowActive = overflowInternalItems.some((item) =>
    isItemActive(item.href)
  )

  return (
    <div className="sticky top-0 z-50 w-full border-b border-accent bg-background text-card-foreground supports-backdrop-filter:backdrop-blur-md">
      {/* Hidden measurement container */}
      <div
        className="pointer-events-none invisible absolute top-0 left-0 -z-50 flex items-center gap-2 opacity-0"
        aria-hidden="true"
      >
        {internalItems.map((item, index) => (
          <span
            key={item.href}
            ref={(element) => {
              itemWidthsRef.current[index] = element?.offsetWidth ?? 0
            }}
            className="px-4 py-3 text-sm font-semibold whitespace-nowrap"
          >
            {item.label}
          </span>
        ))}

        <span
          ref={(element) => {
            if (element) {
              moreWidthRef.current = element.offsetWidth
            }
          }}
          className="px-4 py-3 text-sm font-semibold whitespace-nowrap"
        >
          More ▾
        </span>
      </div>

      <nav
        ref={navRef}
        className="flex w-full items-center justify-start gap-2 px-2"
        aria-label="Main navigation"
      >
        {visibleItems.map((item) => {
          const active = isItemActive(item.href)

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "group relative -mb-px flex items-center justify-center border-b-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-150",
                active
                  ? "border-primary font-semibold text-primary"
                  : "border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
            >
              {item.label}
            </Link>
          )
        })}

        {hasDropdown && (
          <div ref={dropdownRef} className="relative">
            <button
              type="button"
              onClick={() => setIsMoreOpen((current) => !current)}
              className={cn(
                "relative -mb-px flex cursor-pointer items-center gap-1.5 border-b-2 px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors duration-150",
                isOverflowActive
                  ? "border-primary font-semibold text-primary"
                  : isMoreOpen
                    ? "border-transparent bg-muted/60 text-foreground"
                    : "border-transparent text-muted-foreground hover:bg-muted/50 hover:text-foreground"
              )}
              aria-expanded={isMoreOpen}
              aria-haspopup="menu"
              aria-controls="navbar-more-menu"
            >
              <span>More</span>

              <ChevronDown
                aria-hidden="true"
                className={cn(
                  "size-4 transition-transform duration-200",
                  isMoreOpen && "rotate-180"
                )}
              />
            </button>

            {isMoreOpen && (
              <div
                id="navbar-more-menu"
                role="menu"
                className="absolute top-full right-0 z-50 mt-1.5 w-56 animate-in border border-accent bg-popover p-1.5 shadow-md duration-150 fade-in-0 zoom-in-95 motion-reduce:animate-none"
              >
                {dropdownItems.map((item) => {
                  const external = isExternalHref(item.href)
                  const active = isItemActive(item.href)

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      target={external ? "_blank" : undefined}
                      rel={external ? "noopener noreferrer" : undefined}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setIsMoreOpen(false)}
                      className={cn(
                        "flex items-center justify-between gap-3 px-3 py-2 text-sm font-medium transition-colors",
                        active
                          ? "bg-primary/10 font-semibold text-primary"
                          : "text-popover-foreground hover:bg-muted"
                      )}
                    >
                      <span>{item.label}</span>

                      {external && (
                        <ExternalLinkIcon
                          aria-hidden="true"
                          className="size-3 shrink-0"
                        />
                      )}
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
