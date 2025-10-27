# Page-by-Page Differences & Fix Plan

This document consolidates **all visual / structural differences** discovered so far between the React rebuild (components under `src/pages/` in this repo) and the original WordPress HTML exports plus live-site screenshots. Each section lists:

* **Reference** – The source of truth (HTML export + screenshot)
* **React Component** – Current React page/component
* **Differences** – Bullet-point list of discrepancies (structure, content, styling, behaviour)
* **Fix Plan** – Concrete tasks required to bring the React page to full parity

> IMPORTANT  The HTML exports often contain legacy or hidden content that never appears on the **reference screenshots**.
> When compiling differences or fix-lists **always cross-check the screenshots first** and ignore any HTML-only sections that are not visible in the final design.
>
> NOTE  As we progress through each page, additional findings will be appended here and existing notes updated.

---

## 1. Exports – *what-we-do* (`Exports.jsx` vs `Exports – what-we-do.html`)

### Confirmed Differences (2025-10-17)

1. **Hero Banner**
   * React uses `exports-hero.jpg`, whereas the reference HTML/live site uses **`export-banner.jpg`**.
   * The banner on the reference site appears directly beneath the global navigation; the React page is currently **missing this hero image** altogether.
   * The reference banner includes a subtle dark gradient overlay and is ~50 vh tall; React must replicate this treatment.
2. **Left-column (Sidebar) Heading**
   * The heading text should read **“Exports Profile”** and follow the standard left-column heading style specified in the Styling Guide (Roboto 24 px, weight 300, golden-yellow divider above, 72 px top offset).
3. **Right-column Content Styling**
   * All inline sub-headings (e.g. *Infrastructure*, *Brands*) and paragraph text should reuse the text styles defined in the Styling Guide – 24 px, weight 300, line-height 1.5, justified on desktop.
   * There are **no bullet or chevron list markers** in this section on the reference site; ensure the React copy stays as plain paragraphs.
4. **Brands Sub-section Media**
   * The “green rice field” image is part of the Brands subsection and must appear **immediately beneath the text copy** inside the right column.
   * The reference site does **not** display any logo strip or grid in this area; remove the current logo grid/strip from React.

### Updated Fix Plan

| Priority | Task | Owner | Notes |
|----------|------|-------|-------|
| 🔴 High | Add correct hero banner `export-banner.jpg`, include dark gradient overlay, constrain height to ~50 vh | FE | Use CSS `::after` for overlay | 
| 🔴 High | Update sidebar heading text to “Exports Profile” and apply Styling-Guide left-column styles; ensure sidebar is sticky (`position: sticky; top: 120px`) | FE/CSS | Reuse `SidebarHeading` component if available | 
| 🟠 Med | Remove logo grid/strip; render single green-rice-field image below Brands text | FE | Optimise image for responsive sizes | 
| 🟠 Med | Apply Styling-Guide typography classes to all headings & paragraphs in right column; justify text on desktop; confirm no list-style markers | CSS | 
| 🟡 Low | Retain global tasks for section dividers & `data-section` attributes (see Global Issues) | — | 

---

## 2. About Page (`About.jsx` vs `Al-maha – about.html`)

### Differences (initial pass)
1. **Hero Banner**
   * Image file mismatch (`about-hero.jpg` vs `about-banner.jpg`); React lacks dark gradient overlay.
   * Title in HTML uses lighter font weight (300) and tighter line-height.
2. **Main Intro (data-section 1)**
   * HTML has a narrow left sidebar with vertical gold line + heading; React shows heading inside main column; sidebar missing.
   * Paragraphs in React not justified; spacing differs.
3. **Download Brochure CTA**
   * HTML includes bordered button with left arrow icon; React uses plain link-style text.
4. **Vision & Mission Section (data-section 2)**
   * Original arranges Vision (left column) / Mission (right column) side-by-side with divider `data-border` lines; React stacks them vertically on desktop.
   * Typography differences – italic weight, font-size.
5. **Values / Culture Section (data-section 3)**
   * HTML lists six values in **two columns** with custom numbered orange icons; React lists in single column bullets.
   * Background tint in HTML (light gray) missing in React.
6. **Team Section (data-section 4)**
   * HTML displays circular staff photos in a 4-column grid with hover overlay; React currently uses 3-column square cards without overlay.
   * Social icons appear on hover in HTML; missing in React.
