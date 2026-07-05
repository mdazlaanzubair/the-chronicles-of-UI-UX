# Design System

**Project:** Muhammad Azlaan Zubair Portfolio & Engineering Hub

This document defines the visual language of the website.

Every UI decision must follow these rules.

If a generated design conflicts with this document, this document takes precedence.

---

# 1. Design Philosophy

The website should communicate:

- Engineering Excellence
- Technical Credibility
- Calm Confidence
- Simplicity
- Timelessness

The website should feel closer to an editorial publication than a SaaS dashboard.

Think:

- premium architecture portfolio
- modern editorial magazine
- minimalist design book

Not:

- startup landing page
- admin dashboard
- crypto website
- AI marketing page
- generic developer portfolio
- outdated tech showcase website
- entry level developer portfolio

---

# 2. Core Design Principles

Always prioritize:

- whitespace
- typography
- hierarchy
- readability
- consistency

Avoid visual decoration unless it improves usability.

Every element must have a purpose.

---

# 3. Layout

The application uses a two-panel layout.

```text
┌──────────────────┬──────────────────────────────┐
│                  │                              │
│                  │                              │
│                  │                              │
│  Fixed Left Pane │   Scrollable Right Content   │
│                  │                              │
│                  │                              │
│                  │                              │
└──────────────────┴──────────────────────────────┘
```

Desktop:

- Fixed left sidebar
- Scrollable right content

Mobile:

- Single-column layout
- Sidebar collapses into top overlay navigation
- Navigation menu slides out from the left just like mobile app
- And it'll act as overlay for Content, when expanded content should fade out slightly

---

# 4. Left Panel

The left panel remains visible across all pages.

Contains:

- Profile image
- Name
- Professional title
- Short positioning statement
- Primary CTA
- Secondary CTA
- Navigation
- Social links
- Theme toggle
- Availability status

Details of the Left Panel:

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

Do not place page-specific content inside the left panel.

---

# 5. Right Panel

The right panel contains all page content.

Each page should follow the same structure:

```text
Page Title

Short Introduction

Primary Content

Supporting Sections

Call to Action
```

Details of the Right Panel:

- Right Column ( ~70% width )

  This section is the in-page linked scrollable section and directly linked to the navigation links in the left column
  - Writings ( latest 4 blogs )
  - Work ( latest 2 projects )
  - Case Studies ( latest 2 case studies )
  - Publications ( latest 2 publications )
  - Copyright info

Do not mix unrelated sections.

Maintain generous spacing between content blocks.

---

# 6. Spacing System

Use an Shad CN library design system to define spacing scale. Shad CN's spacing system is based on 4px increments.

Prefer larger spacing.

Never compress content to fit more on screen.

Whitespace improves readability.

---

# 7. Grid

Maximum content width:

```
1200px
```

Reading width:

```
700–760px
```

Never allow long text to span the full screen.

---

# 8. Typography

Typography is the primary visual element. And use SEO friendly tags that improves readability. Not only use shad CN library design system to define typography scale.

Hierarchy:

```text
Display

Heading 1

Heading 2

Heading 3

Body

Caption
```

Guidelines:

- large headings
- generous line height
- comfortable reading width
- strong visual hierarchy

Avoid excessive font weights.

---

# 9. Color Philosophy

The interface should communicate confidence through restraint.

Color exists to establish hierarchy, define interaction states, and reinforce the brand—not to decorate the interface.

The visual language should resemble premium developer tools, modern IDEs, and high-end portfolio websites where typography and spacing carry most of the visual weight.

---

## Design Characteristics

The color system should feel:

- dark
- understated
- premium
- technical
- calm
- minimal
- editorial
- timeless

It should avoid appearing:

- colorful
- playful
- trendy
- glossy
- corporate-blue
- futuristic
- gaming-inspired
- marketing-oriented

---

## Core Philosophy

The interface is built almost entirely from shades of black and charcoal.

Visual hierarchy comes from:

- typography
- whitespace
- layout
- subtle borders
- contrast
- motion

—not from multiple colors.

The accent color exists only to guide attention.

Users should remember the work—not the palette.

---

## Base Color Palette

The palette should consist of layered neutrals.

| Purpose              | Tone                      |
| -------------------- | ------------------------- |
| Primary Background   | Near-black                |
| Secondary Background | Charcoal black            |
| Elevated Surface     | Slightly lighter charcoal |
| Borders              | Very subtle gray          |
| Primary Text         | Soft white                |
| Secondary Text       | Muted gray                |
| Tertiary Text        | Low-contrast gray         |

Every surface should be distinguishable through small value differences rather than obvious color shifts.

---

## Accent Color

A single warm orange serves as the only brand accent.

It should communicate:

- interaction
- navigation
- active states
- emphasis

It should never dominate the interface.

Accent color should appear only for:

- active navigation items
- section numbers
- links
- arrows
- hover states
- focused controls
- small indicators
- primary CTA outlines

