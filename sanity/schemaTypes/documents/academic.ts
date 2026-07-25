import { BookIcon } from "@sanity/icons/Book"
import { defineField, defineType } from "sanity"

import { MAX_TITLE_LENGTH } from "../shared/validation"

export const academic = defineType({
  name: "academic",
  title: "Academic history",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "institute",
      type: "institute",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "degree",
      type: "string",
      validation: (rule) => rule.required().max(MAX_TITLE_LENGTH),
    }),
    defineField({
      name: "field",
      title: "Field of study",
      type: "string",
      validation: (rule) => rule.required().max(MAX_TITLE_LENGTH),
    }),
    defineField({
      name: "timeline",
      type: "string",
      description: "A human-readable range, for example 2018–2022.",
      validation: (rule) => rule.required().max(120),
    }),
  ],
  preview: {
    select: {
      degree: "degree",
      field: "field",
      institute: "institute.name",
      timeline: "timeline",
    },
    prepare({ degree, field, institute, timeline }) {
      return {
        title: [degree, field].filter(Boolean).join(", "),
        subtitle: [institute, timeline].filter(Boolean).join(" · "),
      }
    },
  },
})
