"use client"

import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

export default defineConfig({
  name: "portfolio",
  title: "Portfolio",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  basePath: "/studio",
  plugins: [structureTool()],
  schema: {
    types: [],
  },
})
