import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sanity Studio",
  description: "Sanity Studio",
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    noimageindex: true,
  },
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
