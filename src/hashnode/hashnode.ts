import "server-only"

type HashnodeGraphQLError = {
  message: string
}

type HashnodeGraphQLResponse<T> = {
  data?: T
  errors?: HashnodeGraphQLError[]
}

const OFFICIAL_HASHNODE_GQL_ENDPOINT = "https://gql-beta.hashnode.com"

const getHashnodeHost = () => {
  const host = process.env.HASHNODE_PUBLICATION_HOST?.trim() || ""

  if (!host) {
    throw new Error(
      "HASHNODE_PUBLICATION_HOST environment variable is not defined."
    )
  }

  return host.replace(/^https?:\/\//i, "").replace(/\/.*$/, "")
}

const getHashnodeConfig = () => {
  const configuredEndpoint = process.env.HASHNODE_GQL_ENDPOINT?.trim() || ""
  const endpoint = configuredEndpoint || OFFICIAL_HASHNODE_GQL_ENDPOINT
  const host = getHashnodeHost()
  const token = process.env.HASHNODE_ACCESS_TOKEN?.trim() || ""

  if (!token) {
    throw new Error(
      "HASHNODE_ACCESS_TOKEN environment variable is not defined."
    )
  }

  return {
    endpoint,
    host,
    authorization: /^Bearer\s/i.test(token) ? token : `Bearer ${token}`,
  }
}

export interface HashnodePost {
  id: string
  title: string
  brief: string
  slug: string
  url: string
  publishedAt: string
  readTimeInMinutes: number
  views: number
  reactionCount: number
  content?: string

  coverImage: {
    url: string
  } | null

  author: {
    name: string
    profilePicture: string | null
  }

  series?: {
    id: string
    name: string
    slug: string
  } | null

  tags: Array<{
    id: string
    name: string
    slug: string
  }>
}

interface PublicationPostsResponse {
  publication: {
    posts: {
      edges: Array<{
        node: HashnodePost
      }>
      pageInfo: {
        hasNextPage: boolean
        endCursor: string | null
      }
    }
  } | null
}

const GET_PUBLICATION_POSTS = `
  query GetPublicationPosts(
    $host: String!
    $first: Int!
    $after: String
  ) {
    publication(host: $host) {
      posts(first: $first, after: $after) {
        edges {
          node {
            id
            title
            brief
            slug
            url
            publishedAt
            readTimeInMinutes
            views
            reactionCount

            coverImage {
              url
            }

            author {
              name
              profilePicture
            }

            series {
              id
              name
              slug
            }

            tags {
              id
              name
              slug
            }
          }
        }

        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`

interface GetHashnodePostsOptions {
  first?: number
  after?: string | null
  excludeCaseStudies?: boolean
}

export async function getHashnodePosts({
  first = 10,
  after = null,
  excludeCaseStudies = true,
}: GetHashnodePostsOptions = {}) {
  const { endpoint, host, authorization } = getHashnodeConfig()

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: authorization,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
    body: JSON.stringify({
      query: GET_PUBLICATION_POSTS,
      variables: {
        host,
        first,
        after,
      },
    }),
    next: {
      revalidate: 21600,
      tags: ["hashnode-posts"],
    },
  })

  const rawText = await response.text()

  let result: HashnodeGraphQLResponse<PublicationPostsResponse>
  try {
    result = JSON.parse(rawText)
  } catch {
    console.error(
      `Hashnode returned non-JSON body from URL (${endpoint}):`,
      rawText.slice(0, 300)
    )
    throw new Error(
      `Hashnode GraphQL endpoint returned invalid non-JSON response (status: ${response.status}).`
    )
  }

  if (!response.ok) {
    throw new Error(`Hashnode request failed with status ${response.status}.`)
  }

  if (result.errors?.length) {
    throw new Error(result.errors.map((error) => error.message).join(", "))
  }

  const publication = result.data?.publication

  if (!publication) {
    throw new Error(`Hashnode publication not found for host: ${host}`)
  }

  let posts = publication.posts.edges.map(({ node }) => node)

  if (excludeCaseStudies) {
    posts = posts.filter((post) => {
      const isCaseStudySeries =
        post.series?.slug === "case-studies" ||
        post.series?.slug === "case-study" ||
        post.series?.name?.toLowerCase().includes("case study")
      const isCaseStudyTag = post.tags?.some(
        (tag) =>
          tag.slug === "case-study" ||
          tag.slug === "case-studies" ||
          tag.name.toLowerCase() === "case study"
      )
      return !isCaseStudySeries && !isCaseStudyTag
    })
  }

  return {
    posts,
    pageInfo: publication.posts.pageInfo,
  }
}

