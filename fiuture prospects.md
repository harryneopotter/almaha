# Fiuture Prospects

This document explains the meaning of the WordPress/Visual Composer helper classes you saw in the saved HTML, why the `VISIBLE_SECTIONS.md` parser missed some hidden sections, and lays out a surgical implementation plan to resolve the Home page issues you listed.

---

## 1) What the classes mean

- `vc_row` — WPBakery/Visual Composer row wrapper. Holds columns and row-level settings (background, padding, alignment).
- `row-container` — Theme helper that constrains inner content and applies side padding and consistent inner widths.
- `inverted-device-order` — Responsive helper to flip column order on certain breakpoints (usually implemented with flex order or media-query changes).
- `desktop-hidden`, `tablet-hidden`, `mobile-hidden` — Utility classes that hide elements at specific breakpoints via media queries (usually `display:none !important` inside external CSS).

These are theme-level utilities defined in external stylesheets. The saved HTML snapshots contain the markup but not the external CSS rules that apply these classes.

---

## 2) Why `VISIBLE_SECTIONS.md` missed hidden sections

The parser used to create `VISIBLE_SECTIONS.md` checks only inline `style` attributes and any `<style>` blocks embedded directly inside the saved HTML file. It does not load external CSS files that the original theme used. Since visibility helper classes and many responsive rules are defined in external CSS, the parser can't detect those `display:none` rules, and therefore reports sections with `desktop-hidden`/`mobile-hidden` classes as "visible".

If you need runtime-accurate visibility detection, either:
- Load and parse the external CSS files referenced by the saved HTML, search them for the utility class rules, and evaluate rules across breakpoints; or
- Use a headless browser (Playwright or Puppeteer) to load the page and read computed styles for each `data-section` at the three canonical breakpoints (375px, 768px, 1920px). This second approach is the most accurate.

---

## 3) Implementation plan — surgical fixes for Home page issues

We'll treat each issue separately and apply minimal, targeted changes. All changes will be made using CSS Modules and component-local edits where possible.

Files likely affected (may vary depending on your code layout):
- `src/pages/Home.jsx` (or `src/pages/index.jsx`) — main Home page component
- `src/pages/Home.module.css` or `src/styles/home/*.module.css` — home page specific CSS module(s)
- `src/components/FeaturedArticle.jsx` and its `.module.css` (if the featured article is a component)

We'll implement and verify each change step-by-step. If any selector is not found, I'll ask for confirmation.

### Issue 1 — Vision section (video background) should be edge-to-edge

What to change:
- Make the video-background wrapper stretch full-bleed while keeping inner content constrained to the central container width.

How to implement (CSS):
- Move the background/video element outside the `.row-container` (or allow the background to use absolute positioning/extending negative margins). Example pattern for CSS Module:

```css
.fullBleed { /* applied to the video wrapper */
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  overflow: hidden;
}
.fullBleed .video { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; }
.fullBleed .inner { max-width: var(--central-container-width); margin: 0 auto; padding: 0 36px; }
```

Implementation steps:
1. Locate the vision section in `src/pages/Home.jsx` or equivalent. Wrap the video background div with a class `fullBleed` (or convert the existing wrapper). Ensure the inner text/content remains inside a centered `.inner` wrapper.
2. Add CSS Module entries and import where required.
3. Test at 375px/768px/1920px to ensure the background spans the full viewport width while inner content remains central.

### Issue 2 — Featured article button text overflow

What to change:
- Fix button so text doesn't wrap awkwardly or overflow. Use padding, line-height, and white-space where needed.

How to implement (CSS):

```css
.featuredButton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 12px 22px; /* adjust for content */
  line-height: 1.1;
  white-space: normal; /* or nowrap if you want single-line */
  border-radius: 8px;
}

/* If the theme uses a fixed width, ensure text wraps gracefully: */
.featuredButton span { display:inline-block; }
```

Implementation steps:
1. Find the FeaturedArticle component or home page markup for the button (`src/components/FeaturedArticle.jsx` or similar).
2. Update the button class to `.featuredButton` and update the module CSS with the rules above.
3. If the button contains multiple lines by design, ensure vertical padding is enough to contain two lines; otherwise set `white-space:nowrap` to force single-line and increase padding.
4. Test visually.

### Issue 3 — Add 36px top padding to Featured Article section

What to change:
- Add `padding-top: 36px` to the featured article section's container.

CSS:

```css
.featuredArticleSection { padding-top: 36px; }
```

Implementation steps:
1. Add class to the FeaturedArticle section wrapper.
2. Update CSS Module to set `padding-top: 36px`.
3. Test visually.

### Issue 4 — Remove side 36px padding from inner container divs

What to change:
- The home page (non-fullwidth sections) uses an inner `.row-container` or `.container` with side padding of 36px. Remove this horizontal padding so content aligns flush with the central container edge.

Approach:
- Identify the container selector responsible (search for `.row-container`, `.container`, or the theme's `.limit-width` wrapper in `src/styles` or global CSS). Update the selector for Home page only so that left/right padding is 0 (or adjust within the Home page's CSS Module).

CSS (module-scoped override):

```css
.homeSection > .rowContainer { padding-left: 0; padding-right: 0; }
```

If the HTML structure always places a `.row-container` immediately after the `section`, use a selector scoped to Home (e.g., `.homePageSection .row-container { padding: 0; }`).

Implementation steps:
1. Inspect the Home page markup in `src/pages/Home.jsx` to find the exact wrapper class name (e.g., `row-container`, `container`, `limit-width`).
2. Add a scoped CSS Module override that sets left/right padding to 0 for all non-fullwidth sections on Home. If the same class is used elsewhere, scope it: `.homeMain .row-container { padding-left:0; padding-right:0; }`.
3. Test on desktop/tablet/mobile.

---

## 4) Verification

After applying each change individually:
- Start dev server: `npm run dev` and view `http://localhost:3000`.
- Manually confirm the change at 375px, 768px and 1920px.
- After all fixes: run `npm run build` and do a quick smoke test (open `dist/index.html` in a static server or unzip the build and serve).

Optional: Add Playwright visual checks later (not in this surgical pass) to assert pixel parity.

---

## 5) Next steps

- I'll implement each change one-by-one as you assign them. We already created the todo list: I'll mark each implementation as `in-progress` and then `completed` after testing.
- If you want me to proceed now, confirm whether I should make the changes directly in `src/pages/Home.jsx` and `src/pages/Home.module.css`. If the project uses a different file structure for the Home page, tell me the exact component file names.

---

If anything is unclear or you want me to prioritize a specific fix first, tell me and I'll start implementing it immediately.