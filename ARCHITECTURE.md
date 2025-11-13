# Al Maha Foods React/Vite Project - Architecture & Design Document

## 1. Project Overview

**Al Maha Foods React/Vite Migration** is a pixel-perfect conversion of the original WordPress site into a modern, production-ready React 18 + Vite application. The project achieves strict visual and functional parity with the live site while implementing modern frontend best practices, optimized performance, and maintainable code architecture.

### 1.1 Core Objectives
- **Visual Parity**: 100% match with live site typography, spacing, layout, and content blocks
- **Performance**: Optimized build output, lazy loading, and efficient asset handling
- **Maintainability**: Clean component architecture, modular styling, and comprehensive documentation
- **Scalability**: Extensible routing, reusable components, and automated testing pipeline

### 1.2 Technology Stack
```json
{
  "framework": "React 18.3.1 with Hooks",
  "buildTool": "Vite 5.1.0",
  "routing": "React Router DOM 6.22.0",
  "styling": "CSS Modules + Global Roboto Font",
  "charts": "amCharts 4.10.39",
  "pdf": "pdfjs-dist 2.16.105",
  "testing": "Playwright 1.42.0",
  "deployment": "Static Build (cPanel/Apache)"
}
```

---

## 2. Architecture Overview

### 2.1 High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Client Browser                           │
│  (Chrome, Firefox, Safari, Edge - Desktop/Mobile/Tablet)   │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                React Application Layer                      │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │  Pages   │  │Components│  │  Hooks   │  │ Context  │  │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘  │
└──────────────────────┬──────────────────────────────────────┘
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                  Build & Asset Pipeline                     │
│  ┌──────────┐  ┌───────────┐  ┌──────────┐  ┌─────────────┐ │
│  │Vite Bundler│→│dist/│→│.htaccess│→│Apache/cPanel│ │
│  └──────────┘  └─────┘  └──────────┘  └─────────────┘ │
└─────────────────────────────────────────────────────────────┘
```

### 2.2 Component Architecture Pattern

The project follows a **hierarchical component architecture** with clear separation of concerns:

```
App (Root)
├── Layout (Shell)
│   ├── Header (Navigation)
│   ├── Main (Route Content)
│   └── Footer (Global Footer)
├── Pages (Route Components)
│   ├── Home (Landing Page)
│   ├── About
│   ├── WhatWeDo
│   ├── Exports
│   ├── QualityAssurance
│   ├── DomesticMarket
│   ├── OurBrands
│   ├── Blog
│   ├── CultureAtAlMaha
│   ├── CSR
│   ├── Contact
│   └── NewsArticle (Dynamic)
└── Components (Reusable UI)
    ├── Home Sections
    ├── Common UI
    └── Article Components