7. **Section Separators & Sticky Sidebar**
   * Same issues as Exports: missing thin orange `divider-wrapper` and sticky behaviour for sidebars.

### Fix Plan
| Priority | Task | Responsible | Notes |
|----------|------|-------------|-------|
| 🔴 High | Correct hero banner image & overlay | Frontend |
| 🔴 High | Add left sidebar with heading & vertical line; make sticky | Frontend/CSS |
| 🟠 Med | Justify intro paragraphs & adjust margins | CSS |
| 🟠 Med | Rebuild Vision/Mission two-column grid; use `display:grid` on desktop, stack on mobile | Frontend |
| 🟠 Med | Implement numbered value icons + 2-column list, light-gray background | Frontend/CSS |
| 🟠 Med | Team grid: use circular images, 4-col layout, add hover overlay with social icons | Frontend |
| 🟡 Low | Section separators (`divider-wrapper`) | CSS |
| 🟡 Low | Add `data-section` attributes if needed | Frontend |

---

## 3. Quality Assurance (`QualityAssurance.jsx` vs `Quality Assurance – Al-maha.html`)

### Differences (initial pass)
1. **Hero Banner**
   * Image mismatch; overlay gradient missing.
   * Title font-weight/size differs (HTML uses weight 300).
2. **Main Section (data-section 1)**
   * Sidebar heading "Quality Assurance" present in HTML sticky sidebar; missing in React or positioned inside main column.
   * Four process bars: HTML uses a thin orange track + animated fill; React uses default blue progress bars.
   * Paragraph alignment (justify vs left), bullet styling, spacing.
   * Gallery: HTML has staggered masonry (2 large + 4 small) with lightbox; React shows 2×2 uniform grid.
   * Brochure download button (borderless, orange) present in HTML; React uses default button with primary colour.
3. **CTA Footer (data-section 2/3)**
   * Layout matches but section separator & sticky sidebar issues remain.

### Fix Plan
| Priority | Task | Responsible | Notes |
|----------|------|-------------|-------|
| 🔴 High | Add sticky sidebar with heading; include divider | Frontend |
| 🔴 High | Re-style progress bars: thin gray background, orange fill, animate on viewport | Frontend + CSS + `react-intersection-observer` |
| 🟠 Med | Implement masonry gallery + lightbox | Frontend |
| 🟠 Med | Update brochure button styling (orange, no border, left arrow icon) | CSS |
| 🟡 Low | Hero overlay gradient & font weight | CSS |
| 🟡 Low | Add `data-section` attributes | Frontend |

---

## 4. Domestic Market (`DomesticMarket.jsx` vs `Domestic Market – Al-maha.html`)

### Differences (initial pass)
1. **Hero Banner**
   * React uses `domestic-banner.jpg` but lacks the dark gradient overlay found in the reference HTML/screenshot.
   * Banner in HTML spans full viewport height; React is ~60 vh and starts lower due to extra top margin.
   * Heading font-weight in HTML is lighter (300) and vertically centred – React appears bolder and slightly lower.
2. **Left-column (Sidebar) Heading**
   * HTML sidebar shows **“Domestic Market”** with the standard gold divider above and is **sticky** on scroll.
   * React sidebar currently shows just **“Domestic”** and is static.
3. **Right-column Intro Copy**
   * Typography differences: HTML uses 24 px, weight 300, justified; React uses 20 px left-aligned.
   * Spacing: reference has 48 px bottom margin after H2; React ~24 px.
4. **India Map**
   * Map image positioning differs: HTML floats right at 60 % width with text wrapping; React renders full-width block below paragraph.
5. **Products Section**
   * Reference lists **6 product blocks** (image left, text right) stacked vertically; React shows **3 cards** in a 3-column grid.
   * Missing products: Royal Choice, Everyday, Rozana.
   * Each product block in HTML includes an orange border and subtle hover shadow; React cards are flat.
6. **Section Dividers & Sticky Sidebar**
   * Same global issues as Exports/About – missing `divider-wrapper` thin orange lines and `StickySidebar` behaviour.

