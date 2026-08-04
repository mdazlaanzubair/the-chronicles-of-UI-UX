import { CaseIcon } from "@sanity/icons/Case"
import { defineField, defineType } from "sanity"

import { MAX_TITLE_LENGTH } from "../shared/validation"

export const experience = defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: CaseIcon,
  fields: [
    defineField({
      name: "company",
      type: "experienceCompany",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "timeline",
      type: "string",
      description: "A human-readable range, for example Jan 2024–Present.",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "role",
      type: "string",
      validation: (rule) => rule.required().max(MAX_TITLE_LENGTH),
    }),
    defineField({
      name: "key_contributions",
      title: "Key contributions",
      type: "portableText",
      initialValue: [],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      company: "company.name",
      isAnonymized: "company.isAnonymized",
      location: "company.location",
      role: "role",
      timeline: "timeline",
    },
    prepare({ company, isAnonymized, location, role, timeline }) {
      return {
        title: role,
        subtitle: [
          isAnonymized ? "Confidential organization" : company,
          location,
          timeline,
        ]
          .filter(Boolean)
          .join(" · "),
      }
    },
  },
})
