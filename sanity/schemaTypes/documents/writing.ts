import { ComposeIcon } from "@sanity/icons/Compose"
import { defineArrayMember, defineField, defineType } from "sanity"

import { contentStatusOptions } from "../shared/options"
import {
  MAX_DESCRIPTION_LENGTH,
  MAX_TITLE_LENGTH,
  SLUG_PATTERN,
  uniqueSlugWithinType,
} from "../shared/validation"

export const writing = defineType({
  name: "writing",
  title: "Writing",
  type: "document",
  icon: ComposeIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "metadata", title: "Publishing" },
    { name: "seo", title: "SEO" },
  ],
  initialValue: {
    metadata: {
      isFeatured: false,
      status: "draft",
      topics: [],
    },
    tags: [],
  },
  fields: [
    defineField({
      name: "title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required().max(MAX_TITLE_LENGTH),
    }),
    defineField({
      name: "slug",
      type: "slug",
      group: "content",
      options: {
        source: "title",
        maxLength: 96,
        isUnique: uniqueSlugWithinType,
      },
      validation: (rule) =>
        rule
          .required()
          .custom((value) =>
            value?.current && SLUG_PATTERN.test(value.current)
              ? true
              : "Use lowercase letters, numbers, and single hyphens only."
          ),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      group: "content",
      validation: (rule) => rule.required().max(MAX_DESCRIPTION_LENGTH),
    }),
    defineField({
      name: "tags",
      type: "array",
      group: "content",
      initialValue: [],
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().unique().max(12),
    }),
    defineField({
      name: "body",
      type: "portableText",
      group: "content",
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: "metadata",
      title: "Publishing details",
      type: "object",
      group: "metadata",
      validation: (rule) => rule.required(),
      fields: [
        defineField({
          name: "status",
          type: "string",
          options: {
            list: [...contentStatusOptions],
            layout: "radio",
          },
          initialValue: "draft",
          validation: (rule) => rule.required(),
        }),
        defineField({
          name: "isFeatured",
          title: "Feature this writing",
          type: "boolean",
          initialValue: false,
        }),
        defineField({
          name: "category",
          type: "string",
          validation: (rule) => rule.required().max(100),
        }),
        defineField({
          name: "topics",
          type: "array",
          initialValue: [],
          of: [defineArrayMember({ type: "string" })],
          validation: (rule) => rule.required().unique().max(12),
        }),
        defineField({
          name: "publishedAt",
          title: "Published at",
          type: "datetime",
          validation: (rule) =>
            rule.custom((value, context) => {
              const metadata = context.parent as { status?: string } | undefined

              return metadata?.status !== "published" || value
                ? true
                : "A publication date is required when status is published."
            }),
        }),
      ],
    }),
    defineField({
      name: "seo",
      type: "seo",
      group: "seo",
    }),
  ],
  orderings: [
    {
      title: "Publication date, newest",
      name: "publishedAtDesc",
      by: [
        { field: "metadata.publishedAt", direction: "desc" },
        { field: "title", direction: "asc" },
      ],
    },
  ],
  preview: {
    select: {
      category: "metadata.category",
      featured: "metadata.isFeatured",
      status: "metadata.status",
      title: "title",
    },
    prepare({ category, featured, status, title }) {
      return {
        title,
        subtitle: [category, status, featured ? "Featured" : undefined]
          .filter(Boolean)
          .join(" · "),
      }
    },
  },
})
