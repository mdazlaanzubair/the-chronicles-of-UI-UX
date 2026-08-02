import type { PortableTextBlock } from "next-sanity"

export type ContentStatus = "draft" | "published" | "archived"

export type PublicationStatus =
  "in_preparation" | "submitted" | "under_review" | "accepted" | "published"

export type SocialPlatform =
  "x" | "instagram" | "linkedin" | "github" | "scholar"

export interface PublicationInterface {
  title: string
  abstract: string
  authors: string[]
  metadata: {
    journal: string | null
    status: PublicationStatus
    year: number | null
    doi: string | null
    isFeatured: boolean
  }

  createdAt: string
  updatedAt: string
}

export interface CaseStudyInterface {
  title: string
  slug: string
  description: string
  tags: string[]
  body: PortableTextBlock[]

  metadata: {
    isFeatured: boolean
    timeline: string | null

    project: {
      name: string
      slug: string | null
      website: string | null
    } | null

    company: {
      name: string
      logoUrl: string | null
      website: string | null
      isAnonymized: boolean
    } | null
  }

  createdAt: string
  updatedAt: string
}

export interface WritingInterface {
  title: string
  slug: string
  description: string
  tags: string[]
  body: PortableTextBlock[]

  metadata: {
    status: ContentStatus
    isFeatured: boolean
    category: string
    topics: string[]
    publishedAt: string | null
  }

  createdAt: string
  updatedAt: string
}

export interface SocialMediaInterface {
  platform: SocialPlatform
  username: string
  url: string
  isHidden: boolean
}

export interface WorkInterface {
  title: string
  description: string
  tags: string[]

  metadata: {
    isFeatured: boolean
    projectUrl: string | null
    repositoryUrl: string | null
    key_contributions: PortableTextBlock[]
  }

  createdAt: string
  updatedAt: string
}

export interface ExperienceInterface {
  company: {
    name: string
    website: string | null
    location: string
    isAnonymized: boolean
  }

  timeline: string
  role: string
  key_contributions: PortableTextBlock[]

  createdAt: string
  updatedAt: string
}

export interface AcademicInterface {
  institute: {
    name: string
    website: string | null
  }

  degree: string
  field: string
  timeline: string

  createdAt: string
  updatedAt: string
}

export interface SkillInterface {
  id: string;
  title: string
  tags: string[]
}

export type InterestType = string[]
