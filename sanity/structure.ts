import { CogIcon } from "@sanity/icons/Cog"
import type { StructureResolver } from "sanity/structure"

const singletonTypes = new Set(["siteSettings"])

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Portfolio content")
    .items([
      S.listItem()
        .title("Site settings")
        .icon(CogIcon)
        .child(
          S.document()
            .schemaType("siteSettings")
            .documentId("siteSettings")
            .title("Site settings")
        ),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() ?? "")
      ),
    ])
