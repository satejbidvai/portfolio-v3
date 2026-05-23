---
name: Satej Bidvai
description: Personal portfolio and technical blog
colors:
  ink: "#09090b"
  paper: "#ffffff"
  muted: "#09090b99"
  accent: "#09090bd9"
  border-subtle: "#09090b26"
  border-ring: "#09090b33"
  dark-paper: "#09090b"
  dark-ink: "#f9f9f9"
  dark-muted: "#f9f9f9b3"
  dark-accent: "#f9f9f9e6"
  dark-border-subtle: "#f9f9f94d"
  dark-border-ring: "#f9f9f980"
typography:
  display:
    fontFamily: "Geist Variable, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
  headline:
    fontFamily: "Geist Variable, system-ui, -apple-system, sans-serif"
    fontSize: "clamp(1.125rem, 2vw, 1.25rem)"
    fontWeight: 500
    lineHeight: 1.4
  body:
    fontFamily: "Geist Variable, system-ui, -apple-system, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Geist Variable, system-ui, -apple-system, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "48px"
components:
  blog-card:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
  blog-card-hover:
    backgroundColor: "{colors.paper}"
  link-muted:
    textColor: "{colors.muted}"
  link-muted-hover:
    textColor: "{colors.ink}"
  date-badge:
    backgroundColor: "{colors.border-subtle}"
    textColor: "{colors.muted}"
    rounded: "{rounded.sm}"
    padding: "4px 10px"
---

# Design System: Satej Bidvai

## 1. Overview

**Creative North Star: "The Typeset Page"**

A single sheet of paper, set in good type, with nothing on it that doesn't need to be there. The site is closer to a well-typeset book page than a web application. Every pixel of chrome is earned; the default state of any element is "absent." The reading experience is the entire product.

The system rejects spectacle, decoration, and density. No gradient meshes, no particle effects, no project-card grids, no testimonial carousels. The visual hierarchy is built entirely from type weight, opacity, and whitespace. Color is structural (foreground, background, border), never decorative.

**Key Characteristics:**
- Monochrome palette with opacity-based hierarchy (no accent hue)
- Single typeface (Geist Variable) carrying all roles through weight and size alone
- Narrow reading column (max 48rem) with generous vertical rhythm
- Dark and light themes as true inversions, not separate palettes
- Motion restricted to state feedback; no choreography

## 2. Colors

A deliberately achromatic palette. Color is a structural tool for establishing hierarchy through opacity, not a decorative element.

### Primary

- **Ink** (`#09090b`): All foreground text in light mode, background surface in dark mode. Near-black with a faint blue-zinc undertone that prevents flatness under warm ambient light.

### Neutral

- **Paper** (`#ffffff`): Light mode background. True white, no tint; the ink carries the warmth.
- **Muted Ink** (`#09090b` at 60% opacity): Secondary text, metadata, timestamps, social links. The primary hierarchy tool.
- **Accent Ink** (`#09090b` at 85% opacity): Blockquote text, emphasized-but-not-primary content.
- **Whisper Border** (`#09090b` at 15%): Card borders, horizontal rules, structural dividers. Present but barely.
- **Ring** (`#09090b` at 20%): Focus outlines, interactive affordances.

### Dark Mode

True inversion: `#f9f9f9` replaces ink, `#09090b` replaces paper. Opacity ratios shift slightly upward (muted at 70%, border at 30%) to compensate for dark-on-light contrast perception.

### Named Rules

**The No-Hue Rule.** No accent color. No brand hue. Hierarchy comes from opacity and weight, never from a colored element. If a design decision requires "a splash of color," the decision is wrong; rethink the hierarchy.

**The Opacity-as-Hierarchy Rule.** Every text color is the same hue at a different opacity. 100% is primary, 85% is accent, 60% is muted. This constraint forces hierarchy through typography, not through color variety.

## 3. Typography

**Display Font:** Geist Variable (with size-adjusted system-ui fallback)
**Body Font:** Geist Variable (same family)
**Mono Font:** System default (`font-mono`)

**Character:** Geist is a modern sans-serif from Vercel with wide apertures and geometric clarity. Using a single family for every role forces hierarchy through weight and scale contrast alone, which matches the monochrome palette philosophy: fewer instruments, played precisely.

### Hierarchy

- **Display** (700, `clamp(1.875rem, 4vw, 3rem)`, line-height 1.1): Blog post titles only. The largest element on any page. `text-pretty` for balanced line breaks.
- **Headline** (500, `clamp(1.125rem, 2vw, 1.25rem)`, line-height 1.4): Section headings on the homepage ("Blog", "Get in Touch"), blog card titles.
- **Body** (400, 1rem, line-height 1.75): Prose paragraphs, the homepage intro line, blockquote reflections. Line length capped by the `max-w-3xl` container (~48rem).
- **Label** (400, 0.875rem, line-height 1.5): Profile metadata (location, company, education), timestamps, navigation links, social links.

### Named Rules

**The One-Family Rule.** Geist Variable is the only typeface. No serif for "editorial feel," no mono for "technical cred." Personality comes from weight and spacing, not from mixing families.

