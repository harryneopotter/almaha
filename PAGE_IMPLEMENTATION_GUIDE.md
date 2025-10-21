# Al Maha Foods - Page Implementation Guide for Cursor AI

**Version:** 1.0  
**Date:** October 18, 2025  
**Purpose:** Step-by-step instructions for implementing remaining pages with pixel-perfect accuracy

---

## 🎯 Overview

This guide provides bulletproof instructions for implementing the remaining pages of the Al Maha Foods website. All pages must use the existing Header, Footer, and styling system from the Home page.

---

## 📋 Prerequisites

### Files You Need
- ✅ `STYLING_GUIDE.md` - Complete typography and layout standards
- ✅ `src/components/Header.jsx` - Already implemented
- ✅ `src/components/Footer.jsx` - Already implemented  
- ✅ `src/pages/Home.jsx` - Reference implementation
- ✅ `src/pages/Contact.jsx` - Reference implementation
- ✅ HTML files in project root (e.g., `Our Brands – Al-maha.html`)

### Routes Already Set Up
All routes are configured in `src/App.jsx`:
```
/ → Home
/about → About (placeholder)
/what-we-do/exports → Exports (placeholder)
/what-we-do/quality-assurance → Quality Assurance (placeholder)
/what-we-do/domestic-market → Domestic Market (placeholder)
/our-brands → Our Brands (placeholder)
/culture-at-al-maha → Careers/Culture (placeholder)
/corporate-social-responsibility → CSR (placeholder)
/contact-us → Contact (✅ DONE)
```

---

## 🏗️ Standard Page Structure

### Every Page Must Use This Template:

```jsx
import { useEffect } from 'react';
import styles from './PageName.module.css';

function PageName() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.pageName}>
      {/* Hero Banner - REQUIRED */}
      <section className={styles.heroBanner}>
        {/* Hero content */}
      </section>

      {/* Main Content Sections */}
      <section className={styles.mainSection}>
        {/* Content */}
      </section>

      {/* Additional sections as needed */}
    </div>
  );
}

export default PageName;
```

**CRITICAL:** 
- ❌ DO NOT import Header or Footer (Layout component adds them automatically)
- ✅ DO use `margin-top: -90px` on page wrapper to compensate for Layout padding
- ✅ DO scroll to top on mount

---

## 🎨 Layout Patterns

### Pattern 1: Home Page Two-Column Layout
**Used by:** About, Exports, Quality Assurance, Domestic Market, CSR

**Specifications:**
- Container: `max-width: 1400px`, `padding: 0 36px`
- Content wrapper: `max-width: 1056px`, centered
- Grid: `210px` (left sidebar) + `72px` (gap) + `774px` (main content)
- Left column: Golden yellow divider (`#eecc6b`)
- Right column: Light gray divider (`#dddddd`)

**CSS Template:**
```css
.mainSection {
  padding: 72px 0;
  background-color: #ffffff;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 36px;
}

.contentWrapper {
  display: grid;
  grid-template-columns: 210px 774px;
  column-gap: 72px;
  max-width: 1056px;
  margin: 0 auto;
}

.leftColumn {
  position: relative;
}

.leftDivider {
  width: 100%;
  height: 1px;
  background-color: #eecc6b;
  border: none;
  margin: 0 0 20px 0;
}

.heading {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: rgb(48, 49, 51);
  line-height: 28.8px;
  letter-spacing: normal;
  margin: 0;
  margin-top: 72px;
  margin-bottom: 24px;
}

.rightColumn {
  position: relative;
}

.rightDivider {
  width: 100%;
  height: 1px;
  background-color: #dddddd;
  border: none;
  margin: 0 0 20px 0;
}

.description p {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: rgb(48, 49, 51);
  line-height: 28.8px;
  letter-spacing: normal;
  margin: 0;
  margin-top: 36px;
}
```

### Pattern 2: Contact Page Custom Layout  
**Used by:** Contact Us (already done), possibly Our Brands

**Specifications:**
- Container: `max-width: 1400px`, `padding: 0 36px`
- Content wrapper: `max-width: 1104px`
- Grid: `608px` + `36px` gap + `460px`
- Left column has nested content wrapper: `547px` (90% of 608px)

