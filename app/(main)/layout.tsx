import { Geist_Mono, Oxanium, Red_Hat_Display } from "next/font/google"
import type { Viewport } from "next"

import "../globals.css"
import JsonLd from "@/components/seo/JsonLd"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import ProfileHeader from "@/components/custom/ProfileHeader"
import Navbar from "@/components/custom/Navbar"
import { Footer } from "@/components/custom/Footer"
import { rootMetadata } from "@/src/seo/site"
import { siteJsonLd } from "@/src/seo/structured-data"

export const metadata = rootMetadata

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
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
        <JsonLd data={siteJsonLd} />
        <ThemeProvider>
          <div className="flex flex-col min-h-screen w-screen bg-background">
            <div className="mx-auto flex-1 flex w-full max-w-xl flex-col overflow-x-hidden overflow-y-auto border-s border-e border-accent bg-foreground">
              <ProfileHeader />
              <Navbar />
              <main className="h-full w-full flex-1 border-b border-accent bg-card">
                {children}
              </main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
