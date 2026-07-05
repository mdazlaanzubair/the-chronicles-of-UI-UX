# AI Development Rules

**Project:** Muhammad Azlaan Zubair Portfolio & Engineering Hub

This document defines mandatory engineering rules for all AI coding agents contributing to this repository.

These rules take precedence over generated code suggestions.

---

# 1. General Principles

Always optimize for:

- Readability
- Simplicity
- Maintainability
- Scalability
- Accessibility
- Performance
- Type Safety

Never optimize for:

- Clever code
- Premature optimization
- Unnecessary abstractions
- Shortest implementation

When uncertain:

Choose the simpler solution.

---

# 2. Scope Protection

Only implement features explicitly defined in:

- prd.md
- flow.md

Never:

- invent new pages
- invent new features
- add hidden functionality
- build "nice to have" features
- add placeholder pages

If functionality is outside MVP:

STOP.

Do not implement it.

---

# 3. Architecture

Follow this architecture strictly.

```text
app/
│
├── api/
│
├── (app routes)
│
├── components/
│
├── features/
│
├── hooks/
│
├── services/
│
├── types/
│
└── utils/
```

Never mix business logic with presentation.

---

# 4. Component Rules

Components must have a single responsibility.

Prefer composition over inheritance.

Maximum responsibilities:

- UI
- Layout
- Form
- Card
- Section

Avoid components that try to solve multiple unrelated problems.

---

# 5. Server vs Client

Default to:

Server Components.

Use Client Components only when required.

Examples:

✔ Forms
✔ Theme toggle
✔ Search
✔ Interactive animations

Everything else should remain server-rendered.

---

# 6. Data Access

Never query Sanity directly inside components.

Correct flow:

```text
Sanity

↓

Route Handler

↓

Server Component

↓

Client Component
```

All data transformation belongs inside:

```
services/
```

Never inside UI.

---

# 7. File Size Limits

Maximum file lengths:

| File      |     Limit |
| --------- | --------: |
| Component | 200 lines |
| Page      | 250 lines |
| API Route | 200 lines |
| Hook      | 150 lines |
| Utility   | 150 lines |

If exceeded:

Refactor immediately or ask for instructions, clarification, review and approval.

---

# 8. Folder Organization

Organize by feature.

Example:

```text
features/

about/

blog/

project/

case-study/

publication/

```

Do not organize by file type.

Avoid folders like:

```
buttons/

cards/

helpers/
```

unless genuinely shared.

---

# 9. Naming

Use descriptive names.

Good

```
ProjectCard

BlogSearch

CaseStudyHero

PublicationList
```

Bad

```
Card1

Item

Helper

Component

Utils
```

Avoid abbreviations.

---

# 10. TypeScript

Strict Mode is mandatory.

Never use:

```
any
```

Prefer:

```
unknown

generics

discriminated unions

interfaces

type aliases
```

Every public function must have explicit typing.

---

# 11. Styling

Only use:

- Tailwind CSS
- shadcn/ui

Never use:

- inline styles
- CSS Modules
- Styled Components
- Emotion

Maintain consistent spacing using the design system.

---

# 12. Accessibility

Every feature must include:

- semantic HTML
- keyboard navigation
- focus states
- alt text
- aria labels where required

Never sacrifice accessibility for aesthetics.

---

# 13. Performance

Prefer:

- Static Rendering
- Server Components
- next/image
- next/font
- Code Splitting
- Lazy Loading

Avoid:

- unnecessary useEffect
- excessive client state
- unnecessary re-renders

---

# 14. Error Handling

Every async operation must handle:

- loading
- success
- empty
- error

Never assume data exists.

---

# 15. Code Quality

Avoid:

Nested conditionals

Large switch statements

Duplicate logic

Magic numbers

Hardcoded strings

Extract reusable logic when duplication appears more than twice.

---

# 16. Comments

Do not comment obvious code.

Comment only:

- architectural decisions
- complex algorithms
- non-obvious trade-offs

Code should explain itself.

---

# 17. Dependencies

Before installing a package ask:

Can this be solved with existing tools?

If yes:

Do not install another dependency.

Minimize dependency count.

---

# 18. Git Discipline

Every implementation should be:

Small

Atomic

Self-contained

Avoid mixing unrelated changes.

---

# 19. Design Philosophy

The UI should feel:

- minimal
- premium
- spacious
- editorial
- timeless

Avoid:

- dashboard aesthetics
- crowded layouts
- excessive gradients
- heavy shadows
- visual noise

Whitespace is intentional.

---

# 20. Definition of Done

A task is complete only when:

✓ TypeScript passes
✓ ESLint passes
✓ Formatting passes
✓ Responsive
✓ Accessible
✓ No console errors
✓ No TypeScript warnings
✓ No duplicated logic
✓ Matches PRD
✓ Matches design philosophy
✓ No scope creep

If any condition fails, the task is **not complete**.
