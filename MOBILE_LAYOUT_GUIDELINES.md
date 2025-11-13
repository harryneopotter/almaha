# Mobile Layout & Alignment Guidelines (Home Page)

These guidelines standardize mobile-only spacing and text alignment across home page sections, without touching desktop layout. Follow the section-by-section instructions to ensure consistent gutters and left-aligned section titles on mobile.

## Scope & Principles
- Mobile-only changes. Do not modify desktop layout.
- Preserve existing desktop widths, grids, gaps, and alignment.
- Apply overrides inside mobile `@media` queries only.
- Use consistent mobile gutters that match the reference HTML: `20px` per side on mobile.
- Section titles remain left-aligned on mobile. Body copy can be left-aligned or justified, but not centered.

## Breakpoints
- Tablet: `@media (max-width: 1024px)`
- Mobile: `@media (max-width: 768px)`
- Small mobile: `@media (max-width: 480px)`

## Global Mobile Standards
- Gutters:
  - At `<=768px`, add `padding-left/right: 20px` to each module’s `.container`.
  - Optionally keep `20px` for very small screens (`<=480px`) to mirror the reference HTML. If you must reduce for extreme narrow viewports, prefer `16px` but only if content requires it.
- Grid collapse:
  - Where a section uses two columns on desktop, switch to a single column at `<=1024px` (most modules already do this).
- Title alignment:
  - Ensure `.heading` is `text-align: left` at mobile breakpoints.

---

## Section-by-Section (Mobile Only)

### 1) Welcome Section
- File: `src/styles/components/WelcomeSection.module.css`
- Desired mobile layout:
  - Sidebar hidden or stacked above content (already hidden at `<=767px`).
  - Single column layout, left-aligned heading and body text.
  - Standard mobile gutters applied to `.container`.
- Changes to add/update:
```css
@media (max-width: 768px) {
  .container { padding: 0 20px; }
  .heading { text-align: left; }
  .textParagraphs p { text-align: left; }
}
/* Keep existing .sidebar { display: none; } and single-column grid */
```

### 2) Certification Card
- File: `src/styles/components/CertificationCard.module.css`
- Current mobile alignment centers `.text`.
- Desired mobile layout:
  - Left-aligned card text.
  - Standard mobile gutters applied to `.container`.
- Changes to add/update:
```css
@media (max-width: 768px) {
  .container { padding: 0 20px; }
  .text { text-align: left; }
}
```

### 3) Vision Block (full-bleed)
- File: `src/styles/components/VisionBlock.module.css`
- Desired mobile layout:
  - Maintain full-bleed background and existing content alignment.
  - Standard mobile gutters inside `.container` (already present: `padding: 60px 16px` at `<=768px`, `50px 12px` at `<=480px`).
- No title alignment changes required (this section is a quote, not a titled content block).

### 4) International Presence
- File: `src/styles/components/InternationalPresence.module.css`
- Desired mobile layout:
  - Single column, title left-aligned.
  - Standard mobile gutters.
- Changes to add/update:
```css
@media (max-width: 768px) {
  .container { padding: 0 20px; }
  .heading { text-align: left; margin-top: 0; }
}
```

### 5) Domestic Presence
- File: `src/styles/components/DomesticPresence.module.css`
- Desired mobile layout:
  - Single column as implemented, title left-aligned.
  - Mobile gutters already applied to `.container`.
- Changes to add/update:
```css
@media (max-width: 768px) {
  .heading { text-align: left; }
}
```

### 6) News Section
- File: `src/styles/components/NewsSection.module.css`
- Desired mobile layout:
  - Single column, left-aligned title.
  - Standard mobile gutters.
- Changes to add/update:
```css
@media (max-width: 768px) {
  .container { padding: 0 20px; }
  .heading { text-align: left; }
}
```

### 7) Business Section
- File: `src/styles/components/BusinessSection.module.css`
- Desired mobile layout:
  - Single column, left-aligned title.
  - Mobile gutters already applied to `.container`.
- Changes to add/update:
```css
@media (max-width: 768px) {
  .textColumn .heading { text-align: left; }
  /* If any parent sets text-align: center for .textColumn at mobile, do not change body copy here; only titles should be left-aligned. */
}
```

### 8) Featured Article
- File: `src/styles/components/FeaturedArticle.module.css`
- Desired mobile layout:
  - Left-aligned title and body copy.
  - Maintain existing mobile column stacking.
- Changes to add/update:
```css
@media (max-width: 768px) {
  .heading { text-align: left; margin: 20px 0 12px 0; width: auto; }
  .description p { text-align: left; }
}
```

### 9) CTA Section (full-bleed band, inner white box)
- File: `src/styles/components/CTASection.module.css`
- Desired mobile layout:
  - Keep left-aligned heading and intro text.
  - Mobile gutters already applied to `.container`.
- No changes needed unless body copy is centered in downstream overrides.

### 10) Footer (if included in scope)
- File: `src/styles/components/Footer.module.css`
- Desired mobile layout:
  - Use the same mobile gutter standard for inner content.
  - Keep desktop widths and padding untouched.
