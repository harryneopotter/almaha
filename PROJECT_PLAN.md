# Project Plan & To-Do List

This document tracks the remaining work for the Al Maha Foods website conversion, including visual parity fixes and interactive element improvements.

---

## Remaining Tasks

### Article Pages

- [ ] **Create PR and document changes**
  - Open a branch/PR with the changes, include a short README or PR description listing files changed, asset copy locations, and the QA checklist steps for reviewers.

### Navigation and Interactive Elements

- [ ] **Correct header menu hover states**
  - The main menu item should stay highlighted when the cursor moves over its submenu.

- [ ] **Remove dropdown menu icons**
  - Remove the arrow icons from the main navigation items that have dropdowns.

---

## Completed Tasks

### Article Page Parity

- [x] Inventory pages and map sources
- [x] Extract page assets and CSS
- [x] Create shared Article layout components
- [x] Port per-page content and styles

### Navigation and Interactive Elements

- [x] Fix map dragging behavior

### Content Expansion

- [x] Create 3 new article pages using the `NewsArticle` layout and link them from the homepage.

---

## Future Implementation Plan: Home Page Visual Fixes

The following are surgical fixes to resolve the remaining visual issues on the Home page.

### Issue 1: Vision section (video background) should be edge-to-edge

**Goal:** Make the video-background wrapper stretch full-bleed while keeping inner content constrained to the central container width.

**Implementation (CSS):**
- Move the background/video element outside the `.row-container` or use absolute positioning.
- Example CSS Module pattern:
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

### Issue 2: Featured article button text overflow

**Goal:** Fix the button so text doesn't wrap awkwardly or overflow.

**Implementation (CSS):**
  ```css
  .featuredButton {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 22px;
    line-height: 1.1;
    white-space: normal; /* or nowrap if you want single-line */
    border-radius: 8px;
  }
  ```

### Issue 3: Add 36px top padding to Featured Article section

**Goal:** Add `padding-top: 36px` to the featured article section's container.

**Implementation (CSS):**
  ```css
  .featuredArticleSection { padding-top: 36px; }
  ```

### Issue 4: Remove side 36px padding from inner container divs

**Goal:** Remove the horizontal padding from the Home page's inner `.row-container` so content aligns flush with the central container edge.

**Implementation (CSS):**
- Create a scoped CSS Module override for the Home page.
  ```css
  .homeSection > .rowContainer { padding-left: 0; padding-right: 0; }
  ```

---

## Appendix: WordPress/Visual Composer Class Reference

This explains the helper classes from the original HTML snapshots.

- `vc_row`: WPBakery/Visual Composer row wrapper.
- `row-container`: Theme helper that constrains inner content width.
- `inverted-device-order`: Responsive helper to flip column order on mobile.
- `desktop-hidden`, `tablet-hidden`, `mobile-hidden`: Utility classes that hide elements at specific breakpoints via `display:none`.