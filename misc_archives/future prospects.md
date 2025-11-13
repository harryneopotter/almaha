Future prospects and typographic recommendations
=============================================

Summary
-------
This document captures recommended improvements for typography and styling to make the codebase easier to maintain and to improve performance and visual consistency.

Key recommendations
-------------------
- Centralize typography variables
  - Add a small CSS variables file (e.g., `src/styles/typography.css`) exposing font families, a small typographic scale (xxl / xl / lg / md / sm) and line-height tokens.
  - Use `rem` values (root-based) for sizes and prefer `clamp()` for large hero titles to provide fluid scaling.

- Reduce font payload
  - If `Roboto` is the primary UI font, remove additional Google font families or limit loaded weights to what the site actually uses.
  - Keep `font-display: swap` behaviour (Google Fonts will set this by default) to avoid blocking rendering.

- Use a design tokens file for colors and weights
  - Introduce CSS variables for primary/secondary colors and typographic weights to avoid repeated hard-coded values.

- Make maps lazy-loaded
  - amCharts and geodata are sizable. Dynamically import map components (React.lazy or dynamic import) so map code executes only when the user scrolls to the section.

- Prefer SVG icons for small UI glyphs
  - Replace pseudo-element FontAwesome bullets with inline SVG or <i> markup referencing the FA stylesheet. This is more robust and avoids dependency on a specific FA font-face mapping.

- Move to rem units and a small scale
  - Replace many `px` usages with `rem` tied to a controlled root font-size, and use media queries sparingly — prefer fluid scaling where helpful.

Implementation notes for short term (deliverable-first)
---------------------------------------------------
- Keep the current CSS Modules strategy — it's working well and provides component scoping.
- Make only small, non-breaking changes for the first draft: define tokens, and adopt them in 2–3 key components (Hero, Footer, Header). More expansive refactor can follow after first-draft delivery.

Next steps (suggested)
----------------------
1. Add `src/styles/typography.css` with variables and include it in `src/main.jsx` as part of global CSS.
2. Replace the largest map imports with lazy-loaded components and verify chunk sizes after build.
3. Run Playwright visual tests across breakpoints (375, 768, 1920) to validate typographic parity.

Notes
-----
These recommendations prioritize maintainability and load/performance improvements while preserving visual fidelity for the first-draft delivery.