### Fix Plan
| Priority | Task | Responsible | Notes |
|----------|------|-------------|-------|
| 🔴 High | Add dark gradient overlay & adjust hero to 100 vh; match lighter heading weight & vertical centring | FE/CSS | Reuse `HeroBanner` component with overlay option |
| 🔴 High | Replace sidebar heading text with “Domestic Market”; implement `StickySidebar` wrapper | FE |
| 🟠 Med | Update intro typography (24 px, weight 300, justify, spacing) | CSS |
| 🟠 Med | Float India map right on desktop; ensure responsive stacking on mobile | FE/CSS |
| 🟠 Med | Rebuild products list: 6 stacked product blocks with image-left / text-right layout, orange border & hover shadow | FE |
| 🟡 Low | Add divider lines & `data-section` IDs | FE/CSS |

---

## 5. Our Brands (`OurBrands.jsx` vs `Our Brands – Al-maha.html`)

### Differences (initial pass)
1. **Hero Banner**
   * React hero present but missing dark overlay; heading weight heavier than reference (should be 300).
   * HTML banner height = 100 vh; React ~60 vh.
2. **Left-column (Sidebar) Heading**
   * Reference sidebar reads **“Our Brands”** with gold divider and is sticky; React heading is inside main column and non-sticky.
3. **Brands Listing Layout**
   * HTML displays each brand in a **single-column stacked layout** (image top, descriptive text below).
   * React shows **3-column grid** of cards with limited copy.
   * Missing brands in React: Al Maha Sella, Punjabi Al Maha White, Perfect Choice (multiple SKUs).
4. **Typography & Spacing**
   * Reference uses 24 px weight 300 paragraphs; React uses 18-20 px.
   * More generous 64 px vertical spacing between brand blocks in HTML.
5. **Section Dividers & Sticky Sidebar**
   * Same global issues as above.

### Fix Plan
| Priority | Task | Owner | Notes |
|----------|------|-------|-------|
| 🔴 High | Apply dark overlay & full-viewport hero height; lighten heading weight | FE/CSS |
| 🔴 High | Move “Our Brands” heading to left sticky sidebar with divider | FE |
| 🟠 Med | Convert brands grid into stacked blocks matching reference (image top, text below) | FE |
| 🟠 Med | Add missing brand entries with images & copy extracted from HTML | Content/FE |
| 🟡 Low | Adjust typography sizes & spacing; add divider lines | CSS |

---

## 6. Corporate Social Responsibility (`CSR.jsx` vs `Corporate Social Responsibility – Al-maha.html`)

### Differences (initial pass)
1. **Hero Banner**
   * Image file mismatch (`csr-hero.jpg` vs `csr-banner.jpg`) and missing dark gradient overlay.
   * Heading “CSR” weight heavier in React (should be 300) and vertically mis-aligned.
2. **Section 1 – CSR Initiatives**
   * Sidebar heading “CSR Initiatives” present in HTML sticky left column; React shows heading inside main column.
   * Two-column grid in HTML (text left, image right) with 40 px gutter; React stacks on mobile but should be side-by-side on desktop.
3. **Section 2 – CSR Activities**
   * Reference has alternating layout (image left / text right) with subtle background tint; React uses same layout for all items and lacks tint.
   * Activity cards in HTML have orange left border and fade-in animation.
4. **Section 3 – Social Responsibility**
   * Similar discrepancies: sidebar heading missing/sticky, divider lines absent, typography weight/size differences.
5. **Gallery / Media**
   * Reference includes a 3×2 gallery with lightbox; React shows single static image.
6. **Download Report CTA**
   * HTML has orange borderless button with left arrow icon; React uses plain link.
7. **Global Issues**
   * StickySidebar, divider lines, hero overlay, typography.

### Fix Plan
| Priority | Task | Responsible | Notes |
|----------|------|-------------|-------|
| 🔴 High | Correct hero banner & overlay, adjust heading weight/position | FE/CSS |
| 🔴 High | Implement sticky sidebar headings for each CSR section | FE |
| 🟠 Med | Build responsive two-column layouts with alternating image/text positions | FE/CSS |
| 🟠 Med | Add background tints & orange left borders to activity cards; add fade-in on scroll | CSS/JS |
| 🟠 Med | Implement 3×2 gallery with lightbox using `ImageGallery` component | FE |
| 🟢 Low | Replace link with styled orange button (left arrow icon) | CSS |
| 🟡 Low | Divider lines, `data-section` IDs, global typography | FE/CSS |

---

## 7. Career / Culture at Al Maha (`CultureAtAlMaha.jsx` vs `Culture at Al Maha – career.html`)

