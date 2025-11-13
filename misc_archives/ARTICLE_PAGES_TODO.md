# Implementation To‑Do List

Generated: 2025-10-31

This file tracks the work required to:
1. Bring four React pages into visual parity with their HTML originals
2. Fix navigation and interactive element behaviors
3. Improve map interactions and menu hover states

- [ ] Inventory pages and map sources
- [x] Inventory pages and map sources
- [x] Extract page assets and CSS
- [x] Create shared Article layout components
- [x] Port per-page content and styles
- [ ] Create PR and document changes
  - Open a branch/PR with the changes, include a short README or PR description listing files changed, asset copy locations, and the QA checklist steps for reviewers.


## Acceptance criteria (summary)
- **NOTE**: Tasks for asset integration, testing, and local QA were deemed not needed for this phase.
- Headings, bylines and article layout match the downloaded HTML originals.
- PDFs are embedded inside a constrained content region (not full width).
- All page assets (PDFs/images) load from `public/assets/articles/<slug>/` with no 404s.
- Responsive behavior matches original at desktop/tablet/mobile.


## Navigation and Interactive Elements

- [x] Fix map dragging behavior
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
- [x] Correct header menu hover states

- [ ] Remove dropdown menu icons
- [x] Remove dropdown menu icons

## Content Expansion

- [x] Create 3 new article pages
  - Create three new React components for the new articles.
  - Use the existing `NewsArticle` layout as a template.
  - Link to the following PDF files:
    - `Flyer_September.pdf`
    - `Flyer_October.pdf`
    - `Flyer_November.pdf`
  - **Note**: The PDFs are already uploaded in the `public/assets/documents/` directory.
  - Update the News Section on the Home page to link to these three new pages, replacing the existing articles.


## Notes / next steps
1. All tasks can be implemented in parallel - article pages, maps, and navigation fixes are independent.
2. Navigation fixes should be tested across all pages to ensure consistent behavior.
3. Consider adding hover/interaction tests to Playwright suite.
