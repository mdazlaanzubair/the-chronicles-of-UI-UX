import { defineQuery } from "next-sanity"

import {
  portableTextProjection,
  seoProjection,
  timestampsProjection,
} from "./fragments"

export const WRITINGS_LIST_QUERY = defineQuery(/* groq */ `
  *[
    _type == "writing" &&
    defined(slug.current) &&
    metadata.status == "published"
  ]
  | order(metadata.publishedAt desc, _createdAt desc) {
    title,
    "slug": slug.current,
    description,
    "tags": coalesce(tags, []),
    "metadata": {
      "status": metadata.status,
      "isFeatured": metadata.isFeatured == true,
      "category": metadata.category,
      "topics": coalesce(metadata.topics, []),
      "publishedAt": metadata.publishedAt
    }
  }
`)

export const WRITING_DETAIL_QUERY = defineQuery(/* groq */ `
  *[
    _type == "writing" &&
    slug.current == $slug &&
    metadata.status == "published"
  ][0] {
    title,
    "slug": slug.current,
    description,
    "tags": coalesce(tags, []),
    ${portableTextProjection},
    "metadata": {
      "status": metadata.status,
      "isFeatured": metadata.isFeatured == true,
      "category": metadata.category,
      "topics": coalesce(metadata.topics, []),
      "publishedAt": metadata.publishedAt
    },
    ${timestampsProjection},
    ${seoProjection}
  }
`)
