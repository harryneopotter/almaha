# Layout Analysis & Mobile Fix Plan

This document outlines the intended layout of the homepage and the current known issues on mobile devices. It serves as a shared understanding to ensure the next set of fixes are accurate and effective.

## 1. Intended Layout (My Understanding)

### Desktop Layout (`> 1024px`)

*   **Full-Bleed Sections:** The following sections should span the full width of the browser viewport, edge-to-edge:
    *   `HeroSlider`
    *   `VisionBlock` (with video background)
    *   `CTASection`
    *   `DomesticPresence` (map section)
    *   `BusinessSection`
*   **Contained Sections:** The following sections should be centered within a main content column (max-width of `1060px` or `1128px` depending on viewport):
    *   `WelcomeSection`
    *   `CertificationCard`
    *   `InternationalPresence` (map section)
    *   `NewsSection`
    *   `FeaturedArticle`
*   **Two-Column Layouts:** Several sections use a two-column layout on desktop:
    *   **Welcome Section:** Left column has certification badges, right column has text.
    *   **Map Sections (`InternationalPresence`, `DomesticPresence`):** Left column has a title, right column has the map and description.
    *   **News/Business Sections:** Left column has a title, right column has the list of items.
    *   **Featured Article:** Left column has the magazine cover image, right column has the article text.

### Mobile Layout (`< 768px`)

*   **All sections should be edge-to-edge** with consistent internal padding (`16px`). There should be no horizontal scrollbar.
*   **Welcome Section:** The left column (with badges) should be **completely hidden**. The right column (with text) should take up the full width.
*   **Other Two-Column Sections:** The left column (containing the title) should be hidden, and a duplicate title should appear **above** the content within a single, full-width column.
*   **Featured Article:** The image and text should stack vertically, with the image on top.
*   **Hero Slider:** The height should be significantly reduced to avoid pushing content too far down.
*   **Vision Block:** The video background should still be visible and cover the section's background.

---

## 1.5 Live Site Mobile Layout Analysis

Based on analysis of the live site HTML (`html_files/Al-maha – Al-maha.html`), the following mobile layout patterns were discovered:

### Visibility Classes Pattern
The live site uses a visibility class system for responsive behavior:
- `mobile-hidden` - Hides elements on mobile viewports (max-width: 569px)
- `tablet-hidden` - Hides elements on tablet viewports (570px - 959px)  
- `desktop-hidden` - Hides elements on desktop viewports (min-width: 960px)

### Two-Column Layout Mobile Behavior

**Desktop Structure:**
- Uses Bootstrap-like grid: `col-lg-3` (left sidebar) + `col-lg-9` (right content)
- Left column typically contains section titles/headings
- Right column contains main content (text, images, maps, lists)

**Mobile Transformation:**
- Left column (`col-lg-3`) is completely hidden using `mobile-hidden` class or responsive CSS
- The title from the left column appears as a duplicate above the content in a single full-width column
- All columns stack vertically and become full-width
- Content maintains consistent `16px` horizontal padding

### Section-Specific Mobile Patterns

**Welcome Section:**
- Left column with certification badges (`col-lg-3`) → Hidden on mobile
- Right column with text (`col-lg-9`) → Full width on mobile

**Map Sections (International/Domestic Presence):**
- Left column with title (`col-lg-3`) → Hidden on mobile
- Title appears above map content in mobile view
- Right column with map (`col-lg-9`) → Full width on mobile

**News/Business Sections:**
- Left column with section title (`col-lg-3`) → Hidden on mobile
- Title appears above list items in mobile view
- Right column with items list (`col-lg-9`) → Full width on mobile

**Featured Article:**
- Two-column grid (`col-lg-*` + `col-lg-*`) → Stacks vertically on mobile
- Image column appears on top
- Text column appears below

**Vision Section:**
- Live site uses **two separate sections** for desktop vs mobile
- Desktop version: Full video background with overlay content
- Mobile version: Separate `home-mobile-video` class structure
- Our implementation should ensure video background works responsively

### Content Width Control

- `limit-width` class constrains content (similar to our `contentWrapper` max-width: 1060px/1128px)
- Gray background sections have full-bleed backgrounds via `width: 100vw` + `calc(50% - 50vw)`
- Content inside gray sections stays within `limit-width` constraints
- Mobile padding: Consistent `16px` horizontal padding on all sections

### Full-Bleed Background Pattern

Sections with gray backgrounds (`BusinessSection`, `DomesticPresence`, `CTASection`):
- Section wrapper: Full-bleed background (edge-to-edge)
- Content container: Centered with max-width constraint
- Background stretches viewport width, content stays contained

### Corrected Architecture Understanding

**Sections outside `contentWrapper` (truly full-bleed):**
- `HeroSlider` ✓
- `VisionBlock` ✓ (moved outside)

**Sections inside `contentWrapper` (with contained content):**
- `WelcomeSection` ✓
- `CertificationCard` ✓
- `InternationalPresence` ✓
- `NewsSection` ✓
- `BusinessSection` ✓ (gray background, but content contained)
- `DomesticPresence` ✓ (gray background, but content contained)
- `FeaturedArticle` ✓
- `CTASection` ✓ (gray background, but content contained - moved inside)

---

## 2. Current Issues (As Reported)

Based on your feedback and the screenshots in the `/errors/` directory, these are the current problems on mobile:

1.  **Hero Slider Blank Space (`hero.png`):** The slider does not extend to the right edge of the screen, leaving a white gap. This is likely due to incorrect padding on a parent container.

2.  **Vision Section Misplaced (`vision1.png`, `vision2.png`):** The `VisionBlock` component is incorrectly positioned within the main content flow instead of as a full-bleed section. This breaks its layout and causes the video background to be misplaced.

3.  **Magazine Section Overflow (`magezine1.png`, `magezine2.png`):** The `FeaturedArticle` component's two-column grid does not collapse on mobile, causing its content to overflow the viewport horizontally.

4.  **Left-Aligned Content (`section-issue.png`):** The main content sections are not centered and lack appropriate padding on the left and right, causing them to be flush with the left edge of the screen.

---

## 3. Proposed Plan of Action

Now that we have a clean slate, I will address these issues systematically.

1.  **Fix Global Layout and Padding:**
    *   I will first correct the main layout wrappers (`Layout.module.css` and `Home.module.css`) to properly distinguish between full-bleed sections and contained sections.
    *   I will apply the correct responsive padding to the main content wrapper to fix the left-alignment issue.

2.  **Correct Component Placement:**
    *   I will move the `VisionBlock` and any other misplaced full-bleed components outside of the main content wrapper in `Home.jsx` to their correct positions in the component tree.

3.  **Implement Responsive Stacking:**
    *   I will add targeted media queries to the individual component CSS files (`FeaturedArticle.module.css`, etc.) to ensure their grid layouts stack into a single column on mobile, preventing overflow.

4.  **Adjust Hero Section Height:**
    *   I will apply a responsive height to the `HeroSlider` using CSS `clamp()` to ensure it looks good on all screen sizes.

This methodical approach, starting from the outermost layout and working inwards, should resolve the reported issues without introducing new ones. Please let me know if this plan aligns with your expectations.