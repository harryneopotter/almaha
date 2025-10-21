# Al Maha Foods - Styling Guide & Reusable Components

## Overview
This document outlines the styling patterns and reusable components for the Al Maha Foods website. The design system ensures consistency across all pages while maintaining the exact visual fidelity of the original WordPress site.

## Reusable Components

### 1. Header Component
**File:** `src/components/Header.jsx` + `src/styles/components/Header.module.css`

**Usage:** Import and use on all pages
```jsx
import Header from '../components/Header';

// In your page component
<Header />
```

**Key Features:**
- Fixed positioning with 90px top padding compensation
- Logo: 189px × 69px dimensions
- Navigation: Flexbox layout with equal-width menu items
- Dropdown menus with golden yellow background
- Responsive mobile menu

**Styling Notes:**
- Container padding: 36px from edges
- Menu items use `flex: 1` for equal distribution
- Hover states with golden yellow background and top border
- Font: Roboto, 16px, 400 weight

### 2. Footer Component
**File:** `src/components/Footer.jsx` + `src/styles/components/Footer.module.css`

**Usage:** Import and use on all pages
```jsx
import Footer from '../components/Footer';

// In your page component
<Footer />
```

**Key Features:**
- Four-column layout: Logo, Navigation, Useful Links, Contact Info
- Social media icons with Font Awesome
- Copyright notice positioned on the right
- Responsive design for mobile

**Styling Notes:**
- Main padding: 50px top, 0 bottom
- Container padding: 36px from edges
- Column widths: 308px + 50px + 140px + 30px + 160px + 72px + 308px
- Font: Roboto for headings, Open Sans for descriptions

### 3. CTA Section Component
**File:** `src/components/home/CTASection.jsx` + `src/styles/components/CTASection.module.css`

**Usage:** Place before footer on all pages
```jsx
import CTASection from '../components/home/CTASection';

// In your page component
<CTASection />
```

**Key Features:**
- Two-column layout with sidebar
- White background content area
- Golden yellow button with hover effects
- Consistent with other two-column sections

## Two-Column Layout Pattern

### Standard Two-Column Section Structure
This pattern is used for Welcome, International Presence, Domestic Presence, News, Business, and CTA sections.

#### HTML Structure
```jsx
<section className={styles.sectionName}>
  <div className={styles.container}>
    <div className={styles.content}>
      {/* Left Column - Sidebar */}
      <div className={styles.textColumn}>
        <div className={styles.divider}></div>
        <h2 className={styles.heading}>Section Title</h2>
      </div>

      {/* Right Column - Main Content */}
      <div className={styles.mainColumn}>
        <div className={styles.divider}></div>
        <div className={styles.description}>
          <p>Main content text here...</p>
        </div>
        {/* Additional content specific to section */}
      </div>
    </div>
  </div>
</section>
```

#### CSS Structure
```css
/* Section Container */
.sectionName {
  padding: 72px 0; /* Adjust as needed */
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 36px; /* 36px from edges */
}

.content {
  display: grid;
  grid-template-columns: 210px 774px; /* Left sidebar + Main content */
  column-gap: 72px;
  max-width: 1056px;
  margin: 0 auto;
}

/* Left Column - Sidebar */
.textColumn {
  position: relative;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: #eecc6b; /* Golden yellow for left column */
  border: none;
  margin: 0 0 20px 0;
}

.heading {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: #000000;
  line-height: 1.5;
  letter-spacing: -0.48px;
  margin: 0;
  margin-top: 72px; /* Space between divider and heading */
  margin-bottom: 24px;
}

/* Right Column - Main Content */
.mainColumn {
  position: relative;
}

.mainColumn .divider {
  background-color: #dddddd; /* Light gray for right column */
}

.description p {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: #000000;
  line-height: 1.5;
  letter-spacing: -0.48px;
  margin: 0;
  margin-top: 36px; /* Space between divider and content */
}
```

### Responsive Breakpoints
```css
/* Tablet */
@media (max-width: 1024px) {
  .content {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  .heading {
    margin-top: 40px;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .container {
    padding: 0 20px;
  }
  
  .sectionName {
    padding: 40px 0;
  }
}
```

## Typography System

### Font Families
- **Primary:** 'Roboto', sans-serif
- **Secondary:** 'Open Sans', 'Lato', system fallbacks
- **Icons:** 'FontAwesome' (4.7.0)

### Text Styles

#### Main Headings (Left Sidebar)
```css
.heading {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: #000000;
  line-height: 1.5;
  letter-spacing: -0.48px;
}
```

#### Main Content Text
```css
.description p {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  color: #000000;
  line-height: 1.5;
  letter-spacing: -0.48px;
}
```

#### Small Text (Dates, etc.)
```css
.smallText {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: rgb(48, 49, 51);
  line-height: 21px;
}
```

## Color Palette

### Primary Colors
- **Golden Yellow:** `#eecc6b` (separators, accents)
- **Dark Gray:** `#303133` (text, icons)
- **Light Gray:** `#dddddd` (right column separators)
- **Red:** `#fe0000` (links, accents)
- **White:** `#ffffff` (backgrounds)

### Background Colors
- **Page Background:** `#ffffff`
- **Section Backgrounds:** `#ffffff` or `#f8f9fa`
- **Card Backgrounds:** `#ffffff` with shadows

## Button Styles

### Primary Button (Yellow)
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
}

.primaryButton:hover {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(48, 49, 51);
  color: rgb(48, 49, 51);
}
```

## Layout Guidelines

### Container Widths
- **Max Container:** 1400px
- **Content Area:** 1056px (210px + 72px + 774px)
- **Sidebar:** 210px
- **Main Content:** 774px
- **Gap:** 72px

### Spacing System
- **Edge Padding:** 36px
- **Section Padding:** 72px top/bottom
- **Element Margins:** 20px, 24px, 36px, 72px
- **Text Spacing:** 1.5 line-height

### Grid System
- **Two-Column:** 210px sidebar + 774px main content
- **Equal Columns:** 516px + 516px (for Featured Article)
- **Four-Column Footer:** 308px + 190px + 190px + 308px

## Animation Guidelines

### Scroll Animations
```css
.content {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.6s ease;
}

.content.animate {
  opacity: 1;
  transform: translateY(0);
}
```

### Hover Effects
- **Links:** Color change to red (`#fe0000`)
- **Buttons:** Background to transparent, border/text to dark gray
- **Menu Items:** Golden yellow background with top border

## Implementation Checklist

### For New Two-Column Sections:
1. ✅ Use the standard HTML structure
2. ✅ Apply the CSS grid layout (210px + 774px)
3. ✅ Add golden yellow divider to left column
4. ✅ Add light gray divider to right column
5. ✅ Use Roboto font for all text
6. ✅ Apply correct spacing (72px, 36px, 24px, 20px)
7. ✅ Make responsive with media queries

### For New Pages:
1. ✅ Import Header and Footer components
2. ✅ Add CTA section before footer
3. ✅ Use Layout component for consistent structure
4. ✅ Apply 36px edge padding to all sections
5. ✅ Use the two-column pattern for content sections

## File Organization

```
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   ├── Layout.jsx
│   └── home/
│       ├── CTASection.jsx
│       └── [other section components]
├── styles/
│   ├── components/
│   │   ├── Header.module.css
│   │   ├── Footer.module.css
│   │   ├── CTASection.module.css
│   │   └── [other component styles]
│   └── global.css
└── pages/
    └── [page components using the patterns]
```

This styling guide ensures consistency across all pages while maintaining the exact visual fidelity of the original WordPress design.
