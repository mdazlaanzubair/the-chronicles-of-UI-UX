import { defineQuery } from "next-sanity"

import { portableTextProjection, timestampsProjection } from "./fragments"

const projectProjection = /* groq */ `
  "project": select(
    !defined(metadata.project) => null,
    {
      "name": coalesce(metadata.project.name, "Untitled project"),
      "slug": metadata.project.slug.current,
      "website": metadata.project.website
    }
  )
`

const companyProjection = /* groq */ `
  "company": select(
    !defined(metadata.company) => null,
    metadata.company.isAnonymized == true => {
      "name": "Confidential organization",
      "logoUrl": null,
      "website": null,
      "isAnonymized": true
    },
    {
      "name": coalesce(metadata.company.name, "Organization"),
      "logoUrl": metadata.company.logo.asset->url,
      "website": metadata.company.website,
      "isAnonymized": false
    }
  )
`

export const CASE_STUDIES_LIST_QUERY = defineQuery(/* groq */ `
  *[_type == "caseStudy" && defined(slug.current)]
  | order(metadata.isFeatured desc, _updatedAt desc) {
    title,
    "slug": slug.current,
    description,
    "tags": coalesce(tags, []),
    "metadata": {
      "isFeatured": metadata.isFeatured == true,
      "timeline": metadata.timeline,
      ${projectProjection},
      ${companyProjection}
    }
  }
`)

export const CASE_STUDY_DETAIL_QUERY = defineQuery(/* groq */ `
  *[
    _type == "caseStudy" &&
    slug.current == $slug
  ][0] {
    title,
    "slug": slug.current,
    description,
    "tags": coalesce(tags, []),
    ${portableTextProjection},
    "metadata": {
      "isFeatured": metadata.isFeatured == true,
      "timeline": metadata.timeline,
      ${projectProjection},
      ${companyProjection}
    },
    ${timestampsProjection},
    "seo": select(
      metadata.company.isAnonymized == true => {
        "title": title,
        "description": description,
        "canonicalUrl": null,
        "imageUrl": null,
        "noIndex": seo.noIndex == true
      },
      {
        "title": coalesce(seo.title, title),
        "description": coalesce(seo.description, description),
        "canonicalUrl": seo.canonicalUrl,
        "imageUrl": seo.openGraphImage.asset->url,
        "noIndex": seo.noIndex == true
      }
    )
  }
`)