```

---

## 3. Directory Structure & Organization

### 3.1 Root Level Organization

```
almaha-foods-react/
├── src/                          # React source code
├── public/                       # Static assets served as-is
├── html_files/                   # Legacy HTML snapshots (reference)
├── scripts/                      # Build & test automation scripts
├── builds_zip/                   # Production build archives
├── test_artifacts/               # Playwright test outputs
├── misc_archives/                # Non-essential documentation
├── .htaccess                     # Apache redirects (copied to dist/)
└── *.md                         # Documentation files
```

### 3.2 Source Code Structure (`src/`)

```
src/
├── components/                   # Reusable React components
│   ├── Layout.jsx               # Main app shell (Header/Footer)
│   ├── Layout.module.css        # Global layout styles
│   ├── common/                  # Shared UI components
│   │   ├── Lightbox.jsx         # Image gallery modal
│   │   └── Lightbox.module.css
│   ├── home/                    # Home page sections
│   │   ├── HeroSlider.jsx
│   │   ├── BusinessSection.jsx
│   │   ├── CTASection.jsx
│   │   ├── NewsSection.jsx
│   │   └── ... (12+ components)
│   └── article/                 # Article-specific components
│       ├── PdfViewer.jsx        # PDF rendering component
│       └── ArticleLayout.jsx    # Shared article template
├── pages/                       # Route-level page components
│   ├── Home.jsx                 # Landing page
│   ├── About.jsx                # About Us
│   ├── WhatWeDo.jsx             # What We Do (sections)
│   ├── Exports.jsx              # Exports Profile
│   ├── QualityAssurance.jsx     # Quality Assurance
│   ├── DomesticMarket.jsx       # Domestic Market
│   ├── OurBrands.jsx            # Our Brands
│   ├── Blog.jsx                 # Blog index
│   ├── CultureAtAlMaha.jsx      # Culture/Careers
│   ├── CSR.jsx                  # Corporate Social Responsibility
│   ├── Contact.jsx              # Contact Us
│   ├── NewsArticle.jsx          # Dynamic article renderer
│   ├── BusinessArticle.jsx      # Business Connect article
│   └── articles/                # Individual article pages
│       ├── MarketUpdateAugust2025.jsx
│       ├── MarketUpdateJuly2025.jsx
│       └── MarketUpdateJune2025.jsx
├── styles/                      # Global and shared styles
│   ├── components/              # Component style modules
│   └── global.css               # Global typography & resets
├── hooks/                       # Custom React hooks
├── utils/                       # Utility functions
└── App.jsx                      # Root component with routing
```

### 3.3 Public Assets Structure (`public/`)

```
public/
├── assets/                      # Images, documents, media
│   ├── images/                  # Site images
│   ├── documents/               # PDFs and documents
│   └── videos/                  # Video files
├── wp-content/                  # WordPress legacy path compatibility
│   └── uploads/2024/11/         # Privacy Policy PDF
├── fonts/                       # Font files
└── .htaccess                    # Apache redirects
```

---

## 4. Component Architecture & Design Patterns

### 4.1 Page Component Structure

Each page follows a consistent structure pattern:

```jsx
// src/pages/ExamplePage.jsx
import { useEffect } from 'react';
import Layout from '../components/Layout';
import SectionComponent from '../components/home/SectionComponent';
import styles from './ExamplePage.module.css';

export default function ExamplePage() {
  useEffect(() => {
    // Scroll restoration
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <Layout>
      <div className={styles.pageWrapper}>
        {/* Hero Section */}
        <section className={styles.heroSection}>
          <div className="row-container">
            <h1 className={styles.title}>Page Title</h1>
          </div>
        </section>

        {/* Content Section */}
        <section className={styles.contentSection}>
          <div className="row-container">
            <div className={styles.contentGrid}>
              <main className={styles.mainContent}>
                <SectionComponent />
              </main>
              <aside className={styles.sidebar}>
                {/* Sidebar content */}
              </aside>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <CTASection />
        </section>
      </div>
    </Layout>
  );
}
```

### 4.2 Component Design Principles

**1. Functional Components with Hooks**
- All components use functional React with hooks
- No class components (modern React best practice)
- Custom hooks for reusable logic

**2. CSS Modules for Scoped Styling**
- Each component has a corresponding `.module.css` file
- Locally scoped class names prevent conflicts
- Follows BEM-like naming convention within modules

**3. Lazy Loading for Performance**
- Article pages use `React.lazy()` for code splitting
- Reduces initial bundle size
- Improves page load performance

**4. Reusable Section Components**
- Common sections (CTA, News, etc.) shared across pages
- Consistent styling and behavior
- Easy to maintain and update

---

## 5. Routing Architecture

### 5.1 Route Configuration (`src/App.jsx`)

```jsx
// Main Route Structure
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout />}>
      {/* Static Pages */}
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="what-we-do" element={<WhatWeDo />} />
      
      {/* Nested Routes */}
      <Route path="what-we-do/exports" element={<Exports />} />
      <Route path="what-we-do/quality-assurance" element={<QualityAssurance />} />
      <Route path="what-we-do/domestic-market" element={<DomesticMarket />} />
      
      {/* Standalone Pages */}
      <Route path="our-brands" element={<OurBrands />} />
      <Route path="blog" element={<Blog />} />
      <Route path="culture-at-al-maha" element={<CultureAtAlMaha />} />
      <Route path="corporate-social-responsibility" element={<CSR />} />
      <Route path="contact-us" element={<Contact />} />
      
      {/* Redirects for SEO */}
      <Route path="career" element={<Navigate to="/culture-at-al-maha" replace />} />
      <Route path="contact" element={<Navigate to="/contact-us" replace />} />
      
      {/* Dynamic Routes */}
      <Route 
        path="news/:slug" 
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <NewsArticle />
          </Suspense>
        } 
      />
      
      {/* Business Article */}
      <Route 
        path="from-strategy-to-success-the-journey-of-a-visionary-ceo-business-connect" 
        element={
          <Suspense fallback={<div>Loading...</div>}>
            <BusinessArticle />
          </Suspense>
        } 
      />
    </Route>
  </Routes>
