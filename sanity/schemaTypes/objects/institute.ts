import { BookIcon } from "@sanity/icons/Book"
import { defineField, defineType } from "sanity"

export const institute = defineType({
  name: "institute",
  title: "Institute",
  type: "object",
  icon: BookIcon,
  fields: [
    defineField({
      name: "name",
      type: "string",
      validation: (rule) => rule.required().max(120),
    }),
    defineField({
      name: "website",
      type: "url",
      validation: (rule) =>
        rule
          .uri({ scheme: ["http", "https"] })
          .error("Use a complete http:// or https:// URL."),
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "website",
    },
  },
})
