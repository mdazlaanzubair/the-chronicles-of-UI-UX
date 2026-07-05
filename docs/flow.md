# User Flow & Information Architecture

**Project:** Muhammad Azlaan Zubair Portfolio & Engineering Hub  
**Version:** MVP v1.0  
**Status:** Approved

---

# 1. Purpose

This document defines:

- User journeys
- Information architecture
- Navigation structure
- Core application flows
- CMS relationships
- Data model

It acts as the blueprint for application navigation before implementation.

---

# 2. Navigation Structure

```text
Home
│
├── Work
│   ├── Project Details
│   └── External Links
│
├── Case Studies
│   ├── Case Study Listing
│   └── Case Study Details
│
├── Publications
│   └── Publication Details
│
├── Writing
│   ├── Blog Listing
│   ├── Categories
│   ├── Tags
│   └── Blog Details
```

Navigation must remain consistent across the application.

---

# 3. Desktop Layout

```text
┌──────────────────────┬────────────────────────────────────────────┐
│                      │                                            │
│                      │                                            │
│   Fixed Left Panel   │        Scrollable Content Area             │
│                      │                                            │
│                      │                                            │
└──────────────────────┴────────────────────────────────────────────┘
```

Left Panel

- Profile
- Positioning
- Navigation
- Social Links
- CTA
- Theme Toggle

Right Panel

- Page Content
- Lists
- Detail Pages
- Footer

---

# 4. Mobile Layout

```text
Header

↓

Navigation Drawer

↓

Page Content

↓

Footer
```

The fixed sidebar becomes a collapsible navigation.

---

# 5. Primary User Journey

```text
Landing

↓

Read Introduction

↓

Browse Work

↓

Open Project

↓

Read Case Study

↓

Read Blog

↓

Learn About

↓

Contact
```

The journey should naturally build trust through evidence rather than persuasion.

---

# 6. Home Page Flow

```text
Hero

↓

Selected Projects

↓

Featured Case Studies

↓

Recent Publications

↓

Latest Writing

↓

Footer CTA
```

Each section should preview content and link to a dedicated page.

---

# 7. Work Flow

```text
Work Listing

↓

Select Project

↓

Project Overview

↓

Architecture

↓

Engineering Decisions

↓

Challenges

↓

Results

↓

External Links
```

Each project page should emphasize engineering decisions over marketing descriptions.

---

# 8. Case Study Flow

```text
Case Study List

↓

Select Case Study

↓

Problem

↓

Research

↓

Architecture

↓

Implementation

↓

Trade-offs

↓

Lessons Learned
```

---

# 9. Writing Flow

```text
Blog Listing

↓

Filter by Category

↓

Select Article

↓

Read Article

↓

Related Articles

↓

Next Article
```

The reading experience should be distraction-free.

---

# 10. Publications Flow

```text
Publication List

↓

Publication Details

↓

Abstract

↓

Authors

↓

Journal

↓

External Publication
```

---

# 11. About Flow

```text
Biography

↓

Experience

↓

Skills

↓

Research Interests

↓

Career Timeline
```

---

# 12. Contact Flow

```text
Contact Page

↓

Fill Form

↓

Validation

↓

Submission

↓

Success Message
```

Alternative contact methods:

- Email
- LinkedIn
- GitHub

---

# 13. Content Relationships

```text
Category
    │
    ├──────── Blog Posts

Tags
    │
    ├──────── Blog Posts

Projects
    │
    ├──────── Case Studies

Case Studies
    │
    ├──────── Blog Posts

Publications
```

Content should be connected rather than isolated.

---

# 14. CMS Content Model

## Project

```text
Project

id

title

slug

summary

coverImage

technologies[]

architecture

challenge

solution

results

repositoryUrl

liveUrl

featured

publishedAt
```

---

## Blog Post

```text
BlogPost

id

title

slug

excerpt

coverImage

content

category

tags[]

readingTime

featured

publishedAt
```

---

## Category

```text
Category

id

name

slug
```

---

## Tag

```text
Tag

id

name

slug
```

---

## Case Study

```text
CaseStudy

id

title

slug

summary

problem

research

architecture

implementation

tradeoffs

lessons

relatedProject
```

---

## Publication

```text
Publication

id

title

authors

journal

year

abstract

doi

externalUrl
```

---

# 15. Relational Structure

```text
Category

1
│
│
∞
Blog Posts

────────────────────────

Tag

∞
│
│
∞
Blog Posts

────────────────────────

Project

1
│
│
1
Case Study
```

No authentication or user tables are required for the MVP.

---

# 16. URL Structure

```text
/

/

/work

/work/[slug]

/case-studies

/case-studies/[slug]

/writing

/writing/[slug]

/publications

/publications/[slug]

/about

/contact
```

Use human-readable slugs throughout.

---

# 17. Error States

Every route must support:

- Loading
- Empty
- Error
- Success
- Not Found (404)

Never assume content exists.

---

# 18. Future Expansion

The architecture should support future additions without restructuring navigation.

Potential future routes:

```text
/newsletter

/products

/resources

/talks

/open-source

/uses

/search
```

These routes are intentionally excluded from the MVP but should integrate naturally into the existing information architecture.

---

# 19. Navigation Principles

Navigation should be:

- Predictable
- Minimal
- Consistent
- Accessible

Avoid:

- Deep nesting
- Hidden navigation
- Multiple navigation patterns
- Duplicate routes

The user's cognitive load should remain low throughout the experience.

---

# 20. Architecture Summary

```text
Landing
    │
    ▼
Home
    │
    ├──────── Work
    │             │
    │             └────── Project Details
    │
    ├──────── Case Studies
    │             │
    │             └────── Case Study Details
    │
    ├──────── Writing
    │             │
    │             └────── Blog Details
    │
    ├──────── Publications
    │             │
    │             └────── Publication Details
    │
    ├──────── About
    │
    └──────── Contact
```

The application should guide visitors from **identity → evidence → expertise → trust → contact**, reinforcing the brand strategy of engineering-first credibility rather than promotional messaging.
