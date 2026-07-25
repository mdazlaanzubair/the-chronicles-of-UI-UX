import { defineQuery } from "next-sanity"

import { timestampsProjection } from "./fragments"

export const PUBLICATIONS_LIST_QUERY = defineQuery(/* groq */ `
  *[_type == "publication"]
  | order(metadata.year desc, _createdAt desc) {
    title,
    abstract,
    "authors": coalesce(authors, []),
    "metadata": {
      "journal": metadata.journal,
      "status": metadata.status,
      "year": metadata.year,
      "doi": metadata.doi,
      "isFeatured": metadata.isFeatured == true
    },
    ${timestampsProjection}
  }
`)
