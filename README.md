# Next.js template

This is a Next.js template with shadcn/ui.

## Adding components

To add components to your app, run the following command:

```bash
npx shadcn@latest add button
```

This will place the ui components in the `components` directory.

## Using components

To use the components in your app, import them as follows:

```tsx
import { Button } from "@/components/ui/button"
```

## Sanity Studio

The Sanity Studio is embedded at `/studio` and connects to the `production`
dataset in the `mdazlaanzubair-portfolio` Sanity project.

Copy the environment variables when setting up a new local checkout:

```bash
cp .env.example .env.local
```

Run the app and open [http://localhost:3000/studio](http://localhost:3000/studio):

```bash
npm run dev
```

Set the same `NEXT_PUBLIC_SANITY_PROJECT_ID` and
`NEXT_PUBLIC_SANITY_DATASET` variables in the hosting provider before deploying,
along with a server-only `SANITY_API_READ_TOKEN` that can read the private
dataset. Hashnode also requires `HASHNODE_GQL_ENDPOINT`,
`HASHNODE_PUBLICATION_HOST`, and a server-only `HASHNODE_ACCESS_TOKEN`.
The site uses Hashnode GraphQL as its primary source and the publication RSS
feed as a read-only fallback so transient API failures do not empty the
prerendered writing and case-study pages.

The production canonical origin is intentionally fixed to
`https://mdazlaanzubair.com` in `src/seo/site.ts` so previews and deployment
aliases cannot emit duplicate canonicals.
