import { CogIcon } from "@sanity/icons/Cog"
import { defineArrayMember, defineField, defineType } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  initialValue: {
    interests: [],
    skills: [],
    socialMedia: [],
  },
  fields: [
    defineField({
      name: "skills",
      type: "array",
      initialValue: [],
      of: [defineArrayMember({ type: "skill" })],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "socialMedia",
      title: "Social profiles",
      type: "array",
      initialValue: [],
      of: [defineArrayMember({ type: "socialProfile" })],
      validation: (rule) =>
        rule.required().custom((profiles) => {
          if (!Array.isArray(profiles)) return true

          const platforms = profiles
            .map((profile) =>
              typeof profile === "object" &&
              profile !== null &&
              "platform" in profile
                ? profile.platform
                : undefined
            )
            .filter(Boolean)

          return new Set(platforms).size === platforms.length
            ? true
            : "Add no more than one profile for each platform."
        }),
    }),
    defineField({
      name: "interests",
      type: "array",
      initialValue: [],
      of: [defineArrayMember({ type: "string" })],
      validation: (rule) => rule.required().unique(),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: "Site settings",
        subtitle: "Skills, social profiles, and interests",
      }
    },
  },
})
