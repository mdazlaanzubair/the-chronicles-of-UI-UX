import { EarthGlobeIcon } from "@sanity/icons/EarthGlobe"
import { defineField, defineType } from "sanity"

import { socialPlatformOptions } from "../shared/options"

export const socialProfile = defineType({
  name: "socialProfile",
  title: "Social profile",
  type: "object",
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: "platform",
      type: "string",
      options: {
        list: [...socialPlatformOptions],
        layout: "dropdown",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "username",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
    defineField({
      name: "url",
      type: "url",
      validation: (rule) =>
        rule
          .required()
          .uri({ scheme: ["http", "https"] })
          .error("Use a complete http:// or https:// profile URL."),
    }),
    defineField({
      name: "isHidden",
      title: "Hide this profile",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      hidden: "isHidden",
      platform: "platform",
      username: "username",
    },
    prepare({ hidden, platform, username }) {
      const platformTitle =
        socialPlatformOptions.find(({ value }) => value === platform)?.title ??
        platform

      return {
        title: platformTitle,
        subtitle: `${username ?? "Missing username"}${hidden ? " · Hidden" : ""}`,
      }
    },
  },
})
