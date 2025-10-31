# Implementation To‑Do List

Generated: 2025-10-31

This file tracks the work required to:
1. Bring four React pages into visual parity with their HTML originals
2. Fix navigation and interactive element behaviors
3. Improve map interactions and menu hover states

- [ ] Inventory pages and map sources
  - Locate the four React page components used by the Home page links (News and Business sections) and map each to its corresponding HTML source in `html_files/new-pages/` (HTML file + assets directory). List exact file paths.

- [ ] Extract page assets and CSS
  - Copy or reference each page's assets (PDFs, images, CSS snippets) from `html_files/new-pages/<page>/` into the project (preferably `public/assets/articles/<slug>/`). Identify the page-specific CSS rules required for headings, bylines and main content.

- [ ] Create shared Article layout components
  - Implement React components: `ArticleLayout.jsx` (container + sidebar behavior), `ArticleHeader.jsx` (title, byline, meta), and `PdfEmbed.jsx` (responsive PDF container with fallback). Place under `src/components/article/` or `src/components/`.

- [ ] Port per-page content and styles
  - Update the four React page components to use the shared article components and to import/consume the copied CSS so the heading, byline and typography match the HTML originals. Replace edge-to-edge PDF embeds with constrained content container matching original page widths.

- [ ] Integrate assets and update links
  - Ensure PDFs and images are served from `public/` or correct static path, and update any links in the React pages and CSS to point to the new asset locations. Verify correct MIME handling for PDFs in the embed component.

- [ ] Add tests and visual checks
  - Add a minimal Playwright or Jest/React Testing Library test to verify the article layout renders title/byline and PDF iframe container. Add optional visual snapshot (Playwright screenshot) to confirm parity.

- [ ] Local verification and QA checklist
  - Run the dev server, visually inspect each page alongside the original HTML page (from `html_files/new-pages`) at desktop/tablet/mobile breakpoints. Complete QA checklist: heading font/size, colors, byline, content width, responsive PDF behavior, links, images.

- [ ] Create PR and document changes
  - Open a branch/PR with the changes, include a short README or PR description listing files changed, asset copy locations, and the QA checklist steps for reviewers.


## Acceptance criteria (summary)
- Headings, bylines and article layout match the downloaded HTML originals.
- PDFs are embedded inside a constrained content region (not full width).
- All page assets (PDFs/images) load from `public/assets/articles/<slug>/` with no 404s.
- Responsive behavior matches original at desktop/tablet/mobile.


## Navigation and Interactive Elements

- [ ] Fix map dragging behavior
  - Locate map components in Home page, Exports page, and Domestic Market page
  - Add `draggable={false}` to map container elements
  - Add CSS rule to prevent default drag behavior:
    ```css
    .map-container {
      user-select: none;
      -webkit-user-drag: none;
    }
    ```
  - Test on all map instances to verify fix

- [ ] Correct header menu hover states
  - Update the hover effect CSS in navigation component to persist when cursor moves to submenu:
    ```css
    .nav-item:hover,
    .nav-item:focus-within {
      /* Copy hover state styles from original */
      background-color: var(--hover-bg-color);
    }
    ```
  - Ensure hover state remains active while submenu is open
  - Test across all menu items with dropdowns
  - Verify visual match with live site behavior

- [ ] Remove dropdown menu icons
  - Locate the dropdown menu component (likely in `src/components/navigation/`)
  - Remove icon elements or classes from root menu items
  - Preserve icons within submenu items if present
  - Update spacing/padding after icon removal
  - Test to ensure menu alignment remains correct

## Notes / next steps
1. All tasks can be implemented in parallel - article pages, maps, and navigation fixes are independent.
2. Navigation fixes should be tested across all pages to ensure consistent behavior.
3. Consider adding hover/interaction tests to Playwright suite.