</BrowserRouter>
```

### 5.2 Route Categories

**1. Static Routes** (`/about`, `/contact-us`)
- Direct mapping to page components
- Server-side renderable
- SEO-friendly

**2. Nested Routes** (`/what-we-do/exports`)
- Hierarchical structure matching live site
- Shared layout with parent
- Independent components

**3. Dynamic Routes** (`/news/:slug`)
- Article pages with slug parameters
- Lazy loaded for performance
- Shared `NewsArticle` component

**4. Redirect Routes** (`/career` → `/culture-at-al-maha`)
- SEO preservation
- Backward compatibility
- Canonical URL enforcement

---

## 6. Styling Architecture

### 6.1 CSS Module System

**File Naming Convention:**
- Component: `ComponentName.jsx`
- Styles: `ComponentName.module.css`
- Page styles: `PageName.module.css`

**CSS Module Pattern:**
```css
/* src/pages/About.module.css */
.pageWrapper {
  composes: goldSeparator from global;
  padding: 72px 0;
}

.heroSection {
  background: linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%);
  padding: 60px 0;
}

.title {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 300;
  line-height: 36px;
  letter-spacing: -0.48px;
  color: #1a1a1a;
}
```

**Usage in Components:**
```jsx
import styles from './About.module.css';

<div className={styles.pageWrapper}>
  <h1 className={styles.title}>About Al Maha</h1>
</div>
```

### 6.2 Global Typography Standards

```css
/* Global Roboto Font */
font-family: 'Roboto', sans-serif;

/* Paragraphs */
font-size: 20px;
font-weight: 300;
line-height: 35px;
letter-spacing: -0.48px;

/* Headings (h3) */
font-size: 24px;
font-weight: 300;
line-height: 36px;
letter-spacing: -0.48px;

/* Sidebar Headings */
font-size: 24px;
font-weight: 400;
text-transform: uppercase;
letter-spacing: 0.5px;
color: #1a1a1a;

