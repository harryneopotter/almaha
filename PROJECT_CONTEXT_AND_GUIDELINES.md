# Al Maha React/Vite Migration – Project Context & Guidelines

## Project Overview
This project is a pixel-perfect React 18 + Vite migration of the Al Maha WordPress site. The goal is to achieve strict visual and functional parity with the live site, using modern frontend best practices and a clean, production-ready codebase.

## Requirements
- **Visual Parity:** All typography, spacing, layout, and content blocks must match the live Al Maha site exactly.
- **React 18 + Vite:** Use React 18 with Vite for fast builds and modern DX.
- **CSS Modules:** All page/component styles are implemented with CSS Modules for local scoping.
- **Global Styles:** Roboto is the global font. Font Awesome v5 is used for icons.
- **Asset Handling:** All images, PDFs, and videos referenced in the original site are present in the build output.
- **Automation:** Playwright and custom scripts are used for visual regression and asset verification.
- **Packaging:** The project builds to a `dist/` directory and is zipped for delivery. All assets must be present in the zip.
- **Repo Hygiene:** Only essential files/folders remain in the root. All legacy HTML, asset folders, test artifacts, and logs are organized into subdirectories.

## Guidelines
- **Component Structure:**
  - Each page is a React component in `src/pages/`.
  - Use functional components and hooks.
  - Use CSS Modules for all styles (`.module.css`).
- **Typography:**
  - **Font:** Roboto, fallback sans-serif.
  - **Paragraphs:** 20px, font-weight 300, line-height 35px, letter-spacing -0.48px.
  - **Headings (h3):** 24px, font-weight 300, line-height 36px, letter-spacing -0.48px.
  - **Sidebar Headings:** 24px, font-weight 400, uppercase, letter-spacing 0.5px, color #1a1a1a.
  - **Vertical Gaps:** 72px between main content blocks as per live site.
- **Spacing:**
  - Match all margins, paddings, and block spacing to the live site.
  - Use CSS variables or utility classes for consistent spacing if needed.
- **Icons:**
  - Use Font Awesome v5 React components or SVGs as needed.
- **Accessibility:**
  - Use semantic HTML and ARIA attributes where appropriate.
- **Testing:**
  - Use Playwright for visual regression and asset presence checks.
- **Build & Serve:**
  - `npm run build` for production build.
  - `npm run preview` to serve the built site locally.

## Constraints
- **No Unused Files:**
  - All legacy HTML, asset folders, test artifacts, and logs are moved out of the root.
  - Only `src`, `public`, `package.json`, `vite.config.js`, and other essential files remain in the root.
- **No Global CSS Leaks:**
  - All styles must be locally scoped unless explicitly global.
- **No Inline Styles:**
  - Use CSS Modules for all custom styles.
- **No jQuery or Legacy JS:**
  - All interactivity is implemented in React.

## Directory Organization
- `src/` – React source code
- `public/` – Static assets
- `html_files/` – Legacy HTML exports and their asset folders
- `builds_zip/` – Build zip files
- `test_artifacts/` – Playwright and test output
- `misc_archives/` – Context, logs, and other non-essential folders

## Automation & Scripts
- Playwright scripts for visual regression
- Node scripts for asset verification and packaging

## Review & Delivery
- All pages must be visually reviewed against the live site.
- The final build must be zipped and include all referenced assets.
- The repo must be clean, with only essential files in the root.

---

_Last updated: 2025-10-27_