---

## 🖼️ Hero Banner Standard

### All pages use this hero pattern:

**JSX:**
```jsx
<section className={styles.heroBanner}>
  <div 
    className={styles.heroBackground}
    style={{
      backgroundImage: 'url("/assets/images/page-name-hero.jpg")',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center top',
      backgroundAttachment: 'scroll',
      backgroundSize: 'cover'
    }}
  >
    <div className={styles.heroOverlay}></div>
    <div className={styles.heroContent}>
      <h1>Page Title</h1>
    </div>
  </div>
</section>
```

**CSS:**
```css
.heroBanner {
  position: relative;
  height: 450px;
  overflow: hidden;
  background: linear-gradient(135deg, #4a5568 0%, #718096 100%);
}

.heroBackground {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
}

.heroOverlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent);
}

.heroContent {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  z-index: 2;
}

.heroContent h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 56px;
  font-weight: 300;
  color: #ffffff;
  margin: 0;
  letter-spacing: normal;
}
```

---

## 📝 Typography Standards

**FROM STYLING_GUIDE.md - USE THESE EXACTLY:**

### Headings (Roboto Thin - weight 300):
```css
.heading {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: rgb(48, 49, 51);
  line-height: 28.8px;
  letter-spacing: normal;
}
```

### Body Text:
```css
.description p {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: rgb(48, 49, 51);
  line-height: 28.8px;
  letter-spacing: normal;
  margin: 0;
}
```

### Small Text (dates, meta):
```css
.smallText {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: rgb(48, 49, 51);
  line-height: 21px;
}
```

---

## 🔘 Button Standards

### Primary Button (Yellow):
```css
.primaryButton {
  background-color: rgb(236, 197, 88);
  border-color: rgb(236, 197, 88);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 4px 18px -4px;
  color: rgb(0, 0, 0);
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  height: 46.8px;
  padding: 13px 31px;
  text-transform: capitalize;
  transition: all 0.2s ease;
  cursor: pointer;
  border: none;
}

.primaryButton:hover {
  background-color: rgba(0, 0, 0, 0);
  border: 1px solid rgb(48, 49, 51);
  color: rgb(48, 49, 51);
}
```

---

## 🎨 Color Palette

```css
/* Primary Colors */
--golden-yellow: #eecc6b;
--dark-gray: #303133; /* rgb(48, 49, 51) */
--light-gray: #dddddd;
--red-accent: #fe0000;
--white: #ffffff;

/* Background Colors */
--page-bg: #ffffff;
--section-bg-alt: #f8f9fa;
```

---

## 📦 Implementation Workflow

### For Each Page:

1. **Create Page File:**
   ```
   src/pages/PageName.jsx
   src/pages/PageName.module.css
   ```

2. **Update App.jsx Route:**
   ```jsx
   import PageName from './pages/PageName';
   // ...
   <Route path="page-route" element={<PageName />} />
   ```

3. **Extract Content from HTML File:**
   - Open corresponding HTML file (e.g., `About – Al-maha.html`)
   - Find main content sections
   - Extract text, images, and structure
   - Note which layout pattern it uses

4. **Determine Layout Pattern:**
   - **Two-column (210px + 774px)?** → Use Home page pattern
   - **Custom layout?** → Document exact measurements from live site

5. **Build Hero Section:**
   - Copy hero template above
   - Add correct background image to `/public/assets/images/`
   - Update title

6. **Build Content Sections:**
   - Use correct layout pattern
   - Apply typography from STYLING_GUIDE.md
   - Add dividers (golden yellow left, light gray right)

7. **Handle Images:**
   - Save all images to `/public/assets/images/page-name/`
   - Use paths: `/assets/images/page-name/filename.jpg`

8. **Responsive Breakpoints:**
   ```css
   @media (max-width: 1024px) {
     .contentWrapper {
       grid-template-columns: 1fr;
       gap: 40px;
     }
   }

   @media (max-width: 768px) {
     .container {
       padding: 0 20px;
     }
     
     .mainSection {
       padding: 50px 0;
     }
   }
   ```

