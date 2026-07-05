# Technology Stack Specification

**Project:** Muhammad Azlaan Zubair Portfolio & Engineering Hub
**Version:** MVP v1.0
**Status:** Approved

---

# 1. Guiding Principles

The technology stack must prioritize:

- Simplicity over complexity
- Performance over unnecessary abstractions
- Type safety
- Excellent developer experience
- Long-term maintainability
- SEO
- Scalability
- Minimal infrastructure

Avoid introducing technologies that do not solve a real problem.

---

# 2. Core Stack

| Layer              | Technology              |
| ------------------ | ----------------------- |
| Framework          | Next.js 16 (App Router) |
| Language           | TypeScript              |
| Runtime            | Node.js LTS             |
| Package Manager    | pnpm                    |
| Styling            | Tailwind CSS v4         |
| UI Components      | shadcn/ui               |
| Icons              | Lucide React            |
| Animation          | Motion (Framer Motion)  |
| Forms              | React Hook Form + Zod   |
| CMS                | Sanity.io               |
| Image Optimization | next/image              |
| Fonts              | next/font               |

---

# 3. Data Flow

Never consume Sanity directly from React components.

Use the following flow:

```text
Sanity CMS
      │
      ▼
Next.js Route Handlers (/app/api/*)
      │
      ▼
Server Components
      │
      ▼
Client Components (only when necessary)
```

This abstraction:

- Decouples frontend from CMS
- Simplifies future CMS migration
- Centralizes caching and transformations
- Prevents Sanity-specific logic from leaking into the UI

---

# 4. Rendering Strategy

| Page         | Strategy                |
| ------------ | ----------------------- |
| Home         | Static                  |
| About        | Static                  |
| Projects     | Static                  |
| Blog List    | Static + Revalidation   |
| Blog Detail  | Static + Dynamic Params |
| Case Studies | Static                  |
| Publications | Static                  |
| Contact      | Static                  |

Prefer Static Site Generation whenever possible.

Use dynamic rendering only when absolutely necessary.

---

# 5. State Management

Default approach:

- React Server Components
- URL State
- Local Component State

Only introduce client state when required.

Global state should use:

- Zustand

Do NOT use:

- Redux
- MobX
- Recoil
- Context for application state

---

# 6. API Layer

All frontend requests must go through internal Route Handlers.

Example:

```
React Component
        │
        ▼
/api/blog
        │
        ▼
Sanity Client
```

Never expose Sanity queries directly inside UI components.

---

# 7. Content Management

CMS:

- Sanity Studio

Managed Content:

- Blog Posts
- Projects
- Case Studies
- Publications
- Categories
- Tags

Business logic must never live inside Sanity schemas.

---

# 8. Styling Standards

Use:

- Tailwind CSS utility classes
- shadcn/ui primitives
- CSS variables for theme tokens

Avoid:

- CSS Modules
- Styled Components
- Emotion
- Inline styles

Spacing should follow a consistent 4px scale.

---

# 9. File Storage

Use Sanity Asset Pipeline for:

- Images
- Cover Images
- Project Assets

Do not store static content inside the repository unless required.

---

# 10. Validation

Client:

- React Hook Form
- Zod

Server:

- Zod validation before processing requests

Never trust client input.

---

# 11. SEO

Use Next.js Metadata API.

Every page must include:

- Title
- Description
- Open Graph
- Twitter Card
- Canonical URL
- Structured Data (where applicable)

Automatically generate:

- sitemap.xml
- robots.txt

---

# 12. Code Quality

Required:

- TypeScript Strict Mode
- ESLint
- Prettier
- Husky
- lint-staged

Every commit must pass:

- Type checking
- Linting
- Formatting

---

# 13. Deployment

Hosting:

- Vercel

Environment Variables:

```
NEXT_PUBLIC_SITE_URL

SANITY_PROJECT_ID
SANITY_DATASET
SANITY_API_VERSION
SANITY_READ_TOKEN

CONTACT_EMAIL
```

Secrets must never be committed to Git.

---

# 14. Future Compatibility

The architecture should support future additions without major refactoring:

- Newsletter
- Full-text Search
- AI Search
- Vector Database
- Analytics
- Products
- Authentication
- SaaS Dashboard

These features are intentionally excluded from the MVP but should integrate naturally with the chosen architecture.
