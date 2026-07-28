type HashnodeGraphQLError = {
  message: string
}

type HashnodeGraphQLResponse<T> = {
  data?: T
  errors?: HashnodeGraphQLError[]
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
  const endpoint = process.env.HASHNODE_GQL_ENDPOINT || ""
  const host = process.env.HASHNODE_PUBLICATION_HOST || ""
  const token = process.env.HASHNODE_ACCESS_TOKEN || ""

  if (!endpoint) {
    throw new Error(
      "HASHNODE_GQL_ENDPOINT environment variable is not defined."
    )
  }
  if (!host) {
    throw new Error(
      "HASHNODE_PUBLICATION_HOST environment variable is not defined."
    )
  }
  if (!token) {
    throw new Error(
      "HASHNODE_ACCESS_TOKEN environment variable is not defined."
    )
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
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
      revalidate: 3600,
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
  const endpoint = process.env.HASHNODE_GQL_ENDPOINT || ""
  const host = process.env.HASHNODE_PUBLICATION_HOST || ""
  const token = process.env.HASHNODE_ACCESS_TOKEN || ""

  if (!endpoint) {
    throw new Error(
      "HASHNODE_GQL_ENDPOINT environment variable is not defined."
    )
  }
  if (!host) {
    throw new Error(
      "HASHNODE_PUBLICATION_HOST environment variable is not defined."
    )
  }
  if (!token) {
    throw new Error(
      "HASHNODE_ACCESS_TOKEN environment variable is not defined."
    )
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: token,
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
      revalidate: 3600,
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

