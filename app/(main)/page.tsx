import ArticleCard from "@/components/custom/ArticleCard"
import JsonLd from "@/components/seo/JsonLd"
import {
  getHashnodePosts,
  getHashnodeRssPosts,
  type HashnodePost,
} from "@/src/hashnode/hashnode"
import { createPageMetadata } from "@/src/seo/site"
import { createCollectionJsonLd, PERSON_ID } from "@/src/seo/structured-data"

const description =
  "Technical writing by Muhammad Azlaan Zubair on software architecture, web engineering, artificial intelligence, automation, and product development."

export const metadata = createPageMetadata({
  title: "Writing & Insights",
  description,
  path: "/",
  keywords: [
    "software architecture articles",
    "web engineering blog",
    "artificial intelligence insights",
    "developer automation",
    "Muhammad Azlaan Zubair writing",
  ],
})

export const revalidate = 21600

export default async function Page() {
  let posts: HashnodePost[] = []
  let fetchError: string | null = null

  try {
    const res = await getHashnodePosts({
      first: 10,
      excludeCaseStudies: false,
    })
    posts = res.posts
  } catch (apiError: unknown) {
    const apiMessage =
      apiError instanceof Error ? apiError.message : "Unknown GraphQL error"
    console.warn(`Hashnode GraphQL unavailable (${apiMessage}); using RSS.`)

    try {
      posts = await getHashnodeRssPosts({
        first: 10,
        excludeCaseStudies: false,
      })
    } catch (rssError: unknown) {
      console.error("Hashnode RSS fetch error:", rssError)
      fetchError =
        rssError instanceof Error
          ? rssError.message
          : "Failed to load Hashnode posts."
    }
  }

  const writingJsonLd = createCollectionJsonLd({
    path: "/",
    name: "Writing and technical insights",
    description,
    items: posts.map((post) => ({
      "@type": "BlogPosting",
      "@id": `${post.url}#article`,
      headline: post.title,
      description: post.brief,
      url: post.url,
      datePublished: post.publishedAt,
      author: { "@id": PERSON_ID },
      keywords: post.tags.map((tag) => tag.name),
      ...(post.coverImage?.url ? { image: post.coverImage.url } : {}),
    })),
  })

  return (
    <section
      id="writing"
      aria-labelledby="writing-heading"
      className="flex flex-col"
    >
      <JsonLd data={writingJsonLd} />
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
              <ArticleCard key={`blog-post-${post.id}-${idx}`} post={post} />
            ))}
          </div>
        )
      })()}
    </section>
  )
}
