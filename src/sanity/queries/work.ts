import { defineQuery } from "next-sanity"

import {
  portableTextMembersProjection,
  timestampsProjection,
} from "./fragments"

export const WORK_LIST_QUERY = defineQuery(/* groq */ `
  *[_type == "work"]
  | order(coalesce(metadata.isFeatured, false) desc, _updatedAt desc, _id asc) {
    "id": _id,
    title,
    description,
    "tags": coalesce(tags, []),
    "metadata": {
      "isFeatured": metadata.isFeatured == true,
      "projectUrl": metadata.projectUrl,
      "repositoryUrl": metadata.repositoryUrl,
      "key_contributions": coalesce(metadata.key_contributions[]{
        ${portableTextMembersProjection}
      }, [])
    },
    ${timestampsProjection}
  }
`)