### Differences (initial pass)
1. **Hero Banner**
   * React shows correct image but lacks the dark overlay present on the reference site.
   * Heading weight should be lighter (300) and vertically centred; React version bolder & slightly low.
   * Reference banner height ≈ 100 vh; React ~60 vh.
2. **Sticky Sidebar Headings**
   * HTML uses a narrow left sidebar for each content block ("Work With Us", "Company Culture", etc.) with gold divider and sticky behaviour.
   * React renders these headings in the left column but the column itself isn’t sticky (scrolled away on page scroll).
3. **Work With Us Section**
   * Image alignment: reference places sidebar image flush with divider; React image has extra padding/margin.
   * Typography mismatch (24 px / weight 300 in reference vs 20 px / bold in React), text not justified.
4. **Company Culture Values Grid**
   * Reference shows 5-column icon grid with equal spacing; React grid breaks to 3 columns on desktop and icons vary in size.
   * Missing subtle hover enlarge + caption fade-in from reference.
5. **Work Culture @ Al Maha Checklist**
   * Reference lists 13 checklist items in two rows of icon-with-caption blocks; React stacks all 13 vertically in a single column.
   * Several captions truncated in React (e.g. "Always aim perfection amid° your things with \"Zero Error\"").
6. **Score Card & Guinness Certificate**
   * Reference displays images side-by-side with 40 px gutter; React stacks vertically.
   * Missing light shadow / border around images.
7. **Life @ Al Maha Gallery**
   * Reference uses masonry/justified gallery with lightbox; React uses simple 3-column grid without lightbox or hover zoom.
8. **Global Issues**
   * Same missing `divider-wrapper` thin orange lines, global typography tokens, and `data-section` attributes as other pages.

### Fix Plan
| Priority | Task | Responsible | Notes |
|----------|------|-------------|-------|
| 🔴 High | Add dark gradient overlay & full-viewport hero; lighten heading weight | FE/CSS | Reuse shared `HeroBanner` component |
| 🔴 High | Implement `StickySidebar` for all left-column headings (Work With Us, Company Culture, Work Culture, Life@almaha) | FE |
| 🟠 Med | Update typography in all paragraphs (24 px, weight 300, justified) and adjust spacing to match reference | CSS |
| 🟠 Med | Rebuild Company Culture values: responsive 5-column grid, equal icon sizes, hover enlarge + caption reveal | FE/CSS |
| 🟠 Med | Convert Work Culture checklist into 2-row responsive icon grid; ensure full captions display | FE |
| 🟠 Med | Arrange Score Card & Guinness Certificate images side-by-side on desktop, stack on mobile; add subtle shadow/border | FE/CSS |
| 🟢 Low | Replace gallery with masonry/justified gallery + lightbox (`react-images`) | FE |
| 🟡 Low | Add divider lines & `data-section` IDs; ensure global typography variables | FE/CSS |

---

# Global / Reusable Issues
These items affect multiple pages and should be addressed via shared components or CSS utilities.

| Priority | Issue | Action |
|----------|-------|--------|
| 🔴 High | **Sticky left sidebar** on all two-column pages | Implement reusable `StickySidebar` wrapper using `position: sticky` or `react-sticky`. |
| 🔴 High | **Section dividers** (`divider-wrapper` thin orange line) | Create `.divider-wrapper` utility class (1 px height, `background:#e7a617`). Replace current `<hr>` or add where missing. |
| 🟠 Med | **Hero banner dark overlay gradient** | Add `::after` overlay in shared `HeroBanner` component. |
| 🟠 Med | **Gallery masonry + lightbox** | Abstract `ImageGallery` component leveraging `react-photo-gallery` & `react-images`. |
| 🟡 Low | **`data-section` attributes & scroll-spy** | Optional: add IDs/data attributes & implement scroll-spy if required. |
| 🟡 Low | **Typography consistency** | Ensure global typography variables (font-family, weights, line-height) match WP export. |

---

# Next Steps
1. Complete detailed comparisons for remaining pages (Domestic Market, Our Brands, CSR, Career-Culture).
2. Update this document with findings & plans.
3. Prioritise implementation starting with global issues and high-impact page-specific fixes.
4. After each fix, run project, build, and use visual regression tests or manual inspection; attach preview URLs for review.