/**
 * Transitional shapes used only by the existing constant.json-backed homepage.
 * Sanity content uses the locked contracts in type.ts and generated query types.
 */
export interface LegacyPublicationCardData {
  title: string
  abstract: string
  authors: string[]
  journal: string
  status: "Published" | "Ready to Publish" | "In Review"
  year: string
  url: string
}

export type LegacyHorizontalCardData = LegacyPublicationCardData

export interface LegacyCaseStudyCardData {
  title: string
  slug: string
  company: {
    name: string
    url: string
  }
  description: string
  images: string[]
  timeline: string
  url: string
}

export interface LegacySocialLink {
  label: string
  username: string
  url: string
  isHide: boolean
}