- Changes to add/update:
```css
@media (max-width: 768px) {
  .container { padding-left: 20px; padding-right: 20px; }
}
```

---

## Implementation Steps (Mobile-Only)
1. For each module listed above, add or update mobile `@media` blocks to:
   - Set `.container { padding: 0 20px; }` at `<=768px`.
   - Force `.heading { text-align: left; }` at mobile breakpoints.
2. Confirm two-column sections collapse to a single column at `<=1024px`.
   - If not, add `grid-template-columns: 1fr;` under `@media (max-width: 1024px)` for the wrapper.
3. Remove any mobile-only `text-align: center` applied to headings.
   - Do not change desktop alignment.
4. Leave full-bleed sections (VisionBlock, Business, CTA bands) intact on desktop.
   - Only adjust inner `.container` gutters on mobile (most already do).
5. Do not modify desktop `padding`, `max-width`, `grid-template-columns`, or `gaps`.

## Verification Checklist
- All section titles are left-aligned on mobile (`<=768px` and `<=480px`).
- Horizontal content edges start at the same x-position across sections (gutter consistency).
- No desktop changes observed:
  - Widths (`1060px` baseline, `1128px` at wide) remain unchanged.
  - Desktop heading alignment and grid stays as-is.
- Full-bleed bands do not introduce horizontal scroll at mobile.

## Notes
- CSS Modules scoping means root-level overrides like `.contentWrapper :global(.container)` won’t affect module-scoped `.container` classes. Prefer local module edits under mobile `@media` blocks.
- If a section intentionally centers non-title content on mobile (quotes, banners), only enforce left alignment for the section title.

---

## Reference HTML CSS (Home Page) — Horizontal Section Gutters
- Source: WordPress export of the home page CSS.
- Base theme default:
  - `.main-container .row-container .single-h-padding { padding-left: 36px; padding-right: 36px; }` (desktop; style(1).css).
- Home page mobile override (used across sections that render rows like `.row ... single-h-padding limit-width row-parent`):
  - Under `@media only screen and (max-width: 540px)`, the site sets:
    - `.main-container .row-container .single-h-padding { padding-left: 20px; padding-right: 20px; }` (style(2).css).
- Special-case components on the home page also use `20px` inner padding:
  - `.video-bg-section-home .vc_row.row-internal.row-container .vc_custom_heading_wrap { padding: 0 20px; }` (style(2).css)
- Notes:
  - Some overlays (e.g., `.domestic-presence-slider .t-overlay-inner`) use `padding: 0 50px` for internal text blocks. Treat these as component-specific, not the general section gutter.
  - We do not change desktop spacing. Mobile overrides in this document follow the `20px` per side standard to match the reference HTML.

---

## Reference HTML CSS (Home Page) — Vertical Section Spacing
- Source: Home page theme CSS (`style(1).css`) and child overrides (`style(2).css`). These are applied on `.row.row-parent` wrappers.
- Theme scale (desktop defaults):
  - `.single-top-padding` / `.single-bottom-padding` → `36px`.
  - `.std-top-padding` / `.std-bottom-padding` → `72px` (reduces to `54px` at `<=1499px`, `36px` at `<=959px`).
  - `.double-top-padding` / `.double-bottom-padding` → `100px`.
  - `.triple-top-padding` / `.triple-bottom-padding` → `108px` (reduces to `72px` at `<=1699px`).
- Home page mobile overrides (child CSS):
  - `.main-container .row-container .double-top-padding` → `padding-top: 50px`.
  - `.main-container .row-container .double-bottom-padding` → `padding-bottom: 50px !important`.
  - `.red_block_section .row.triple-top-padding` → `padding-top: 0;` (section-specific compression).
  - `.main-container .row-container .triple-bottom-padding` → `padding-top: 30px;` (section-specific quirk used by the child theme).
- Interpretation for mobile:
  - Major band-to-band spacing on the home page uses around `50px` top/bottom via `double-*` classes.
  - Standard content sections trend to `36px` top/bottom via `single-*` or reduced `std-*` classes.
  - Triple spacing is sometimes suppressed on mobile by child CSS; avoid relying on `triple-*` for mobile section gaps.

## Global Mobile Vertical Spacing
- Recommended mobile scale aligned to the home page:
  - Major section gap: `50px` top and bottom.
  - Standard section gap: `36px` top and bottom.
  - Minimal gap (when compressing): `30px` top and bottom (use sparingly; only for tightly stacked bands like promo blocks).
- Do not alter desktop paddings. Apply these only under mobile `@media` blocks.

## Implementation (Vertical Spacing, Mobile Only)
- At `@media (max-width: 768px)`, for each home section wrapper, set top/bottom paddings to match the target role:
  - Hero or CTA bands: `.section { padding-top: 50px; padding-bottom: 50px; }`
  - Standard content sections: `.section { padding-top: 36px; padding-bottom: 36px; }`
  - Compressed blocks (rare): `.section { padding-top: 30px; padding-bottom: 30px; }`
- Keep full-bleed backgrounds intact; adjust only inner content wrappers if a section already controls its outer spacings.