/* Vertical Spacing */
margin-bottom: 72px; /* Between main sections */
```

### 6.3 Spacing System

**Consistent Spacing Variables:**
- `72px` - Major section gaps
- `36px` - Container padding
- `24px` - Component spacing
- `15px` - Header menu gap (fixed)

**CSS Composition Pattern:**
```css
.goldSeparator {
  margin-left: 72px;
  margin-right: 36px;
}
```

### 6.4 Mobile Layout Architecture

**Responsive Breakpoints:**
- Mobile: `max-width: 569px` (phones)
- Tablet: `570px - 959px` (tablets)
- Desktop: `min-width: 960px` (desktop and above)

**Two-Column Layout Pattern:**

Desktop uses a grid system similar to Bootstrap:
- Left sidebar: `col-lg-3` (typically contains section titles)
- Right content: `col-lg-9` (main content area)

Mobile transformation:
```css
/* Hide left column on mobile */
@media (max-width: 768px) {
  .textColumn, .sidebar {
    display: none; /* or use visibility: hidden */
  }
  
  /* Show duplicate title above content */
  .mobileTitle {
    display: block;
  }
  
  /* Full width for remaining content */
  .contentColumn, .mainContent {
    width: 100%;
  }
}
```

**Section Organization:**

**Full-Bleed Sections (outside `contentWrapper`):**
- `HeroSlider` - Edge-to-edge slider
- `VisionBlock` - Full-width video background section

**Contained Sections (inside `contentWrapper`):**
- All other sections with content constrained to max-width

**Gray Background Sections (inside `contentWrapper` but with full-bleed background):**
- `BusinessSection` - Background edge-to-edge, content centered
- `DomesticPresence` - Background edge-to-edge, content centered  
- `CTASection` - Background edge-to-edge, content centered

**Full-Bleed Background Implementation:**
```css
/* Section wrapper - full-bleed background */
.graySection {
  padding: 72px 0;
  background-color: var(--color-light-gray);
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-right: calc(50% - 50vw);
}

/* Content container - centered */
.container {
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Mobile: Prevent horizontal scroll */
@media (max-width: 768px) {
  .graySection {
    width: 100%;
    margin-left: 0;
    margin-right: 0;
    padding-left: 0;
    padding-right: 0;
  }
  
  .container {
    padding: 0 16px; /* Mobile padding */
  }
}
```

**Mobile Padding Standards:**
- Horizontal padding: `16px` on mobile viewports
- Vertical spacing: Reduced from `72px` to `48px` or `40px` on mobile
- Touch targets: Minimum `44x44px` for all interactive elements

---

## 7. Data Flow & State Management

### 7.1 Component Data Flow

```
User Interaction
    ↓
Component Event Handler
    ↓
Custom Hook (if complex logic)
    ↓
Component State (useState)
    ↓
Re-render Component
    ↓
Update UI
```

### 7.2 Props Drilling Pattern

**Page → Section → Component:**
```jsx
// Page level
<Home>
  <BusinessSection data={businessData} />
</Home>

// Section level
<BusinessSection>
  <CertificationCard {...certData} />
</BusinessSection>
```

### 7.3 Intersection Observer Implementation

**Lazy Loading & Animations:**
```jsx
import { useInView } from 'react-intersection-observer';

function AnimatedSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      ref={ref}
      className={`${styles.section} ${inView ? styles.visible : ''}`}
    >
      Content
    </section>
  );
}
```

---

## 8. Build & Deployment Pipeline

### 8.1 Build Process Flow

```
Source Code (src/)
    ↓
Vite Bundler
    ├→ JavaScript Bundles (code-split)
    ├→ CSS Bundles (minified)
    ├→ Asset Optimization (images, fonts)
    └→ Source Maps (development)
    ↓
dist/ Output
    ├→ index.html
    ├→ assets/ (JS, CSS, images)
    ├→ wp-content/ (PDFs, legacy paths)
    └→ .htaccess (Apache config)
    ↓
Postbuild Script
    ├→ Copy .htaccess
    └→ Copy PDF assets
    ↓
Production Ready
```

### 8.2 Build Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "postbuild": "copy .htaccess & PDFs",
    "preview": "vite preview",
    "build:zip": "npm run build && zip dist/"
  }
}
```

### 8.3 Deployment Strategy

**Static Hosting (cPanel/Apache):**
1. Build: `npm run build`
2. Package: `npm run build:zip`
3. Upload: `dist.zip` to cPanel
4. Extract: Root directory
5. Configure: Apache via `.htaccess`

**Key Deployment Features:**
- `.htaccess` for redirects and SEO
- Legacy path compatibility (`/wp-content/`)
- SPA routing support (fallback to `index.html`)
- Gzip compression ready

---

## 9. Testing Strategy

