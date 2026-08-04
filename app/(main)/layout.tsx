import { Geist_Mono, Oxanium, Red_Hat_Display } from "next/font/google"
import type { Viewport } from "next"

import "../globals.css"
import JsonLd from "@/components/seo/JsonLd"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import ProfileHeader from "@/components/custom/ProfileHeader"
import Navbar from "@/components/custom/Navbar"
import { Footer } from "@/components/custom/Footer"
import { toSocialProfiles } from "@/src/sanity/adapters"
import { client } from "@/src/sanity/client"
import { SOCIAL_PROFILES_QUERY } from "@/src/sanity/queries"
import { rootMetadata } from "@/src/seo/site"
import {
  createSiteJsonLd,
  DEFAULT_SOCIAL_PROFILES,
  resolveSocialProfiles,
} from "@/src/seo/structured-data"

export const metadata = rootMetadata
export const revalidate = 21600

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f6f8" },
    { media: "(prefers-color-scheme: dark)", color: "#0d0e12" },
  ],
}

const playfairDisplayHeading = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-heading",
})

const oxanium = Oxanium({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  let socialProfiles = DEFAULT_SOCIAL_PROFILES

  try {
    const response = await client.fetch(
      SOCIAL_PROFILES_QUERY,
      {},
      { next: { revalidate: 21600, tags: ["sanity-social-profiles"] } }
    )
    socialProfiles = resolveSocialProfiles(toSocialProfiles(response))
  } catch (error: unknown) {
    console.error("Sanity social profiles fetch error:", error)
  }

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        oxanium.variable,
        playfairDisplayHeading.variable
      )}
    >
      <body>
        <JsonLd data={createSiteJsonLd(socialProfiles)} />
        <ThemeProvider>
          <div className="flex min-h-screen w-screen flex-col bg-background">
            <div className="mx-auto flex w-full max-w-xl flex-1 flex-col overflow-x-clip border-s border-e border-accent bg-foreground">
              <ProfileHeader socialLinks={socialProfiles} />
              <Navbar />
              <main className="h-full w-full flex-1 border-b border-accent bg-card">
                {children}
              </main>
              <Footer socialLinks={socialProfiles} />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
