# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HIKARI Tech — a Costa Rican technology consulting company landing page. All UI content is in Spanish (es_CR). Built with Next.js 16 (App Router), React 19.2, TypeScript, and Tailwind CSS v4.

## Commands

```bash
pnpm dev          # Dev server (Turbopack is default in Next.js 16)
pnpm build        # Production build (Turbopack is default in Next.js 16)
pnpm start        # Start production server
pnpm lint         # ESLint via CLI (next/core-web-vitals + next/typescript)
```

Package manager: **pnpm 10.15.1** (do not use npm or yarn).

## Architecture

**Single-page landing site** using Next.js App Router. The home page (`app/page.tsx`) composes section components in order:

Navbar → Hero → Issues → Solutions → WorkFlow → About → CTA (contact form) → Footer

### Key Directories

- `components/sections/` — Full-page sections (hero, navbar, cta, etc.)
- `components/ui/` — Reusable UI primitives (shadcn "new-york" style, Radix UI)
- `components/seo/` — SEO metadata, structured data (JSON-LD), analytics
- `components/providers/` — Theme provider (next-themes)
- `hooks/` — Custom hooks (`use-contact-form.ts` manages form with react-hook-form)
- `store/` — Zustand store (mobile menu state)
- `lib/` — Utilities (`cn()` helper), SEO config, Zod validation schemas
- `fonts/` — Poppins (serif) and Inter (sans) font configuration

### Import Aliases

`@/*` maps to the project root (e.g., `@/components/ui/button`).

## Styling

- **Tailwind CSS v4** with `@tailwindcss/postcss`
- **OKLch color space** for theming — primary orange: `oklch(0.646 0.222 41.116)` (#F46530)
- Dark/light mode via `next-themes` with CSS custom properties in `app/globals.css`
- Component variants use `class-variance-authority`; class merging via `clsx` + `tailwind-merge` (the `cn()` utility)

## Patterns to Follow

- **Server Components by default** — only add `"use client"` when interactivity is needed
- **Dynamic imports** for heavy client components (Three.js `CodeNodes`, `StarsBackground`) to avoid SSR issues
- **Hydration safety** — use `useMounted()` hook (from `@/hooks/use-mounted`) which uses `useSyncExternalStore` for hydration-safe client detection
- **Form handling** — react-hook-form + Zod validation, submits to GetForm API via `NEXT_PUBLIC_GETFORM_URL` env var
- **3D graphics** — Three.js via `@react-three/fiber` and `@react-three/drei`, always dynamically imported

## Environment Variables

- `NEXT_PUBLIC_GETFORM_URL` — Contact form submission endpoint (required for CTA form)
