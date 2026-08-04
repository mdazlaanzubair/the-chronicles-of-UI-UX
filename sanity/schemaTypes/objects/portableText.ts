import { BlockContentIcon } from "@sanity/icons/BlockContent"
import { CodeBlockIcon } from "@sanity/icons/CodeBlock"
import { CommentIcon } from "@sanity/icons/Comment"
import { ImageIcon } from "@sanity/icons/Image"
import { LinkIcon } from "@sanity/icons/Link"
import { TiersIcon } from "@sanity/icons/Tiers"
import { defineArrayMember, defineField, defineType } from "sanity"

const linkAnnotation = defineArrayMember({
  name: "link",
  title: "Link",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "href",
      title: "URL",
      type: "url",
      validation: (rule) =>
        rule
          .required()
          .uri({ scheme: ["http", "https", "mailto", "tel"] })
          .error("Enter a valid web, email, or telephone URL."),
    }),
    defineField({
      name: "openInNewTab",
      title: "Open in a new tab",
      type: "boolean",
      initialValue: false,
    }),
  ],
})

const relatedContentAnnotation = defineArrayMember({
  name: "relatedContentLink",
  title: "Related content",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "reference",
      type: "reference",
      to: [{ type: "publication" }, { type: "work" }],
      validation: (rule) => rule.required(),
    }),
  ],
})

const richTextBlock = defineArrayMember({
  type: "block",
  styles: [
    { title: "Paragraph", value: "normal" },
    { title: "Heading 2", value: "h2" },
    { title: "Heading 3", value: "h3" },
    { title: "Heading 4", value: "h4" },
    { title: "Blockquote", value: "blockquote" },
  ],
  lists: [
    { title: "Bulleted list", value: "bullet" },
    { title: "Numbered list", value: "number" },
  ],
  marks: {
    decorators: [
      { title: "Strong", value: "strong" },
      { title: "Emphasis", value: "em" },
      { title: "Underline", value: "underline" },
      { title: "Strike-through", value: "strike-through" },
      { title: "Inline code", value: "code" },
    ],
    annotations: [linkAnnotation, relatedContentAnnotation],
  },
})

export const portableImage = defineType({
  name: "portableImage",
  title: "Image",
  type: "object",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Alternative text",
      type: "string",
      description:
        "Describe the image for people who cannot see it. Avoid phrases such as “image of”.",
      validation: (rule) => rule.required().max(240),
    }),
    defineField({
      name: "caption",
      type: "string",
      validation: (rule) => rule.max(320),
    }),
  ],
  preview: {
    select: {
      media: "image",
      subtitle: "alt",
      title: "caption",
    },
    prepare({ media, subtitle, title }) {
      return {
        media,
        subtitle,
        title: title || "Image",
      }
    },
  },
})

export const codeBlock = defineType({
  name: "codeBlock",
  title: "Code block",
  type: "object",
  icon: CodeBlockIcon,
  fields: [
    defineField({
      name: "code",
      type: "text",
      rows: 12,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "language",
      type: "string",
      options: {
        list: [
          { title: "Plain text", value: "text" },
          { title: "Bash", value: "bash" },
          { title: "CSS", value: "css" },
          { title: "GROQ", value: "groq" },
          { title: "HTML", value: "html" },
          { title: "JavaScript", value: "javascript" },
          { title: "JSON", value: "json" },
          { title: "JSX", value: "jsx" },
          { title: "TypeScript", value: "typescript" },
          { title: "TSX", value: "tsx" },
        ],
      },
      initialValue: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "filename",
      type: "string",
      validation: (rule) => rule.max(160),
    }),
  ],
  preview: {
    select: {
      code: "code",
      filename: "filename",
      language: "language",
    },
    prepare({ code, filename, language }) {
      return {
        title: filename || `${language || "Plain text"} code`,
        subtitle:
          typeof code === "string"
            ? code.split("\n")[0].slice(0, 80)
            : undefined,
      }
    },
  },
})

export const callout = defineType({
  name: "callout",
  title: "Callout",
  type: "object",
  icon: CommentIcon,
  fields: [
    defineField({
      name: "tone",
      type: "string",
      options: {
        list: [
          { title: "Note", value: "note" },
          { title: "Tip", value: "tip" },
          { title: "Warning", value: "warning" },
        ],
        layout: "radio",
      },
      initialValue: "note",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.max(120),
    }),
    defineField({
      name: "content",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Paragraph", value: "normal" }],
          lists: [
            { title: "Bulleted list", value: "bullet" },
            { title: "Numbered list", value: "number" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Inline code", value: "code" },
            ],
            annotations: [linkAnnotation],
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: "title",
      tone: "tone",
    },
    prepare({ title, tone }) {
      return {
        title: title || "Callout",
        subtitle: tone,
      }
    },
  },
})

export const tableRow = defineType({
  name: "tableRow",
  title: "Table row",
  type: "object",
  fields: [
    defineField({
      name: "cells",
      type: "array",
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: { cells: "cells" },
    prepare({ cells }) {
      return {
        title: Array.isArray(cells) ? cells.join(" | ") : "Empty row",
      }
    },
  },
})

export const tableBlock = defineType({
  name: "tableBlock",
  title: "Table",
  type: "object",
  icon: TiersIcon,
  fields: [
    defineField({
      name: "caption",
      type: "string",
      validation: (rule) => rule.max(240),
    }),
    defineField({
      name: "hasHeaderRow",
      title: "Use the first row as column headings",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "rows",
      type: "array",
      of: [defineArrayMember({ type: "tableRow" })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      caption: "caption",
      rows: "rows",
    },
    prepare({ caption, rows }) {
      return {
        title: caption || "Table",
        subtitle: `${Array.isArray(rows) ? rows.length : 0} rows`,
      }
    },
  },
})

export const relatedContent = defineType({
  name: "relatedContent",
  title: "Related content",
  type: "object",
  icon: LinkIcon,
  fields: [
    defineField({
      name: "reference",
      type: "reference",
      to: [{ type: "publication" }, { type: "work" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "label",
      type: "string",
      description: "Optional link-label override.",
      validation: (rule) => rule.max(120),
    }),
  ],
  preview: {
    select: {
      label: "label",
      title: "reference.title",
      type: "reference._type",
    },
    prepare({ label, title, type }) {
      return {
        title: label || title || "Related content",
        subtitle: type,
      }
    },
  },
})

export const portableText = defineType({
  name: "portableText",
  title: "Portable Text",
  type: "array",
  icon: BlockContentIcon,
  of: [
    richTextBlock,
    defineArrayMember({ type: "portableImage" }),
    defineArrayMember({ type: "codeBlock" }),
    defineArrayMember({ type: "callout" }),
    defineArrayMember({ type: "tableBlock" }),
    defineArrayMember({ type: "relatedContent" }),
  ],
})