**The Weight-Gap Rule.** Adjacent hierarchy levels differ by at least one weight step (400 vs 500, 500 vs 700). Same-weight adjacent levels are forbidden; they collapse the hierarchy.

## 4. Elevation

This system is flat. No box shadows exist anywhere. Depth is conveyed through two mechanisms: opacity-based borders (the card border at 15% opacity implies a surface without lifting it) and the theme toggle's View Transitions clip-path animation (which creates a sense of spatial reveal without elevation).

### Named Rules

**The No-Shadow Rule.** Shadows are prohibited. If an element needs visual separation from its background, use a border at 15% opacity or whitespace. Never a shadow.

## 5. Components

### Links

- **Shape:** Inline text, no background or border
- **Default:** Muted ink (`text-muted-foreground`); secondary by default, never demanding attention
- **Hover:** Full ink (`text-foreground`); the simplest possible state change
- **Transition:** Color, 150ms default Tailwind timing
- **External links in prose:** Underlined with `decoration-border` (the 15% opacity border color), hover lightens to `decoration-border/50`

### Blog Cards

- **Shape:** Gently rounded (8px radius)
- **Border:** 1px solid at ~6% opacity (`border-border/40`), stepping to ~9% on hover (`border-border/60`)
- **Background:** Transparent at rest, faint paper tint on hover (`bg-background/50`)
- **Layout:** Flex row with title (headline weight) and date badge (right-aligned)
- **Internal Padding:** 12px vertical, 16px horizontal
- **Date Badge:** Muted text on a 3% opacity ink background, small rounded (4px), fixed width (96px), centered text
- **Transition:** Border color + background, all properties

### Navigation (Site Header)

- **Brand mark:** "Satej Bidvai" in bold display weight (text-2xl to text-3xl), full ink color
- **Hover:** Opacity drops to 80% (not a color shift)
- **Divider:** 56px-wide horizontal rule, 1px tall, border color. Separates header from content.
- **Theme Toggle:** Ghost button, no border, no background. Sun/moon icons rotate 180deg on transition (300ms ease-out). Click triggers a View Transitions circle-expand animation from the button's center (500ms ease-in-out).

### Profile Metadata

- **Layout:** Horizontal flex row (stacks vertically on mobile), label-sized text in muted ink
- **Icons:** 16px stroke icons at 40% ink opacity, paired with text. Subtle enough to scan past, present enough to parse the structure.

### Prose (Blog Posts)

- **Container:** Full width within the 48rem column, using `@tailwindcss/typography` prose classes
- **Dark mode:** `prose-invert` for automatic token swap
- **Headings:** Anchor-linked with a chain-link icon on hover (inline, not a margin glyph)
- **Code blocks:** Shiki with `material-theme-darker` theme
- **Inline code:** Custom styled (not default prose code)
- **Images:** Rounded (8px), with a subtle 1px border overlay via pseudo-element

### Hint (Glossary Popover)

- **Trigger:** Inline text with dashed underline, cursor help
- **Popover:** Native HTML `popover` API with CSS anchor positioning
- **Animation:** Opacity + translateY micro-entrance using `@starting-style` and `allow-discrete`

## 6. Do's and Don'ts

### Do:

- **Do** build hierarchy exclusively through type weight, scale, and opacity. These three tools handle every visual distinction.
- **Do** use the narrow column (`max-w-3xl` / ~48rem) for all content. The reading measure is the design.
- **Do** respect the opacity scale: 100% primary, 85% accent, 60% muted, 15% border. Deviate only with a documented reason.
- **Do** support both light and dark themes as true inversions. Every new element must work in both without special-casing.
- **Do** respect `prefers-reduced-motion`. Every animation has a reduced-motion fallback that removes it entirely.
- **Do** use Geist Variable for all text. No secondary typefaces.
- **Do** use `text-pretty` or `text-balance` on display-level headings to prevent orphans.

### Don't:

- **Don't** add an accent color. The monochrome palette is a deliberate constraint, not a gap to fill. (PRODUCT.md: "show taste through restraint")
- **Don't** use shadows or elevation of any kind. Separation comes from borders and whitespace.
- **Don't** add particle effects, 3D elements, scroll-hijacking animations, or any spectacle. (PRODUCT.md: "spectacle that says 'look at me' instead of 'read this'")
- **Don't** use the template-portfolio pattern: colorful hero, icon-grid skills section, testimonial carousel, contact form. (PRODUCT.md anti-reference)
- **Don't** use gradient meshes, glassmorphism, neon-on-dark, or stacked identical card grids. (PRODUCT.md anti-reference)
- **Don't** make the blog look like a documentation site. It's a personal writing surface, not an API reference.
- **Don't** add illustrations or decorative SVGs. The only graphics are functional icons (16px, stroked, muted).
- **Don't** animate layout properties. Motion is opacity, transform, and clip-path only.
- **Don't** use `border-left` greater than 1px as a colored accent stripe on any element.
- **Don't** use gradient text (`background-clip: text`).
