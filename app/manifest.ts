import type { MetadataRoute } from "next"

import { SITE_DESCRIPTION, SITE_NAME } from "@/src/seo/site"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} Portfolio`,
    short_name: "Azlaan Zubair",
    description: SITE_DESCRIPTION,
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0d0e12",
    theme_color: "#ef4435",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  }
}