export interface HashnodeSeries {
  id: string
  name: string
  slug: string
  description?: string | null
}

interface PublicationSeriesPostsResponse {
  publication: {
    series: {
      id: string
      name: string
      slug: string
      description: { text: string } | null
      posts: {
        edges: Array<{ node: HashnodePost }>
        pageInfo: {
          hasNextPage: boolean
          endCursor: string | null
        }
      }
    } | null
    seriesList?: {
      edges: Array<{
        node: {
          id: string
          name: string
          slug: string
          description: { text: string } | null
          posts: {
            edges: Array<{ node: HashnodePost }>
            pageInfo: {
              hasNextPage: boolean
              endCursor: string | null
            }
          }
        }
      }>
    }
  } | null
}

const GET_PUBLICATION_SERIES_POSTS = `
  query GetPublicationSeriesPosts(
    $host: String!
    $seriesSlug: String!
    $first: Int!
    $after: String
  ) {
    publication(host: $host) {
      series(slug: $seriesSlug) {
        id
        name
        slug
        description {
          text
        }
        posts(first: $first, after: $after) {
          edges {
            node {
              id
              title
              brief
              slug
              url
              publishedAt
              readTimeInMinutes
              views
              reactionCount

              coverImage {
                url
              }

              author {
                name
                profilePicture
              }

              tags {
                id
                name
                slug
              }
            }
          }

          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
      seriesList(first: 20) {
        edges {
          node {
            id
            name
            slug
            description {
              text
            }
            posts(first: $first, after: $after) {
              edges {
                node {
                  id
                  title
                  brief
                  slug
                  url
                  publishedAt
                  readTimeInMinutes
                  views
                  reactionCount

                  coverImage {
                    url
                  }

                  author {
                    name
                    profilePicture
                  }

                  tags {
                    id
                    name
                    slug
                  }
                }
              }

              pageInfo {
                hasNextPage
                endCursor
              }
            }
          }
        }
      }
    }
  }
`

interface GetHashnodeSeriesPostsOptions {
  seriesSlug?: string
  first?: number
  after?: string | null
}

export async function getHashnodeSeriesPosts({
  seriesSlug = "case-studies",
  first = 10,
  after = null,
}: GetHashnodeSeriesPostsOptions = {}) {
  const { endpoint, host, authorization } = getHashnodeConfig()

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: authorization,
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    },
    body: JSON.stringify({
      query: GET_PUBLICATION_SERIES_POSTS,
      variables: {
        host,
        seriesSlug,
        first,
        after,
      },
    }),
    next: {
      revalidate: 21600,
      tags: ["hashnode-series-posts"],
    },
  })

  const rawText = await response.text()

  let result: HashnodeGraphQLResponse<PublicationSeriesPostsResponse>
  try {
    result = JSON.parse(rawText)
  } catch {
    console.error(
      `Hashnode returned non-JSON body from URL (${endpoint}):`,
      rawText.slice(0, 300)
    )
    throw new Error(
      `Hashnode GraphQL endpoint returned invalid non-JSON response (status: ${response.status}).`
    )
  }

  if (!response.ok) {
    throw new Error(`Hashnode request failed with status ${response.status}.`)
  }

  if (result.errors?.length) {
    throw new Error(result.errors.map((error) => error.message).join(", "))
  }

  const publication = result.data?.publication

  if (!publication) {
    throw new Error(`Hashnode publication not found for host: ${host}`)
  }

  let targetSeries = publication.series

  if (!targetSeries && publication.seriesList?.edges) {
    const matchedEdge = publication.seriesList.edges.find(({ node }) => {
      const slugMatch =
        node.slug === seriesSlug ||
        node.slug === "case-studies" ||
        node.slug === "case-study" ||
        node.slug.includes(seriesSlug) ||
        seriesSlug.includes(node.slug)
      const nameMatch = node.name
        .toLowerCase()
        .includes(seriesSlug.replace("-", " "))
      return slugMatch || nameMatch
    })

    if (matchedEdge) {
      targetSeries = matchedEdge.node
    }
  }

  if (!targetSeries) {
    return {
      series: null,
      posts: [],
      pageInfo: {
        hasNextPage: false,
        endCursor: null,
      },
    }
  }

  return {
    series: {
      id: targetSeries.id,
      name: targetSeries.name,
      slug: targetSeries.slug,
      description: targetSeries.description?.text || null,
    },
    posts: targetSeries.posts.edges.map(({ node }) => node),
    pageInfo: targetSeries.posts.pageInfo,
  }
}

