# Critical Fixes for Home Page - Al Maha Foods

## Issues Found from Visual Comparison

### 1. **HERO SECTION - Wrong Images**
**Problem:** Using slider images of rice bowls
**Should Be:** Paddy field/rice field background image

**Files to check:**
- `/public/assets/images/home/` - need paddy field image
- Current using: `al-maha-about-slide-*.jpg`
- Should use: Rice field image (check `/public/assets/images/exports/rice_field.jpg` exists?)

**Fix in:** `src/pages/Home.jsx` - Update `slides` array

---

### 2. **SIDEBAR BADGES - COMPLETELY MISSING**
**Problem:** No sidebar with 25 years badge, Great Place to Work badge

**Need to add:**
```jsx
<aside className="sidebar-badges">
  <div className="badge-item">
    <img src="/assets/images/home/image_2023_05_24T11_18_08_668Z.png" alt="25 Years" />
  </div>
  <div className="badge-item">
    <img src="/assets/images/home/GPW_1.jpg" alt="Great Place to Work" />
  </div>
  <div className="badge-item">
    <img src="/assets/images/home/logo.png" alt="Certified" />
  </div>
</aside>
```

**CSS needed:**
```css
.sidebar-badges {
  position: fixed;
  left: 20px;
  top: 200px;
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 120px;
}
```

---

### 3. **VISION SECTION - Missing Video/Image Overlay**
**Problem:** Plain background, no video player overlay

**Should have:**
- Background image (rice bowl with chopsticks)
- Play button overlay
- Video modal functionality

**Fix:**
```jsx
<section className="vision-section">
  <div className="vision-bg-image">
    <img src="/assets/images/home/Almaha-page-1-images.png" alt="Vision Background" />
    <button className="play-button" aria-label="Play video">
      <svg><!-- play icon --></svg>
    </button>
  </div>
  <div className="vision-text-content">
    <!-- existing vision text -->
  </div>
</section>
```

---

### 4. **NAVIGATION - Missing Active State**
**Problem:** No highlighting of active/current page

**Fix in:** `src/pages/Home.css`
```css
.main-nav a.active {
  background-color: #ffc107;
  color: #000;
  padding: 8px 16px;
  border-radius: 4px;
}
```

**Fix in:** `src/pages/Home.jsx`
```jsx
<a href="/" className="active">Home</a>
```

---

### 5. **MISSING SECTIONS (From full page view)**

#### A. International Presence - MAP VISUAL MISSING
After the text, should have world map with highlighted regions

#### B. Domestic Presence - MAP VISUAL MISSING
After International section, should have India map with highlighted regions

#### C. News/Blog Section - COMPLETELY MISSING
Should have news cards/articles section near bottom

#### D. Partners Section - MIGHT BE MISSING
Check if partners/clients logos section exists

---

### 6. **IMAGE GALLERY - Wrong Image**
**Problem:** Using `al-maha-about-slide-1-new.jpg`
**Should use:** `Almaha-page-1-images.png` (the one with play button overlay)

---

### 7. **TYPOGRAPHY/SPACING DIFFERENCES**

**Red Banner Text:**
- Current font-size: 2.2rem
- Check if should be smaller or different weight

**Welcome Section:**
- Left column spacing might be off
- Badge images might need different sizing

---

## Priority Order:

1. **HIGH PRIORITY:**
   - Add sidebar badges (completely missing visual element)
   - Fix hero image (wrong image)
   - Add vision section video overlay
   - Add navigation active state

2. **MEDIUM PRIORITY:**
   - Add map visualizations for International/Domestic sections
   - Fix image gallery image
   - Add news/blog section

3. **LOW PRIORITY:**
   - Typography fine-tuning
   - Spacing adjustments

---

## Assets to Verify Exist:

Check these files in `/public/assets/images/`:
- [ ] Rice field image for hero (might be in /exports/ folder)
- [ ] Vision section background image (rice bowl with chopsticks)
- [ ] World map graphic
- [ ] India map graphic
- [ ] News/blog images

---

## Quick Test Checklist:

After fixes, compare:
- [ ] Sidebar visible on left side with 3 badges
- [ ] Hero shows rice field, not rice bowls
- [ ] Vision section has image with play button
- [ ] Active nav item has yellow background
- [ ] Map visualizations present in presence sections
- [ ] All sections from original site are present
