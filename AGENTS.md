# AGENTS.md - Al Maha Foods React/Vite Project

## Commands
- **Dev**: `npm run dev` (starts Vite dev server on port 3000)
- **Build**: `npm run build` (production build to dist/)
- **Preview**: `npm run preview` (serve built site locally)
- **Test (Visual)**: `npm test:visual` (runs all Playwright tests)
- **Test (Single)**: `npx playwright test tests/[filename].spec.js` (run specific test file)
- **Audit**: `npm run audit` (runs audit spec and generates report)

## Architecture
- **Stack**: React 18 + Vite, React Router v6, CSS Modules
- **Structure**: `src/pages/` (page components), `src/components/` (reusable components), `src/hooks/` (custom hooks), `src/styles/` (global/shared styles)
- **Build**: Vite builds to `dist/`, includes `.htaccess` and `public/wp-content/` assets via postbuild script
- **Testing**: Playwright for visual regression (desktop/tablet/mobile viewports)
- **Scripts**: `scripts/` contains Node.js utilities for screenshot capture, comparison, and asset verification

## Code Style
- **Components**: Functional components with hooks; use CSS Modules (`.module.css`) for all styles
- **Imports**: React/hooks first, then components, then assets/hooks, then styles
- **Typography**: Roboto font, paragraphs 20px/300 weight, headings 24px/300 weight, specific letter-spacing per PROJECT_CONTEXT_AND_GUIDELINES.md
- **Spacing**: 72px vertical gaps between main content blocks; match live site exactly
- **No inline styles**: Use CSS Modules exclusively; no global CSS leaks
- **No legacy code**: No jQuery, all interactivity in React
