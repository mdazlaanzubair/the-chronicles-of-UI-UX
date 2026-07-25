import type { PortableTextBlock } from "next-sanity"

import type {
  ACADEMIC_HISTORY_QUERY_RESULT,
  CASE_STUDY_DETAIL_QUERY_RESULT,
  EXPERIENCE_QUERY_RESULT,
  INTERESTS_QUERY_RESULT,
  PUBLICATIONS_LIST_QUERY_RESULT,
  SKILLS_QUERY_RESULT,
  SOCIAL_PROFILES_QUERY_RESULT,
  WORK_LIST_QUERY_RESULT,
  WRITING_DETAIL_QUERY_RESULT,
} from "@/sanity.types"
import type {
  AcademicInterface,
  CaseStudyInterface,
  ExperienceInterface,
  InterestType,
  PublicationInterface,
  SkillInterface,
  SocialMediaInterface,
  WorkInterface,
  WritingInterface,
} from "@/type"

/**
 * The locked frontend contracts use PortableTextBlock[], while the generated
 * query types correctly include this project's custom Portable Text members
 * (images, callouts, code, tables, and related-content references).
 *
 * This boundary is intentionally the only cast: Portable Text renderers receive
 * the original Sanity array unchanged, and all other fields remain checked
 * against their generated query result types.
 */
const asPortableTextBlocks = (body: unknown): PortableTextBlock[] =>
  body as PortableTextBlock[]

export const toPublications = (
  documents: PUBLICATIONS_LIST_QUERY_RESULT
): PublicationInterface[] => documents

export const toCaseStudy = (
  document: NonNullable<CASE_STUDY_DETAIL_QUERY_RESULT>
): CaseStudyInterface => ({
  ...document,
  body: asPortableTextBlocks(document.body),
})

export const toWriting = (
  document: NonNullable<WRITING_DETAIL_QUERY_RESULT>
): WritingInterface => ({
  ...document,
  body: asPortableTextBlocks(document.body),
})

export const toWorkItems = (
  documents: WORK_LIST_QUERY_RESULT
): WorkInterface[] =>
  documents.map((document) => ({
    ...document,
    metadata: {
      ...document.metadata,
      key_contributions: asPortableTextBlocks(
        document.metadata.key_contributions
      ),
    },
  }))

export const toExperience = (
  documents: EXPERIENCE_QUERY_RESULT
): ExperienceInterface[] =>
  documents.map((document) => ({
    ...document,
    key_contributions: asPortableTextBlocks(document.key_contributions),
  }))

export const toAcademicHistory = (
  documents: ACADEMIC_HISTORY_QUERY_RESULT
): AcademicInterface[] => documents

export const toSkills = (skills: SKILLS_QUERY_RESULT): SkillInterface[] =>
  skills

export const toSocialProfiles = (
  profiles: SOCIAL_PROFILES_QUERY_RESULT
): SocialMediaInterface[] => profiles

export const toInterests = (interests: INTERESTS_QUERY_RESULT): InterestType =>
  interests
