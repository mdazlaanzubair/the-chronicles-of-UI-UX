export const contentStatusOptions = [
  { title: "Draft", value: "draft" },
  { title: "Published", value: "published" },
  { title: "Archived", value: "archived" },
] as const

export const publicationStatusOptions = [
  { title: "In preparation", value: "in_preparation" },
  { title: "Submitted", value: "submitted" },
  { title: "Under review", value: "under_review" },
  { title: "Accepted", value: "accepted" },
  { title: "Published", value: "published" },
] as const

export const socialPlatformOptions = [
  { title: "X", value: "x" },
  { title: "Instagram", value: "instagram" },
  { title: "LinkedIn", value: "linkedin" },
  { title: "GitHub", value: "github" },
  { title: "Google Scholar", value: "scholar" },
] as const

export const publicationStatusLabels = Object.fromEntries(
  publicationStatusOptions.map(({ title, value }) => [value, title])
) as Record<string, string>
