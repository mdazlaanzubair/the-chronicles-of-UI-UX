import type { MetadataRoute } from "next"

import { absoluteUrl, SITE_URL } from "@/src/seo/site"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/studio", "/studio/"],
      },
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
        disallow: ["/studio", "/studio/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE_URL.origin,
  }
}
