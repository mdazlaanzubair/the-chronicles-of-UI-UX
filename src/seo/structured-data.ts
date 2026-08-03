import { absoluteUrl, SITE_DESCRIPTION, SITE_HANDLE, SITE_NAME } from "./site"

export const PERSON_ID = absoluteUrl("/#person")
export const WEBSITE_ID = absoluteUrl("/#website")

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: absoluteUrl("/"),
      name: `${SITE_NAME} Portfolio`,
      description: SITE_DESCRIPTION,
      inLanguage: "en",
      publisher: { "@id": PERSON_ID },
      hasPart: [
        { "@type": "WebPage", name: "About", url: absoluteUrl("/about") },
        {
          "@type": "CollectionPage",
          name: "Projects",
          url: absoluteUrl("/projects"),
        },
        {
          "@type": "CollectionPage",
          name: "Research",
          url: absoluteUrl("/research"),
        },
        {
          "@type": "CollectionPage",
          name: "Case Studies",
          url: absoluteUrl("/work"),
        },
      ],
    },
    {
      "@type": "Person",
      "@id": PERSON_ID,
      name: SITE_NAME,
      alternateName: SITE_HANDLE,
      url: absoluteUrl("/about"),
      image: absoluteUrl("/portrait.png"),
      email: "mailto:mdazlaan1996@gmail.com",
      jobTitle: "Software Architect and Web Engineer",
      description: SITE_DESCRIPTION,
      homeLocation: {
        "@type": "Place",
        name: "Karachi, Pakistan",
      },
      knowsAbout: [
        "Software architecture",
        "Web engineering",
        "Frontend development",
        "Backend development",
        "Artificial intelligence",
        "Machine learning",
        "Developer automation",
      ],
      sameAs: [
        "https://github.com/mdazlaanzubair",
        "https://www.linkedin.com/in/mdazlaanzubair/",
        "https://scholar.google.com/citations?hl=en&user=K7XC7-MAAAAJ",
        "https://x.com/mdazlaanzubair",
        "https://www.instagram.com/mdazlaanzubairr/",
        "https://blog.mdazlaanzubair.com/",
      ],
    },
  ],
}

export const createCollectionJsonLd = ({
  path,
  name,
  description,
  items,
}: {
  path: string
  name: string
  description: string
  items: unknown[]
}) => ({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${absoluteUrl(path)}#collection`,
  url: absoluteUrl(path),
  name,
  description,
  inLanguage: "en",
  isPartOf: { "@id": WEBSITE_ID },
  about: { "@id": PERSON_ID },
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item,
    })),
  },
})
