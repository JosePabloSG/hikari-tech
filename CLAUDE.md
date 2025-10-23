# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HIKARI Tech is a Next.js 15 marketing website for a Costa Rican technology services company. The site is built with:
- **Next.js 15.5.0** (App Router) with Turbopack
- **React 19.1.0**
- **TypeScript 5**
- **Tailwind CSS v4**
- **shadcn/ui** components (New York style)
- **pnpm** as the package manager

Target market: Costa Rican businesses seeking web development, mobile apps, automation, and IT consulting.

## Development Commands

### Core Development
```bash
pnpm dev           # Start dev server with Turbopack (default: http://localhost:3000)
pnpm build         # Production build with Turbopack
pnpm start         # Start production server
pnpm lint          # Run ESLint
```

### Package Manager
**Always use `pnpm`** - this project is locked to pnpm@10.15.1+. Do not use npm or yarn.

## Architecture

### App Structure (Next.js App Router)
- **`app/`** - Next.js App Router pages
  - `layout.tsx` - Root layout with SEO metadata, theme provider, structured data, font preloading
  - `page.tsx` - Homepage with section-based architecture
  - `sitemap.ts` - Dynamic sitemap generation
  - `globals.css` - Tailwind CSS v4 configuration with HIKARI brand colors

### Component Organization
Components are organized by purpose:

- **`components/sections/`** - Page sections (Hero, Issues, Solutions, WorkFlow, CTA, Footer, Navbar)
  - `shared/` - Reusable section components (FeatureCard, SectionHeader, GridPattern)
- **`components/ui/`** - shadcn/ui components and custom UI elements
- **`components/seo/`** - SEO utilities (metadata generation, structured data, analytics)
- **`components/providers/`** - React context providers (ThemeProvider)

### State Management
- **Zustand** for global state (`store/use-store.ts`)
- Currently manages: mobile menu state
- Pattern: Simple, typed stores with explicit actions

