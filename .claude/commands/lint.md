# Lint Command

Run ESLint on Node.js projects (Next.js, NestJS, React, TypeScript, etc.)

## Instructions

1. Check `package.json` for existing lint scripts and identify project type
2. Run the appropriate linting command:
   - If `"lint"` script exists: `npm run lint`
   - Next.js: `npx next lint`
   - NestJS: `npx eslint "{src,apps,libs,test}/**/*.ts"`
   - Default: `npx eslint . --ext .js,.jsx,.ts,.tsx`
3. Display errors/warnings with file locations and rule names
4. Summarize results: total errors, warnings, files checked
5. If fixable issues exist, ask: "Run with --fix to auto-correct?"
6. If ESLint not configured, offer to set it up

## Auto-fix variant

Add `--fix` flag to the detected command to automatically resolve fixable issues.

## Setup (if needed)

- Next.js: Run `npx next lint` (ESLint included)
- Others: Install `eslint` + framework plugins, create config, add scripts to `package.json`
