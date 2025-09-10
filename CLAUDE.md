# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `pnpm dev` (uses Turbopack for faster builds)
- **Production build**: `pnpm build` (uses Turbopack)
- **Start production server**: `pnpm start`
- **Lint code**: `pnpm lint` (uses Biome)
- **Format code**: `pnpm format` (uses Biome)

## Project Architecture

This is a **Next.js 15** application using the App Router with TypeScript and Tailwind CSS. The project is a Korean language schedule management tool for teams.

### Key Technologies
- **Next.js 15** with App Router and Turbopack
- **React 19** 
- **TypeScript 5**
- **Tailwind CSS 4** for styling
- **shadcn/ui** components with New York style variant
- **Biome** for linting and formatting (replaces ESLint/Prettier)
- **Lucide React** for icons
- **Geist** font family

### Directory Structure
```
src/
├── app/              # Next.js App Router pages
│   ├── layout.tsx    # Root layout with Korean locale
│   ├── page.tsx      # Homepage with Header/Footer layout
│   └── globals.css   # Global Tailwind styles
├── components/
│   ├── ui/           # shadcn/ui components
│   └── widgets/      # Custom layout components (Header, Footer)
└── lib/
    └── utils.ts      # Utility functions (cn helper for class merging)
```

### Component Architecture
- Uses shadcn/ui design system with custom path aliases
- Layout components are in `widgets/` subdirectory
- Follows a standard Header → Main → Footer layout pattern
- All components use TypeScript and Tailwind CSS

### Path Aliases
- `@/components` → `src/components`
- `@/lib` → `src/lib` 
- `@/utils` → `src/lib/utils`
- `@/ui` → `src/components/ui`
- `@/hooks` → `src/hooks`

### Styling Approach
- Tailwind CSS 4 with CSS variables enabled
- Uses neutral base color scheme
- Includes utility for class name merging via `cn()` function
- Global styles in `src/app/globals.css`