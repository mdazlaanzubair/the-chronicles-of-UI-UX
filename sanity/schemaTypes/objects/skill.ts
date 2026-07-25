import { TagsIcon } from "@sanity/icons/Tags"
import { defineArrayMember, defineField, defineType } from "sanity"

export const skill = defineType({
  name: "skill",
  title: "Skill",
  type: "object",
  icon: TagsIcon,
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "tags",
      type: "array",
      initialValue: [],
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().unique().max(20),
    }),
  ],
  preview: {
    select: {
      tags: "tags",
      title: "title",
    },
    prepare({ tags, title }) {
      return {
        title,
        subtitle: Array.isArray(tags) ? tags.join(", ") : undefined,
      }
    },
  },
})
