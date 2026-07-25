import { defineQuery } from "next-sanity"

import { portableTextMembersProjection } from "./fragments"

export const FEATURED_CONTENT_QUERY = defineQuery(/* groq */ `
  *[
    _type in ["publication", "caseStudy", "writing", "work"] &&
    metadata.isFeatured == true &&
    (
      !(_type in ["caseStudy", "writing"]) ||
      defined(slug.current)
    ) &&
    (
      _type != "writing" ||
      metadata.status == "published"
    )
  ]
  | order(metadata.publishedAt desc, _updatedAt desc) {
    _id,
    _type,
    title,
    _type in ["caseStudy", "writing"] => {
      "slug": slug.current
    },
    _type == "publication" => {
      abstract,
      "authors": coalesce(authors, [])
    },
    _type in ["caseStudy", "writing", "work"] => {
      description,
      "tags": coalesce(tags, [])
    },
    "metadata": {
      "isFeatured": true,
      "status": metadata.status,
      "publishedAt": metadata.publishedAt,
      "year": metadata.year,
      "category": metadata.category,
      "projectUrl": metadata.projectUrl,
      "repositoryUrl": metadata.repositoryUrl,
      "key_contributions": coalesce(metadata.key_contributions[]{
        ${portableTextMembersProjection}
      }, [])
    }
  }
`)
