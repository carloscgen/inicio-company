# Agent Instructions — inicio-company

React 19 + Vite 7 + TypeScript 5.9 + Tailwind v4 + shadcn/ui (new-york style) project. Currently a blank-slate starter being built into a company landing page/site.

## Commands

| Task | Command |
|------|---------|
| Dev server | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Preview build | `npm run preview` |
| Add shadcn component | `npx shadcn add <component>` |

No test runner is configured.

## Project Structure

```
src/
  App.tsx               # Root component (entry point)
  index.css             # Global styles + design tokens (CSS custom properties)
  components/ui/        # shadcn-generated UI primitives — do not hand-edit
  lib/utils.ts          # cn() helper: clsx + tailwind-merge
```

## Key Conventions

### Path Aliases
- `@/` resolves to `src/` — always use this for internal imports (e.g., `import { cn } from "@/lib/utils"`)

### Tailwind v4
- **No `tailwind.config.js`** — configuration is CSS-first, done in `src/index.css` via `@import "tailwindcss"`
- Design tokens are `oklch`-based CSS custom properties (`--primary`, `--card`, etc.) defined in `src/index.css` — extend the theme there, not in JS

### shadcn/ui Components
- Style: `new-york`, base color: `neutral`, CSS variables enabled
- Add components with `npx shadcn add <component>` — this writes to `src/components/ui/`
- All components use **`function` declarations** (not arrow functions)
- Props typed via `React.ComponentProps<"element"> & ExtraProps` — avoid standalone interfaces for element wrappers
- All components include `data-slot` attributes for CSS targeting
- Variant/size logic uses `cva` (class-variance-authority); merge classes with `cn()`

### TypeScript Constraints
- `strict: true` — no implicit `any`
- `erasableSyntaxOnly: true` — **no `enum` or `namespace`**; use `const` objects or union types instead
- `verbatimModuleSyntax: true` — use `import type` for type-only imports
- `noUnusedLocals` / `noUnusedParameters` — clean up unused identifiers

### Security
- `dompurify` is available — use it whenever rendering user-supplied HTML via `dangerouslySetInnerHTML`
