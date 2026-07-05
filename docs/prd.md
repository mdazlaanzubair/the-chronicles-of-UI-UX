# Product Requirements Document (PRD)

**Project:** Muhammad Azlaan Zubair Portfolio & Engineering Hub
**Version:** MVP v1.0
**Status:** Approved
**Primary Goal:** Build a premium engineering portfolio that establishes credibility and becomes the central hub for projects, technical writing, research, and future software products.

---

# 1. Product Vision

This is **not** a traditional portfolio website.

It is an engineering-focused digital headquarters that demonstrates software engineering capability through carefully curated projects, technical writing, architecture case studies, research publications, and product development.

The website should communicate:

- Engineering excellence
- Systems thinking
- Product mindset
- AI-enabled software development
- Long-term technical credibility

The website must prioritize quality over quantity and clarity over visual complexity.

---

# 2. Target Audience

Primary users:

- CTOs
- Engineering Managers
- Technical Recruiters
- Startup Founders
- Product Leaders
- Senior Software Engineers
- AI Engineers
- Researchers

The website is **not** designed for beginner programmers or general consumers.

---

# 3. Success Criteria

The MVP is considered successful when visitors can:

- Understand who Muhammad Azlaan Zubair is within 10 seconds.
- Browse projects without confusion.
- Read technical blogs.
- Explore engineering case studies.
- View research publications.
- Download the latest resume.
- Contact through multiple channels.
- Experience excellent performance on desktop and mobile.

---

# 4. MVP Scope

## Home

It will be a two column layout

- Left Column ( ~30% width )
  - Header
    - My Profile Image
    - My name in a large bold font
    - My title in a smaller font
    - 2 line Professional Bio

  - Navigation
    - Writings
    - Work
    - Case Studies
    - Publications

  - Footer
    - Social media links
    - Schedule a call with me button
    - Contact button
    - Resume download button

- Right Column ( ~70% width )

  This section is the in-page linked scrollable section and directly linked to the navigation links in the left column
  - Writings ( latest 4 blogs )
  - Work ( latest 2 projects )
  - Case Studies ( latest 2 case studies )
  - Publications ( latest 2 publications )
  - Copyright info

---

## Writings

- Navigation header
  - Categories navigation links
  - Search icon

- Blog listing
  - Individual article page
  - Reading time
  - Table of contents
  - Article content will be written in markdown format using md files

---

## Work

Each project includes:

- Cover image / Demo video
- Summary / Description
- Technologies / Tech Stack
- Architecture overview
- Challenges
- Engineering decisions
- Links (GitHub / Live Demo)

Content managed through Sanity CMS.

---

## Case Studies

Long-form engineering write-ups including:

- Problem
- Research
- Architecture
- Trade-offs
- Implementation
- Lessons learned
- Impact

---

## Publications

List academic publications with:

- Abstract
- Authors
- Journal
- External link

---

## About

Professional biography

- Professional Background
- Academic Background
- Research Interests
- Career timeline
- Skills
- Achievements
- Certifications
- Awards
- Volunteering
- Patents

---

# 5. Non-Functional Requirements

- Lighthouse score above 90
- Fully responsive, mobile first
- Accessible (WCAG AA)
- SEO optimized
- Fast page transitions
- Dark / Light mode
- Static generation whenever possible and necessary

---

# 6. Explicitly Out of Scope

The following are **NOT** part of MVP.

## Authentication

No login system.

---

## Admin Dashboard

Content is managed directly through Sanity Studio.

---

## Comments

No commenting system.

---

## User Accounts

No profiles.

---

## Newsletter

Not included.

---

## Analytics Dashboard

Only basic analytics integration.

No custom dashboard.

---

## Search Engine

Only blog search.

No global site search.

---

## AI Features

No chatbot.

No AI assistant.

No semantic search.

No recommendation engine.

---

## E-commerce

No payments.

No subscriptions.

No digital products.

---

## Internationalization

English only.

---

## Portfolio Filtering

Simple category filtering only.

No advanced filtering.

---

## CMS Features

No draft preview.

No editorial workflow.

No version comparison UI.

---

## Animations

Use subtle animations only.

Avoid complex motion graphics.

---

# 7. Design Principles

The interface should feel:

- Minimal
- Spacious
- Editorial
- Premium
- Calm
- Timeless

Avoid:

- Dashboard appearance
- Excessive cards
- Heavy gradients
- Large shadows
- Visual clutter

Whitespace is a design feature.

---

# 8. Future Roadmap (Post MVP)

Phase 2

- Newsletter
- RSS
- Global Search
- Reading Progress
- Tags
- Related Posts

Phase 3

- Products
- Developer Resources
- Chrome Extensions
- SaaS Showcase

Phase 4

- AI Search
- Knowledge Graph
- Interactive Architecture Diagrams
- Public API

Everything outside the MVP requires explicit approval before implementation.