### 9.1 Visual Regression Testing (Playwright)

**Test Structure:**
```javascript
// tests/visual.spec.js
import { test, expect } from '@playwright/test';

test.describe('Visual Regression Tests', () => {
  test('Home page matches snapshot', async ({ page }) => {
    await page.goto('http://localhost:3000/');
    await expect(page).toHaveScreenshot('home.png');
  });
  
    test('CSR page gallery has all images', async ({ page }) => {
    await page.goto('http://localhost:3000/corporate-social-responsibility');
    
    const images = await page.locator('img').count();
    expect(images).toBe(17); // Expected CSR gallery count
    
    // Verify specific images are present
    await expect(page.locator('img[alt*="csr7"]')).toBeVisible();
    await expect(page.locator('img[alt*="Safe-Drinking-Water"]')).toBeVisible();
  });
});
```

**Test Coverage:**
- Desktop (1920x1080)
- Tablet (768x1024)
- Mobile (375x667)

### 9.2 Asset Verification Tests

**Automated Checks:**
- All images load without 404s
- PDFs render correctly
- Font Awesome icons display
- Map components initialize
- Lightbox functionality works

---

## 10. Key Design Patterns & Decisions

### 10.1 Component Composition Pattern

**Problem:** Avoid prop drilling while maintaining reusability

**Solution:** 
- Page components orchestrate sections
- Sections compose smaller components
- Props flow down, events bubble up
- Custom hooks for shared logic

```jsx
// Page orchestrates everything
<AboutPage>
  <HeroSection />
  <ContentSection>
    <MainContent />
    <Sidebar />
  </ContentSection>
  <CTASection />
</AboutPage>
```

### 10.2 CSS Module Naming Convention

**Problem:** Prevent style conflicts in large codebase

**Solution:**
- Local scoping via CSS Modules
- Descriptive class names
- Composition for shared styles
- Global only for typography resets

```css
/* Component-specific */
.aboutPageWrapper { /* unique to About page */ }

/* Descriptive */
.heroSectionTitle { /* clear purpose */ }

/* Composed */
.sidebarHeading {
  composes: globalTypography from global;
  color: #1a1a1a;
}
```

### 10.3 Performance Optimization Strategy

**Code Splitting:**
- Dynamic imports for article pages
- Route-based code splitting
- Reduced initial bundle size

**Asset Optimization:**
- Images in `public/` (served as-is)
- Vite asset hashing for caching
- Lazy loading for below-fold content

**Rendering Optimization:**
- Intersection Observer for animations
- Efficient re-renders with proper state management
- Memoization for expensive components

### 10.4 Legacy Compatibility Layer

**Problem:** Maintain WordPress URL structure for SEO

**Solution:**
- Preserve `/wp-content/uploads/` paths
- `.htaccess` redirects for old routes
- Canonical URL enforcement
- PDF assets in legacy locations

---

## 11. Future Enhancement Opportunities

### 11.1 Planned Features
- **Career Application Modal** (in progress)
  - Multi-step form with file uploads
  - Validation and error handling
  - Backend integration ready

### 11.2 Potential Improvements
- **Image Optimization**: WebP format with fallbacks
- **Service Worker**: Offline functionality
- **Analytics**: Integration with marketing tools
- **CMS Integration**: Headless CMS for content management
- **Internationalization**: Multi-language support

### 11.3 Technical Debt
- **Button Style Normalization**: Standardize across all pages
- **Heading Consistency**: Ensure uniform h1/h2/h3 styles
- **Map Performance**: Optimize amCharts initialization

---

## 12. Development Workflow

### 12.1 Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Run visual tests
npm run test:visual

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

### 12.2 Code Review Checklist

- [ ] Visual parity with live site verified
- [ ] CSS Modules used (no global styles)
- [ ] Component follows composition pattern
- [ ] Props are properly typed/validated
- [ ] Images have alt attributes
- [ ] No console errors/warnings
- [ ] Responsive design tested (desktop/tablet/mobile)
- [ ] Build completes without errors
- [ ] Assets load without 404s
- [ ] Interactive elements work (hover, click, focus)

