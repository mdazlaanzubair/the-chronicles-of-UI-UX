import type { Metadata } from "next"

export const SITE_NAME = "Muhammad Azlaan Zubair"
export const SITE_HANDLE = "@mdazlaanzubair"
export const SITE_TITLE =
  "Muhammad Azlaan Zubair | Software Architect & Web Engineer"
export const SITE_DESCRIPTION =
  "Portfolio of Muhammad Azlaan Zubair, a software architect and web engineer focused on scalable systems, product engineering, AI, and automation."
export const SITE_URL = new URL("https://mdazlaanzubair.com")

export const absoluteUrl = (path: string) => new URL(path, SITE_URL).toString()

const socialImage = {
  url: absoluteUrl("/api/og"),
  width: 1200,
  height: 630,
  alt: `${SITE_NAME} — Software Architect & Web Engineer`,
}

export const rootMetadata: Metadata = {
  metadataBase: SITE_URL,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Muhammad Azlaan Zubair",
    "software architect",
    "web engineer",
    "Next.js developer",
    "artificial intelligence",
    "developer automation",
    "technical research",
  ],
  applicationName: `${SITE_NAME} Portfolio`,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  alternates: {
    canonical: absoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${SITE_NAME} Portfolio`,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [socialImage],
  },
  twitter: {
    card: "summary_large_image",
    creator: SITE_HANDLE,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/manifest.webmanifest",
}

export const createPageMetadata = ({
  title,
  description,
  path,
  keywords,
}: {
  title: string
  description: string
  path: string
  keywords: string[]
}): Metadata => {
  const socialTitle = `${title} | ${SITE_NAME}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: absoluteUrl(path),
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: path,
      siteName: `${SITE_NAME} Portfolio`,
      title: socialTitle,
      description,
      images: [socialImage],
    },
    twitter: {
      card: "summary_large_image",
      creator: SITE_HANDLE,
      title: socialTitle,
      description,
      images: [socialImage],
    },
  }
}
