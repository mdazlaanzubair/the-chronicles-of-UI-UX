import { pathsAreEqual, stringToPath } from "sanity"
import { defineMigration, set } from "sanity/migrate"

const experienceContributionsPath = stringToPath("key_contributions")
const workContributionsPath = stringToPath("metadata.key_contributions")

const stringToPortableTextBlock = (text: string, index: number) => ({
  _key: `migrated-contribution-${index}`,
  _type: "block",
  children: [
    {
      _key: `migrated-contribution-span-${index}`,
      _type: "span",
      marks: [],
      text,
    },
  ],
  markDefs: [],
  style: "normal",
})

export default defineMigration({
  title: "Convert key contributions to Portable Text",
  documentTypes: ["experience", "work"],
  migrate: {
    array(node, path) {
      const isContributionField =
        pathsAreEqual(path, experienceContributionsPath) ||
        pathsAreEqual(path, workContributionsPath)

      if (
        !isContributionField ||
        !node.some((item) => typeof item === "string")
      ) {
        return
      }

      return set(
        node.map((item, index) =>
          typeof item === "string"
            ? stringToPortableTextBlock(item, index)
            : item
        )
      )
    },
  },
})