---

## 13. Project Status & Next Steps

### 13.1 Current Status

**✅ Desktop/Large Screens: COMPLETE**
- Visual parity achieved for desktop viewports (1920x1080 and above)
- All typography, spacing, and layout match the live site exactly
- Interactive elements (maps, lightbox, navigation) fully functional
- Build pipeline stable and production-ready
- All major features implemented and tested

**✅ Completed Features:**
- Pixel-perfect visual parity for desktop
- Complete component architecture
- Functional routing and navigation
- Interactive maps with proper behavior
- Image galleries with lightbox functionality
- PDF rendering for articles
- SEO-friendly redirects and canonical URLs
- Automated testing pipeline
- Production build system

### 13.2 Next Steps

**🔄 Mobile View: CSS Layout Fixes Required**

The primary remaining work involves fixing CSS layout issues on mobile viewports based on live site analysis. Specific areas to address:

**Priority 1: Component Structure & Layout (High Priority)**
- Move `VisionBlock` outside `contentWrapper` (full-bleed section)
- Move `CTASection` inside `contentWrapper` (gray background, contained content)
- Fix full-bleed background technique to prevent mobile horizontal scroll
- Add responsive padding to `contentWrapper` (16px on mobile)

**Priority 2: Two-Column Layout Transformation (High Priority)**
- Hide left sidebar columns on mobile (`col-lg-3` equivalent)
- Show duplicate titles above content on mobile
- Stack Featured Article image and text vertically
- Ensure Welcome Section badges column is hidden on mobile

**Priority 3: Responsive Typography & Spacing (Medium Priority)**
- Font size scaling for smaller screens
- Line height adjustments for readability
- Padding and margin reductions (72px → 48px/40px on mobile)
- Button sizing for touch targets (minimum 44x44px)
- Hero section height reduction on mobile

**Priority 4: Interactive Elements (Medium Priority)**
- Mobile menu functionality fixes
- Touch-friendly button sizes
- Mobile-optimized lightbox controls
- Map container sizing and touch interactions
- Form input field sizing

**Priority 5: Performance Optimization (Low Priority)**
- Image lazy loading for mobile networks
- Reduced animation complexity
- Optimized font loading
- Minimized JavaScript bundle for mobile

### 13.3 Mobile Testing Checklist

- [ ] Test all pages on iPhone (Safari) - 375x667 viewport
- [ ] Test all pages on Android (Chrome) - 360x640 viewport
- [ ] Test all pages on iPad (Safari) - 768x1024 viewport
- [ ] Verify touch interactions work correctly
- [ ] Check that no horizontal scrolling occurs
- [ ] Ensure text is readable without zooming
- [ ] Verify all buttons are easily tappable
- [ ] Test form inputs and validation
- [ ] Check image loading and gallery functionality
- [ ] Verify map interactions on touch devices

---

## 14. Conclusion

The Al Maha Foods React/Vite project demonstrates a successful migration from WordPress to a modern, maintainable, and performant React application. The architecture prioritizes:

1. **Visual Excellence**: Pixel-perfect parity with the live site (desktop complete)
2. **Code Quality**: Clean, modular, and well-documented codebase
3. **Performance**: Optimized builds, lazy loading, and efficient assets
4. **Maintainability**: Clear structure, reusable components, and automated testing
5. **Scalability**: Foundation ready for future enhancements

The project serves as a blueprint for converting legacy WordPress sites into modern React applications while preserving SEO, maintaining visual fidelity, and implementing industry best practices.

---

**Document Version**: 1.1
**Last Updated**: 2025-11-12
**Project Status**: Desktop Complete, Mobile Optimization In Progress
**Build Version**: 1.0.0
**Maintained By**: Development Team