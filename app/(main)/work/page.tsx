import ArticleCard from "@/components/custom/ArticleCard"
import JsonLd from "@/components/seo/JsonLd"
import {
  getHashnodeSeriesPosts,
  getHashnodeRssPosts,
  type HashnodePost,
  type HashnodeSeries,
} from "@/src/hashnode/hashnode"
import { createPageMetadata } from "@/src/seo/site"
import { createCollectionJsonLd, PERSON_ID } from "@/src/seo/structured-data"

const description =
  "Engineering and product case studies by Muhammad Azlaan Zubair, covering architecture decisions, implementation challenges, and measurable outcomes."

export const metadata = createPageMetadata({
  title: "Case Studies",
  description,
  path: "/work",
  keywords: [
    "software engineering case studies",
    "product architecture decisions",
    "Next.js case studies",
    "web performance engineering",
    "Muhammad Azlaan Zubair work",
  ],
})

export const revalidate = 21600

export default async function Page() {
  let posts: HashnodePost[] = []
  let series: HashnodeSeries | null = null
  let fetchError: string | null = null

  try {
    const res = await getHashnodeSeriesPosts({
      seriesSlug: "case-studies",
      first: 10,
    })
    posts = res.posts
    series = res.series
  } catch (apiError: unknown) {
    const apiMessage =
      apiError instanceof Error ? apiError.message : "Unknown GraphQL error"
    console.warn(`Hashnode GraphQL unavailable (${apiMessage}); using RSS.`)

    try {
      posts = await getHashnodeRssPosts({
        first: 10,
        onlyCaseStudies: true,
      })
      series = posts.length
        ? {
            id: "case-studies",
            name: "Case Studies",
            slug: "case-studies",
            description: "Engineering and product case studies.",
          }
        : null
    } catch (rssError: unknown) {
      console.error("Hashnode RSS fetch error:", rssError)
      fetchError =
        rssError instanceof Error
          ? rssError.message
          : "Failed to load Hashnode case study posts."
    }
  }

  const seriesUrl = series?.slug
    ? `https://blog.mdazlaanzubair.com/series/${series.slug}`
    : "https://blog.mdazlaanzubair.com/"

  const workJsonLd = createCollectionJsonLd({
    path: "/work",
    name: "Engineering and product case studies",
    description,
    items: posts.map((post) => ({
      "@type": "TechArticle",
      "@id": `${post.url}#article`,
      headline: post.title,
      description: post.brief,
      url: post.url,
      datePublished: post.publishedAt,
      timeRequired: `PT${post.readTimeInMinutes}M`,
      articleSection: series?.name ?? "Case Studies",
      isPartOf: {
        "@type": "CreativeWorkSeries",
        name: series?.name ?? "Case Studies",
        url: seriesUrl,
      },
      author: { "@id": PERSON_ID },
      keywords: post.tags.map((tag) => tag.name),
      ...(post.coverImage?.url ? { image: post.coverImage.url } : {}),
    })),
  })

  return (
    <section id="work" aria-labelledby="work-heading" className="flex flex-col">
      <JsonLd data={workJsonLd} />
      {(() => {
        if (posts.length <= 0) {
          return (
            <div
              key="no-post-container"
              className="rounded-md border border-dashed border-accent bg-muted/20 p-4"
            >
              <p className="text-sm font-medium text-muted-foreground">
                {fetchError
                  ? fetchError
                  : "No articles have been published yet."}
              </p>
            </div>
          )
        }

        return (
          <div
            key="post-container"
            className="motion-stagger flex flex-col gap-0"
          >
            {posts.map((post, idx) => (
              <ArticleCard
                key={`case-study-post-${post.id}-${idx}`}
                post={post}
              />
            ))}
          </div>
        )
      })()}
    </section>
  )
}
