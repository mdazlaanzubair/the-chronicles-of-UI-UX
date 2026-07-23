"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleDarkMode = () => setTheme(theme === "dark" ? "light" : "dark")

  const currentTheme = mounted ? theme : undefined

  return (
    <Button
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      size="xs"
      variant="ghost"
      className={cn(
        "fixed top-2 left-2 gap-2 bg-transparent text-muted-foreground capitalize",
        currentTheme === "dark" && "text-primary"
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 rounded-full border border-primary",
          currentTheme === "dark"
            ? "bg-primary"
            : "border-secondary-foreground/30 bg-secondary-foreground/30"
        )}
      />
      Dark Mode
    </Button>
  )
}

export default ThemeToggler
