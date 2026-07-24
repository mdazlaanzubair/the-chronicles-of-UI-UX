export interface PublicationCardData {
  title: string
  abstract: string
  authors: string[]
  journal: string
  status: "Published" | "Ready to Publish" | "In Review"
  year: string
  url: string
}

export interface CaseStudyCardData {
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

export interface SocialLink {
  label: string
  username: string
  url: string
  isHide: boolean
}
