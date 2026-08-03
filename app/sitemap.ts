import type { MetadataRoute } from "next"

import { absoluteUrl } from "@/src/seo/site"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/about"),
      changeFrequency: "monthly",
      priority: 0.9,
      images: [absoluteUrl("/portrait.png")],
    },
    {
      url: absoluteUrl("/projects"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/research"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: absoluteUrl("/work"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ]
}
