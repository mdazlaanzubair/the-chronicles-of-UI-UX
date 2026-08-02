import {
  Geist_Mono,
  Oxanium,
  Playfair_Display,
  Red_Hat_Display,
} from "next/font/google"

import "../globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import ProfileHeader from "@/components/custom/ProfileHeader"
import Navbar from "@/components/custom/Navbar"
import { Footer } from "@/components/custom/Footer"

// const playfairDisplayHeading = Playfair_Display({
//   subsets: ["latin"],
//   variable: "--font-heading",
// })

const playfairDisplayHeading = Red_Hat_Display({
  // weight: ["400"],
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
        <ThemeProvider>
          <div className="h-screen w-screen bg-background">
            <div className="mx-auto flex w-full max-w-xl flex-col overflow-x-hidden overflow-y-auto border-s border-e border-accent bg-foreground">
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
