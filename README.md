# Developer Portfolio

Front-end implementation of the "Developer Portfolio" Figma design
(`bcw9nWXLuBLSvE19pi8F6k`, node `7:9`), built with **Next.js (App
Router) + TypeScript + Tailwind CSS**, componentized with **Storybook**.

## Getting started

```bash
npm install
npm run dev       # http://localhost:3000
npm run storybook # http://localhost:6006
```

Other scripts:

```bash
npm run build         # production build
npm run start         # run the production build
npm run typecheck     # tsc --noEmit
npm run lint           # next lint
npm run build-storybook
```

> This project was authored in a sandboxed environment with no network
> access, so `npm install` / `next build` / `tsc` could not actually be
> executed here. The code was written and manually reviewed for type
> and import correctness, but please run `npm run typecheck` and
> `npm run build` as your first step locally and report back if
> anything surfaces.

## Project structure

```
src/
  app/                  Next.js App Router entry (layout, page, globals.css)
  components/
    ui/                  Design-system primitives (Button, TextField, TextArea,
                          GradientText, SectionHeading, Icon)
    layout/               Header, Footer
  features/               One folder per page section
    hero/
    about/
    work/                  + ProjectCard
    contact/                 + ContactForm (client), ContactInfo
  lib/                     Small shared utilities (cn helper)
  hooks/                   (reserved for future client-side hooks)
  types/                   Shared TypeScript types
  constants/               Site copy & navigation data
public/
  images/                  Static image assets
.storybook/                Storybook configuration
```

Server Components are the default everywhere; only `Header` (mobile
menu state) and `ContactForm` (form state/validation) are Client
Components (`"use client"`).

## Design tokens

All tokens are centralized in `tailwind.config.ts` and were extracted
from the Figma file's own **Design System** page (colors, typography,
buttons, form elements) rather than approximated:

- **Colors** - `primary.magenta #DC00D3`, `primary.cyan #0CFFFF`,
  `primary.dark #100425` (page background), plus neutral/accent tokens
  for text, field backgrounds, focus/error states.
- **Typography** - Josefin Sans (headings/body) and Inter (nav),
  loaded via `next/font/google`. `text-h1` / `text-h2` / `text-h3` /
  `text-body-lg` / `text-body-sm` / `text-label` map to the documented
  type scale.
- **Gradients** - `bg-brand-gradient` (cyan to magenta, text/buttons) and
  `bg-button-gradient` (purple to cyan CTA button), both copied from the
  exact `linear-gradient(...)` values in the Figma file.
- **Radius** - `rounded-card` (14px) for cards/inputs, `rounded-full`
  for pill buttons.

## Known simplifications

Because this environment has no network access, a few purely visual
assets could not be exported from Figma and downloaded into the
project. They're implemented as close CSS/SVG approximations instead
of pixel-exact traces, and are called out in code comments at each
usage site:

- **Hero portrait photo** (`public/images/hero-portrait.svg`) - a
  gradient placeholder standing in for the real cut-out photograph.
- **Hero background grid lines** - approximated with a CSS
  linear-gradient grid instead of tracing the individual line vectors.
- **About "Skills" illustration** - the Figma group is a large,
  purely decorative vector composition (no text/icon labels), replaced
  with a simplified gradient graphic (`about-illustration.svg`).
- **Project card mockups** (`public/images/project-*.svg`) - gradient
  "browser window" placeholders standing in for the real project
  screenshots/photos used in the design.

To reach full pixel fidelity, export the corresponding assets from
Figma (right-click the layer -> Export) and drop them into
`public/images/`, replacing the placeholder file names already wired
up in the components.

All **copy** (headings, paragraphs, project titles/descriptions,
contact details, footer text) was extracted verbatim from the Figma
file - nothing was invented.

## Update: Hero photo, Tech Stack & Showcase preview

Added on top of the initial Figma implementation, based on user-provided
reference images:

- **Hero** (`src/features/hero/Hero.tsx`) - now uses the user's own
  uploaded photo (`public/images/profile-photo.webp`, already supplied
  with a transparent background) in a responsive two-column layout:
  copy on the left, photo with a brand-gradient glow on the right on
  `lg+` screens, stacked and centered below that. The existing dot-grid
  background pattern and button styling were kept unchanged.
- **Tech Stack** (`src/features/about/TechStack`) - a new showcase
  section inside `About`, rendering a responsive grid of `TechCard`
  (`src/components/ui/TechCard`) items for HTML, CSS, JavaScript,
  TypeScript, React, Next.js, Tailwind CSS, Git & GitHub, REST API,
  Responsive Design, React Query and UI/UX Fundamentals. Icons are a
  small hand-authored set (`src/components/ui/Icon/techIcons.tsx`) -
  simplified, single-style glyphs rather than traced official brand
  logos, since this environment has no network access to fetch the
  real logo assets. Swap in official SVGs there if you'd like exact
  brand marks.
- **Showcase preview** (`src/features/about/ShowcasePreview`) - a
  recreated (not screenshotted) version of the browser-chrome panel
  glimpsed at the bottom of the reference graphic, built with a new
  reusable `BrowserWindow` component (`src/components/ui/BrowserWindow`)
  and a small syntax-highlighted code sample.

As before, `npm install` / `npm run typecheck` / `npm run build` could
not be executed in this sandbox (no network access) - please run them
locally as a first check.

## Update: Parallax migrated to GSAP + ScrollTrigger

The scroll-parallax layer (`src/components/ui/Parallax`) now uses
**GSAP** (`gsap` + `gsap/ScrollTrigger`) instead of the earlier
hand-rolled scroll/rAF hook. The public API is unchanged - every call
site (`Hero`, `About`, `TechStack`, `ProjectCard`) still just wraps a
decorative element in `<Parallax speed={...}>`, so nothing in those
files changed except updating the `speed` numbers to the new unit
(pixels of drift across the element's scroll-through, instead of the
old distance-from-center multiplier).

Implementation notes:

- Each `Parallax` instance creates its own `gsap.context()`, and the
  returned `ctx.revert()` is called in the `useEffect` cleanup - this
  removes both the tween **and** its `ScrollTrigger` instance on
  unmount, so nothing leaks across route changes or hot-reloads.
- `scrollTrigger: { scrub: 1 }` ties movement to scroll position with
  a small smoothing lag (not `scrub: true`) for a premium feel;
  normal browser scrolling is completely untouched - there is no
  scroll-jacking.
- `prefers-reduced-motion` is checked before the tween is even
  created (the effect returns early), backed by the same
  `motion-reduce:!transform-none` CSS class as before.
- Only the Y axis is ever animated, so there's still no horizontal
  overflow risk.

**Important - could not be verified in this sandbox:** this
environment has no network access, so `gsap` could not actually be
installed here, and `npm run typecheck` currently fails with exactly
two "Cannot find module 'gsap'" errors (nothing else - removing those
two lines mentally, the rest of the codebase still type-checks and
lints clean, which was confirmed before this change). Please run:

```bash
npm install    # pulls in gsap (added to package.json)
npm run typecheck
npm run dev
```

as your first step and let me know if anything surfaces - the GSAP
API used here (`gsap.context`, `ScrollTrigger`, `scrub`) has been
stable across the 3.x line, but I'd rather you verify it for real
than take my word for it.