---

## ✅ Quality Checklist

### Before Marking Page as Complete:

- [ ] Hero banner renders correctly with image
- [ ] Layout matches live site (use DevTools to measure)
- [ ] Typography uses exact specs from STYLING_GUIDE.md
- [ ] Dividers are correct colors (golden yellow / light gray)
- [ ] Buttons use correct styling and hover states
- [ ] Images load from `/public/assets/images/`
- [ ] Page scrolls to top on load
- [ ] Responsive design works on mobile/tablet
- [ ] No console errors
- [ ] Navigation links work correctly

---

## 🚨 Common Mistakes to Avoid

1. ❌ **Importing Header/Footer** - Layout adds them automatically
2. ❌ **Wrong typography** - Always use STYLING_GUIDE.md specs
3. ❌ **Hardcoded colors** - Use exact hex/rgb values from guide
4. ❌ **Wrong column widths** - Measure from live site, don't guess
5. ❌ **Missing margin-top compensation** - Page needs `-90px` top margin
6. ❌ **Inconsistent spacing** - Use standard padding values (72px, 36px, 24px, 20px)
7. ❌ **Wrong divider colors** - Left = `#eecc6b`, Right = `#dddddd`

---

## 📚 Reference Files

### Must Read Before Starting:
1. `STYLING_GUIDE.md` - Complete design system
2. `src/pages/Home.jsx` - Two-column pattern reference
3. `src/pages/Contact.jsx` - Custom layout reference

### HTML Source Files (in root):
- `Al-maha – about.html`
- `Exports – what-we-do.html`
- `Quality Assurance – Al-maha.html`
- `Domestic Market – Al-maha.html`
- `Our Brands – Al-maha.html`
- `Culture at Al Maha – career.html`
- `Corporate Social Responsibility – Al-maha.html`

---

## 🎯 Page-Specific Notes

### Our Brands Page:
- Uses custom brand card layout
- Has product images with descriptions
- Each brand card needs consistent styling
- "View More" buttons for some brands

### About Page:
- Multiple sections with team/mission content
- May have image galleries
- Uses standard two-column layout

### Exports/Quality/Domestic:
- Technical content pages
- Standard two-column layout
- May have data tables or lists

### CSR Page:
- Initiative cards/sections
- Image-heavy content
- Standard two-column layout

### Careers Page:
- Job listings section
- Application form
- Custom layout for job cards

---

## 🔧 File Organization

```
src/
├── pages/
│   ├── Home.jsx ✅
│   ├── Contact.jsx ✅
│   ├── About.jsx
│   ├── Exports.jsx
│   ├── QualityAssurance.jsx
│   ├── DomesticMarket.jsx
│   ├── OurBrands.jsx
│   ├── Careers.jsx
│   └── CSR.jsx
├── styles/
│   └── (individual .module.css files)
public/
└── assets/
    └── images/
        ├── home/ ✅
        ├── contact/ ✅
        ├── about/
        ├── exports/
        ├── quality/
        ├── domestic/
        ├── brands/
        ├── careers/
        └── csr/
```

---

## 💡 Pro Tips

1. **Use Home.jsx as template** - Copy its structure for two-column pages
2. **Test responsiveness early** - Check mobile at 768px, tablet at 1024px
3. **Measure, don't guess** - Use DevTools to get exact dimensions from live site
4. **Copy typography exactly** - Weight 300, line-height 28.8px, etc.
5. **Keep images organized** - One folder per page in `/public/assets/images/`
6. **Use CSS modules** - Prevents style conflicts between pages

---

## 🎬 Getting Started

1. Pick a page (recommend: About or Our Brands for first attempt)
2. Open corresponding HTML file
3. Create new `.jsx` and `.module.css` files
4. Copy hero section template
5. Determine layout pattern (two-column or custom)
6. Build section by section
7. Test and validate against checklist

---

**Good luck! This guide should make Cursor AI's job much easier.** 🚀

If you encounter issues, refer back to `STYLING_GUIDE.md` and the completed `Home.jsx` and `Contact.jsx` pages for reference implementations.