const unwrapCdata = (value: string) =>
  value.trim().replace(/^<!\[CDATA\[([\s\S]*)\]\]>$/, "$1")

const decodeXmlEntities = (value: string) =>
  value
    .replace(/&#x([\da-f]+);/gi, (_, code: string) =>
      String.fromCodePoint(Number.parseInt(code, 16))
    )
    .replace(/&#(\d+);/g, (_, code: string) =>
      String.fromCodePoint(Number(code))
    )
    .replaceAll("&amp;", "&")
    .replaceAll("&lt;", "<")
    .replaceAll("&gt;", ">")
    .replaceAll("&quot;", '"')
    .replaceAll("&apos;", "'")

const getXmlValue = (xml: string, tag: string) => {
  const escapedTag = tag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  const match = xml.match(
    new RegExp(
      `<${escapedTag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${escapedTag}>`,
      "i"
    )
  )

  return match ? decodeXmlEntities(unwrapCdata(match[1])) : ""
}

const stripHtml = (value: string) =>
  decodeXmlEntities(value.replace(/<[^>]+>/g, " "))
    .replace(/\s+/g, " ")
    .trim()

const slugify = (value: string) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

const parseHashnodeRss = (xml: string): HashnodePost[] =>
  [...xml.matchAll(/<item>([\s\S]*?)<\/item>/gi)].map(([, item]) => {
    const title = getXmlValue(item, "title")
    const url = getXmlValue(item, "link")
    const brief = stripHtml(getXmlValue(item, "description"))
    const publishedAt = new Date(getXmlValue(item, "pubDate")).toISOString()
    const authorName = getXmlValue(item, "dc:creator")
    const content = stripHtml(getXmlValue(item, "content:encoded"))
    const enclosureUrl =
      item.match(/<enclosure\s+[^>]*url=["']([^"']+)["'][^>]*\/?\s*>/i)?.[1] ??
      null
    const categories = [
      ...item.matchAll(/<category(?:\s[^>]*)?>([\s\S]*?)<\/category>/gi),
    ].map(([, category]) => decodeXmlEntities(unwrapCdata(category)))
    const isCaseStudy = categories.some(
      (category) => slugify(category) === "case-study"
    )

    return {
      id: url,
      title,
      brief,
      slug:
        new URL(url).pathname.split("/").filter(Boolean).at(-1) ??
        slugify(title),
      url,
      publishedAt,
      readTimeInMinutes: Math.max(
        1,
        Math.ceil(content.split(/\s+/).length / 220)
      ),
      views: 0,
      reactionCount: 0,
      content,
      coverImage: enclosureUrl ? { url: enclosureUrl } : null,
      author: {
        name: authorName || "Muhammad Azlaan Zubair",
        profilePicture: null,
      },
      series: isCaseStudy
        ? {
            id: "case-studies",
            name: "Case Studies",
            slug: "case-studies",
          }
        : null,
      tags: categories.map((category) => ({
        id: slugify(category),
        name: category,
        slug: slugify(category),
      })),
    }
  })

export async function getHashnodeRssPosts({
  first = 10,
  excludeCaseStudies = false,
  onlyCaseStudies = false,
}: {
  first?: number
  excludeCaseStudies?: boolean
  onlyCaseStudies?: boolean
} = {}) {
  const host = getHashnodeHost()
  const response = await fetch(`https://${host}/rss.xml`, {
    headers: { Accept: "application/rss+xml, application/xml;q=0.9" },
    next: { revalidate: 21600, tags: ["hashnode-rss"] },
  })

  if (!response.ok) {
    throw new Error(
      `Hashnode RSS request failed with status ${response.status}.`
    )
  }

  let posts = parseHashnodeRss(await response.text())

  if (excludeCaseStudies) {
    posts = posts.filter((post) => !post.series)
  }
  if (onlyCaseStudies) {
    posts = posts.filter((post) => Boolean(post.series))
  }

  return posts.slice(0, first)
}
