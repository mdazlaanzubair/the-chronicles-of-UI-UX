import { academic } from "./documents/academic"
import { caseStudy } from "./documents/caseStudy"
import { experience } from "./documents/experience"
import { publication } from "./documents/publication"
import { siteSettings } from "./documents/siteSettings"
import { work } from "./documents/work"
import { writing } from "./documents/writing"
import { company } from "./objects/company"
import { experienceCompany } from "./objects/experienceCompany"
import { institute } from "./objects/institute"
import {
  callout,
  codeBlock,
  portableImage,
  portableText,
  relatedContent,
  tableBlock,
  tableRow,
} from "./objects/portableText"
import { projectSummary } from "./objects/projectSummary"
import { seo } from "./objects/seo"
import { skill } from "./objects/skill"
import { socialProfile } from "./objects/socialProfile"

export const schemaTypes = [
  publication,
  caseStudy,
  writing,
  work,
  experience,
  academic,
  siteSettings,
  seo,
  company,
  experienceCompany,
  institute,
  projectSummary,
  socialProfile,
  skill,
  portableImage,
  codeBlock,
  callout,
  tableRow,
  tableBlock,
  relatedContent,
  portableText,
]
