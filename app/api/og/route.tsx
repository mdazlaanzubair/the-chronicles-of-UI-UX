import { createSocialImage } from "@/src/seo/social-image"

export const dynamic = "force-static"

export function GET() {
  return createSocialImage()
}