### Styling Approach
- **Tailwind CSS v4** with custom color tokens in CSS variables (oklch color space)
- **Brand colors**:
  - Primary: HIKARI Orange (`oklch(0.646 0.222 41.116)` / #F46530)
  - Secondary: Warm Yellow accent (`oklch(0.828 0.189 84.429)`)
  - Dark: Dark Gray (`oklch(0.205 0 0)` / #2A2E30)
- Custom variants defined in `globals.css` using `@custom-variant`
- Uses `next-themes` for light/dark mode

### SEO Implementation
This is an **SEO-first** site with comprehensive optimization:

- **Metadata**: Centralized in `lib/seo-config.ts` with `generateSEOMetadata()` utility
- **Structured Data**: Organization, Website, and Service schemas auto-injected in layout
- **Technical SEO**: XML sitemap (`app/sitemap.ts`), robots.txt, canonical URLs
- **Performance**: Image optimization, font preloading, Core Web Vitals monitoring
- **Target Keywords**: Costa Rica-focused (Spanish language, local business targeting)

See `SEO-README.md` for full SEO implementation details.

### Font Strategy
- **Poppins** (primary) and **Inter** (secondary) from local files
- Preloaded in `app/layout.tsx` for optimal performance
- Defined in `fonts/fonts.ts` using Next.js font optimization

### Path Aliases
Configured in `tsconfig.json`:
```typescript
"@/*" // Maps to project root
```

shadcn/ui aliases (from `components.json`):
```typescript
"@/components"  // components/
"@/ui"          // components/ui/
"@/lib"         // lib/
"@/hooks"       // hooks/
```

## Key Technical Patterns

### Component Pattern (Section-Based)
Sections are self-contained page components following this pattern:
```typescript
// Export from components/sections/index.ts for clean imports
import { Hero, Issues, Solutions } from "@/components/sections";
```

### SEO Metadata Pattern
```typescript
import { generateSEOMetadata } from "@/components/seo/seo";

export const metadata = generateSEOMetadata({
  title: "Page Title",
  description: "Description...",
  keywords: ["keyword1", "keyword2"],
  url: "https://hikaricr.tech/page",
});
```

### Zustand Store Pattern
```typescript
export const useStore = create<StoreState>((set) => ({
  value: initialValue,
  setValue: (v) => set({ value: v }),
  toggleValue: () => set((s) => ({ value: !s.value })),
}));
```

### Theme Toggle
Uses `next-themes` with system preference detection. Theme toggle component in `components/ui/theme-toggle.tsx`.

## Project-Specific Context

### Language & Localization
- **Primary language**: Spanish (es)
- **Target region**: Costa Rica
- All user-facing content should be in Spanish
- Accessibility text (ARIA labels, skip links) in Spanish

### Brand Guidelines
- Company name: "HIKARI Tech"
- Tagline: "Soluciones Tecnológicas para Empresas en Costa Rica"
- Visual style: Modern, minimalist, professional
- Uses 3D elements with React Three Fiber (`@react-three/fiber`, `@react-three/drei`)

### Accessibility Requirements
- Skip links implemented (keyboard navigation)
- Semantic HTML structure
- ARIA labels in Spanish
- WCAG 2.1 compliance target
- Mobile-first responsive design

### Form Validation
- Uses `react-hook-form` + `zod` for form handling
- Validation schemas in `lib/validations/`
- Form components use shadcn/ui form primitives

## Custom Agents

This repository has custom Claude Code agents in `.claude/agents/`:

### frontend-developer
Specialized in React, shadcn/ui, Tailwind CSS, state management, and accessibility. Use for UI component work, performance optimization, and frontend architecture tasks.

### ux-specialist
Expert in UX/UI design with Nielsen's heuristics, cognitive psychology, WCAG compliance, and modern (2025) design patterns. Use for design decisions, accessibility reviews, and user experience improvements.

Invoke agents proactively when their expertise applies to the task.

## Dependencies to Note

### Core Framework
- `next@15.5.0` - Latest Next.js with App Router
- `react@19.1.0` / `react-dom@19.1.0` - React 19

### UI & Styling
- `tailwindcss@^4` - Latest Tailwind CSS v4
- `shadcn@^3.4.0` - shadcn/ui CLI
- `@radix-ui/*` - Headless UI primitives
- `lucide-react` - Icon library
- `framer-motion@^12.23.12` - Animation library
- `next-themes@^0.4.4` - Theme management

### 3D Graphics
- `three@^0.180.0`
- `@react-three/fiber@^9.3.0`
- `@react-three/drei@^10.7.6`

### State & Forms
- `zustand@^5.0.8` - State management
- `react-hook-form@^7.62.0` - Form handling
- `zod@^4.0.17` - Schema validation

### Utilities
- `clsx` + `tailwind-merge` - Conditional class names
- `class-variance-authority` - Variant-based components
- `web-vitals@^5.1.0` - Performance monitoring

## Important Notes

### Turbopack Usage
Both `dev` and `build` scripts use `--turbopack` flag. This is intentional for faster builds and HMR.

### shadcn/ui Configuration
- **Style**: New York variant
- **Base color**: Neutral
- **CSS Variables**: Enabled (see `app/globals.css` for custom brand tokens)
- **Icon library**: lucide-react
- **RSC**: Enabled (React Server Components)

When adding new shadcn components, use the shadcn MCP or CLI with these settings.

### Dark Mode Implementation
Theme switching is handled via `next-themes` with CSS variables. Colors are defined in oklch color space for better perceptual uniformity. Add new color tokens to both `:root` and `.dark` selectors in `globals.css`.

### Performance Considerations
- Images should use Next.js `<Image>` component
- Lazy load below-the-fold sections with `next/dynamic`
- Keep Core Web Vitals in mind (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- Font files are self-hosted and preloaded

### Git Workflow
Main branch: `main` (use for PRs and deployments)

### Environment Variables
Check `.env` for configuration (not committed to repo). Environment-specific settings should use Next.js environment variable conventions (`NEXT_PUBLIC_` prefix for client-side vars).
