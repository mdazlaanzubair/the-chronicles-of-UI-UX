export const portableTextMembersProjection = /* groq */ `
  ...,
  _type == "portableImage" => {
    image {
      ...,
      asset->{
        _id,
        url,
        metadata {
          dimensions,
          lqip
        }
      }
    }
  },
  _type == "callout" => {
    content[]{...}
  },
  _type == "tableBlock" => {
    rows[]{
      _key,
      cells
    }
  },
  _type == "relatedContent" => {
    reference->{
      _id,
      _type,
      title,
      "slug": slug.current
    }
  },
  _type == "block" => {
    markDefs[]{
      ...,
      _type == "relatedContentLink" => {
        reference->{
          _id,
          _type,
          title,
          "slug": slug.current
        }
      }
    }
  }
`

export const portableTextProjection = /* groq */ `
  "body": coalesce(body[]{
    ${portableTextMembersProjection}
  }, [])
`

export const seoProjection = /* groq */ `
  "seo": {
    "title": coalesce(seo.title, title),
    "description": coalesce(seo.description, description),
    "canonicalUrl": seo.canonicalUrl,
    "imageUrl": seo.openGraphImage.asset->url,
    "noIndex": seo.noIndex == true
  }
`

export const timestampsProjection = /* groq */ `
  "createdAt": _createdAt,
  "updatedAt": _updatedAt
`