Never use the accent color as a large background fill.

The interface should remain predominantly monochromatic.

---

## Contrast Strategy

Contrast is created through brightness rather than saturation.

Examples:

- White → Primary content
- Light Gray → Secondary information
- Medium Gray → Metadata
- Dark Gray → Borders and dividers
- Orange → User attention

This creates a calm reading experience while maintaining accessibility.

---

## Section Hierarchy

Content sections should be separated using:

- thin divider lines
- generous vertical spacing
- typography scale
- numbered labels

Avoid colored cards or colored section backgrounds.

Each section should feel like part of a continuous editorial layout.

---

## Interactive Elements

Interactive components should use subtle feedback.

### Default

- Neutral text
- Transparent background
- Thin border when appropriate

### Hover

- Accent-colored text
- Accent arrow or indicator
- Slight brightness increase
- Smooth transition

### Active

- Accent-colored label
- Small orange indicator
- No heavy fills or glow effects

### Focus

- Thin accent outline
- Accessible focus ring
- Minimal visual noise

---

## Borders

Borders should be nearly invisible.

Use:

- 1px subtle gray lines
- low opacity separators
- understated outlines

Borders should organize content rather than frame it aggressively.

---

## Shadows

Avoid heavy shadows.

Use:

- soft elevation
- low-opacity shadows
- subtle depth

Depth should feel architectural rather than decorative.

---

## Gradients

Gradients should be avoided almost entirely.

If used, they should be:

- extremely subtle
- monochromatic
- nearly imperceptible

Never use:

- rainbow gradients
- neon gradients
- vibrant mesh gradients
- colorful glow effects

---

## Color Distribution

Approximate visual balance:

- **90–92%** Neutral blacks and grays
- **6–8%** White typography
- **1–2%** Brand orange

The accent color should remain rare enough that every appearance immediately attracts attention.

---

## Emotional Response

The interface should feel like:

- a premium engineering publication
- a carefully crafted design system
- an architectural portfolio
- a modern code editor
- a luxury product catalog

It should never resemble:

- a startup landing page
- a SaaS marketing website
- a social media profile
- a template-based portfolio
- a colorful dashboard

The overall impression should be one of precision, craftsmanship, and confidence, where the engineering work—not the interface—remains the focal point.

---

# 10. Borders & Radius

Use subtle borders.

Border radius:

```text
Small

Medium

Large
```

Never use exaggerated rounded corners.

Avoid "pill" designs unless required.

---

# 11. Shadows

Use minimal shadows.

Prefer:

- borders
- contrast
- spacing

instead of heavy elevation.

---

# 12. Cards

Cards exist only when they improve grouping.

Do not wrap every section inside a card.

Projects and blog previews may use cards.

Long-form pages should not.

---

# 13. Buttons

Primary

High emphasis.

Secondary

Medium emphasis.

Ghost

Low emphasis.

Never create more than three button styles.

---

# 14. Icons

Use:

Lucide React

Rules:

- consistent stroke width
- consistent size
- decorative only when useful

Never mix icon libraries.

---

# 15. Images

Images should support content.

Never use decorative stock photography.

Prefer:

- project screenshots
- architecture diagrams
- illustrations
- code previews

---

# 16. Motion

Motion should communicate state.

Allowed:

- fade
- slide
- scale
- hover transitions

Avoid:

- bouncing
- spinning
- exaggerated movement
- long animations

Animations should be subtle.

---

# 17. Components

Core reusable components:

- Button
- Card
- Section
- Container
- Navigation
- Footer
- Badge
- Tag
- Project Card
- Blog Card
- Publication Card
- Timeline
- CTA
- Search Bar

Do not create duplicate components.

---

# 18. Content Density

The interface should breathe.

Prefer:

more whitespace

fewer elements

clear hierarchy

Avoid:

dense dashboards

multiple columns of text

crowded sections

visual overload

---

# 19. Responsive Design

Desktop First

Then adapt for:

Tablet

Mobile

Never remove content on smaller screens.

Reflow it.

---

# 20. Accessibility

Minimum touch target:

```
44 × 44 px
```

Maintain:

- sufficient contrast
- keyboard navigation
- visible focus states
- semantic HTML

Accessibility is mandatory.

---

# 21. Consistency Rules

Every page should feel like part of the same product.

Reuse:

- spacing
- typography
- layouts
- components
- colors

Avoid creating one-off designs.

---

# 22. Design Checklist

Before completing any UI implementation verify:

✓ Layout follows two-panel architecture

✓ Left panel remains fixed

✓ Right panel scrolls independently

✓ Uses approved spacing scale

✓ Typography follows hierarchy

✓ Components are reused

✓ Whitespace is generous

✓ Responsive on all devices

✓ Accessible

✓ Minimal visual noise

✓ Editorial aesthetic maintained

If any item fails, revise the implementation before considering it complete.
