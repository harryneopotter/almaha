# Mobile Vertical Spacing Implementation — Home Page

Objective: Standardize vertical spacing between home page sections on mobile while preserving desktop layout. Align with the reference WordPress CSS scale documented in `MOBILE_LAYOUT_GUIDELINES.md`.

## Constraints
- Do not change desktop layout or spacing; mobile-only overrides.
- Use CSS Modules; apply changes within each section’s module under mobile `@media` queries.

## Target Mobile Spacing Scale
- Major gap: `50px` top and bottom.
- Standard gap: `36px` top and bottom.
- Minimal gap (compressed cases): `30px` top and bottom.

## Section Classification
- Major sections: `VisionBlock`, `DomesticPresence`, `BusinessSection`, `CTASection` (full-bleed or banded sections).
- Standard sections: `WelcomeSection`, `InternationalPresence`, `NewsSection`, `FeaturedArticle`.
- Overlap/quirk: `CertificationCard` currently overlaps neighbor sections via negative margins.

## Implementation Steps
1. Standard sections: Set mobile `padding-top`/`padding-bottom` to `36px` at `@media (max-width: 768px)`. Reduce any heavier bottom paddings to `36px`. At very small screens (`<=375px`) compress to `30px` where applicable.
2. Major sections: Set mobile `padding-top`/`padding-bottom` to `50px` at `@media (max-width: 768px)`. At very small screens (`<=375px`) consider compressing to `30px` for space efficiency.
3. CertificationCard: Normalize mobile vertical spacing by removing `margin-bottom: -120px` and reducing the `margin-top` overlap. Target a clean `36px` bottom gap and a modest top overlap to keep visual tie-in.
4. Validate in dev preview (`http://localhost:3000/`) across breakpoints (768px, 480px/375px). Ensure gaps visually match the scale and that no desktop layout changed.

---

## Execution Log
- Change 1 — Standard sections updated (mobile-only):
  - Updated `WelcomeSection.module.css` to `padding: 36px 0` at `<=768px` and `30px 0` at `<=375px` to match the standard gap, reducing from 48px/40px.
  - Updated `InternationalPresence.module.css` to `padding: 36px 0` at `<=768px` and `30px 0` at `<=375px`, aligning map section to a standard gap for consistency inside the centered content wrapper.
  - Updated `NewsSection.module.css` to `padding: 36px 0` at `<=768px` and `30px 0` at `<=375px` so list-based content stacks with a consistent rhythm.
  - Added mobile overrides to `FeaturedArticle.module.css`: `36px 0` at `<=768px` and `30px 0` at `<=375px`, removing the heavier bottom padding on mobile.
  - Why: These sections are not full-bleed bands; aligning them to the `36px` standard improves visual consistency and matches the documented mobile scale.

- Change 2 — Major sections updated (mobile-only):
  - Updated `VisionBlock.module.css` container padding to `50px` at `<=768px` (from `60px`) to align full-bleed band spacing to the `50px` major gap.
  - Updated `DomesticPresence.module.css` to `padding: 50px 0` at `<=768px` (from `48px`) and `30px 0` at `<=375px` to ensure consistent band gaps and small-screen compression.
  - Why: Full-bleed and banded sections should use the major gap of `50px` to visually separate content blocks on mobile.

- Change 3 — CertificationCard normalized (mobile-only):
  - Adjusted `CertificationCard.module.css` mobile rules to reduce overlap and standardize spacing:
    - At `<=768px`: `margin-top: -30px; margin-bottom: 0; padding: 36px 0;`
    - At `<=375px`: `margin-top: -20px; margin-bottom: 0; padding: 30px 0;`
  - Why: The previous large negative margins caused inconsistent gaps into adjacent sections on mobile. Normalizing to the standard/mobile minimal gaps produces a cleaner stack without affecting desktop.

- Change 4 — CTASection updated (mobile-only):
  - Updated `CTASection.module.css` to `padding: 50px 0` at `<=768px` and `30px 0` at `<=375px`, preserving full-bleed behavior and desktop spacing.
  - Why: CTA is a banded section; adopting the `50px` major gap creates consistent separation across mobile.

- Change 5 — BusinessSection updated (mobile-only):
  - Updated `BusinessSection.module.css` to `padding: 50px 0` at `<=768px` (replacing `48px` in both mobile rules) and `30px 0` at `<=375px` (replacing `40px`).
  - Why: Business is full-bleed; aligning to the `50px` mobile gap ensures uniform vertical rhythm in banded sections.