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

export const timestampsProjection = /* groq */ `
  "createdAt": _createdAt,
  "updatedAt": _updatedAt
`
