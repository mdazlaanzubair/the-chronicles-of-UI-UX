import JsonLd from "@/components/seo/JsonLd"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getHashnodePosts, type HashnodePost } from "@/src/hashnode/hashnode"
import { createPageMetadata } from "@/src/seo/site"
import { createCollectionJsonLd, PERSON_ID } from "@/src/seo/structured-data"
import { ExternalLinkIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const description =
  "Technical writing by Muhammad Azlaan Zubair on software architecture, web engineering, artificial intelligence, automation, and product development."

export const metadata = createPageMetadata({
  title: "Writing & Insights",
  description,
  path: "/",
})

export default async function Page() {
  let posts: HashnodePost[] = []
  let fetchError: string | null = null

  try {
    const res = await getHashnodePosts({
      first: 12,
      excludeCaseStudies: true,
    })
    posts = res.posts
  } catch (error: unknown) {
    console.error("Hashnode fetch error:", error)
    fetchError =
      error instanceof Error ? error.message : "Failed to load Hashnode posts."
  }

  const writingJsonLd = createCollectionJsonLd({
    path: "/",
    name: "Writing and technical insights",
    description,
    items: posts.map((post) => ({
      "@type": "BlogPosting",
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
      <header className="sr-only">
        <h1 id="writing-heading">Writing and technical insights</h1>
        <p>{description}</p>
      </header>
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
          <section
            key="post-container"
            className="motion-stagger flex flex-col gap-0"
          >
            {posts.map((post, idx) => {
              const hasImage = Boolean(post.coverImage?.url)
              return (
                <article
                  key={`blog-post-${post.id}-${idx}`}
                  className="flex flex-row items-center gap-4 border-b border-accent bg-card p-4 last:border-b-0"
                >
                  {hasImage ? (
                    <div className="relative aspect-video w-36 shrink-0 overflow-hidden rounded-md bg-muted sm:w-44">
                      <Image
                        src={post.coverImage!.url}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 144px, 176px"
                      />
                    </div>
                  ) : null}

                  <div className="flex min-w-0 flex-1 flex-col justify-between gap-2 self-stretch">
                    <div>
                      <div className="mb-1.5 flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag.id}
                            className="text-xs font-medium text-muted-foreground"
                          >
                            #{tag.name}
                          </span>
                        ))}
                      </div>

                      <h2 className="line-clamp-3 text-lg leading-snug font-semibold tracking-tight sm:text-base">
                        <Link
                          href={post.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          {post.title}
                        </Link>
                      </h2>
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-1 text-xs text-muted-foreground">
                      <time dateTime={post.publishedAt}>
                        {new Intl.DateTimeFormat("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        }).format(new Date(post.publishedAt))}
                      </time>

                      <span>{post.readTimeInMinutes} min read</span>
                    </div>
                  </div>
                </article>
              )
            })}
            <Link
              href="https://blog.mdazlaanzubair.com/"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "sm" }),
                "w-full px-0 text-xs"
              )}
            >
              Checkout More Articles
              <ExternalLinkIcon className="size-2.5 transition-transform duration-150 group-hover/button:translate-x-0.5 motion-reduce:transform-none" />
            </Link>
          </section>
        )
      })()}
    </section>
  )
}
