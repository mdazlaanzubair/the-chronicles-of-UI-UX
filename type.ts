export interface HorizontalCardData {
  title: string
  authors: string[]
  journal: string
  status: "Published" | "Ready to Publish" | "In Review"
  year: string
  url: string
}

export interface SocialLink {
  label: string
  username: string
  url: string
  isHide: boolean
}
