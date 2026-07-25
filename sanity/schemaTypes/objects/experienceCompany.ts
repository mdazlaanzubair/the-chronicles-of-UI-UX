import { CaseIcon } from "@sanity/icons/Case"
import { defineField, defineType } from "sanity"

type ExperienceCompanyValue = {
  isAnonymized?: boolean
  location?: string
  name?: string
  website?: string
}

export const experienceCompany = defineType({
  name: "experienceCompany",
  title: "Experience organization",
  type: "object",
  icon: CaseIcon,
  description:
    "Only public organization information belongs here. For anonymized work, do not store the real name or identifying website.",
  validation: (rule) =>
    rule.custom((rawValue) => {
      const value = rawValue as ExperienceCompanyValue | undefined

      if (!value) return true

      if (!value.location?.trim()) {
        return "A public-safe location is required."
      }

      if (value.isAnonymized) {
        return value.name?.trim() || value.website
          ? "An anonymized organization cannot store a name or website."
          : true
      }

      return value.name?.trim()
        ? true
        : "A public organization name is required when anonymization is off."
    }),
  fields: [
    defineField({
      name: "isAnonymized",
      title: "Anonymize this organization",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "name",
      title: "Public organization name",
      type: "string",
      description: "Never enter a confidential real name in this field.",
      hidden: ({ parent }) =>
        Boolean((parent as ExperienceCompanyValue | undefined)?.isAnonymized),
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: "website",
      type: "url",
      hidden: ({ parent }) =>
        Boolean((parent as ExperienceCompanyValue | undefined)?.isAnonymized),
      validation: (rule) =>
        rule
          .uri({ scheme: ["http", "https"] })
          .error("Use a complete http:// or https:// URL."),
    }),
    defineField({
      name: "location",
      type: "string",
      description:
        "Use a public-safe value such as “Remote”, a city, or a broader region.",
      validation: (rule) => rule.required().max(120),
    }),
  ],
  preview: {
    select: {
      isAnonymized: "isAnonymized",
      location: "location",
      title: "name",
    },
    prepare({ isAnonymized, location, title }) {
      return {
        title: isAnonymized ? "Confidential organization" : title,
        subtitle: [location, isAnonymized ? "Anonymized" : undefined]
          .filter(Boolean)
          .join(" · "),
      }
    },
  },
})
