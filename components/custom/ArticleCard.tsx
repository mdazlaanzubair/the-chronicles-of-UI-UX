import type { HashnodePost } from "@/src/hashnode/hashnode"
import Image from "next/image"
import Link from "next/link"

const ArticleCard = ({ post }: { post: HashnodePost }) => {
  const hasImage = Boolean(post.coverImage?.url)

  return (
    <article
      key={`blog-post-${post.id}`}
      className="flex flex-col gap-4 border-b border-accent bg-card p-4 last:border-b-0"
    >
      <div className="flex flex-col gap-4 lg:flex-row">
        {hasImage ? (
          <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-md bg-muted lg:w-44">
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
            {post.series?.slug === "case-studies" ? (
              <span className="eyebrow text-primary">Case Study</span>
            ) : (
              <span className="eyebrow text-primary">Article</span>
            )}

            <h2 className="line-clamp-1 text-lg leading-snug font-semibold tracking-tight sm:text-base">
              <Link
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {post.title}
              </Link>
            </h2>
            <p className="mb-3 line-clamp-2 text-xs leading-5 text-muted-foreground">
              {post.brief}
            </p>
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
        </div>
      </div>

      <div className="my-2 line-clamp-1 flex flex-wrap gap-1">
        {post.tags.slice(0, 5).map((tag) => (
          <span
            key={tag.id}
            className="border border-accent bg-muted p-2 leading-0 text-[11px] font-medium whitespace-nowrap text-muted-foreground capitalize"
          >
            #{tag.name}
          </span>
        ))}
      </div>
    </article>
  )
}

export default ArticleCard
