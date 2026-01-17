# AI Coding Guidelines for PDF Perfect Site

## Project Overview
Tourism website built with React + TypeScript + Vite, featuring static tour data and Supabase integration for dynamic features like visitor tracking.

## Architecture
- **Frontend**: React with TypeScript, Vite build tool, Tailwind CSS + shadcn/ui components
- **Data Layer**: Static tour data in `src/data/tours.ts`, Supabase for visitor counter and potential future features
- **Routing**: React Router with pages in `src/pages/`, components in `src/components/`
- **Styling**: Tailwind with custom animations via Framer Motion

## Key Patterns
- Use `@/` alias for `src/` imports (configured in `vite.config.ts`)
- Tour data structure: `Tour` interface for detailed packages, `Departure` for upcoming dates
- Component organization: Feature-based folders (e.g., `home/`, `destination/`), shared UI in `ui/`
- Hooks for reusable logic: `useScrollReveal` for animations, `useVisitorCounter` for Supabase integration
- Static assets: Images in `src/assets/` with subfolders by category

## Development Workflow
- `npm run dev`: Start development server on port 8080
- `npm run build`: Production build
- `npm run lint`: ESLint checking
- Uses Lovable platform for collaborative development and auto-commits

## Conventions
- TypeScript interfaces defined alongside data (see `tours.ts`)
- Class names: Use `cn()` utility from `lib/utils.ts` for conditional styling
- Animations: Framer Motion with `motion.` components and `useScrollReveal` hook
- Supabase client: Import from `@/integrations/supabase/client` for database operations
- Error handling: Graceful fallbacks (e.g., visitor counter defaults to 12547 on error)

## Integration Points
- Supabase: Visitor counter table, environment variables `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY`
- External links: Tour booking redirects to `suntourismpune.co.in`
- Assets: Static images for tours and homepage content

## Common Tasks
- Adding tours: Update `tours.ts` with new `Tour` objects and corresponding images
- New pages: Add route in `App.tsx`, create component in `src/pages/`
- UI components: Use shadcn/ui from `src/components/ui/`, customize via `components.json`
- Animations: Wrap elements with `motion.div` and use `useScrollReveal` for scroll-triggered effects