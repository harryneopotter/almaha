# Screenshot Comparison Instructions

## Quick Start

To take screenshots of the current React implementation and compare with WordPress:

### Step 1: Start the Development Server
```bash
npm run dev
```
*Keep this running in one terminal*

### Step 2: Take Screenshots (in a new terminal)
```bash
npm run screenshot
```

### Step 3: View Results
Open the generated report:
```bash
# The script will tell you the exact path, but it's usually:
open visual-comparison/reports/screenshot-report.html
```

## What This Does

1. **Captures Screenshots**: Takes full-page screenshots of your React implementation
2. **Multiple Viewports**: Tests desktop (1200px), tablet (768px), and mobile (375px)
3. **Multiple Pages**: Captures home, about, and contact pages
4. **Generates Report**: Creates an HTML report with all screenshots organized by viewport

## How to Use for Comparison

### Manual Comparison Method
1. Open the WordPress original site: `https://www.almahafoods.com`
2. Open the screenshot report in another browser tab
3. Compare side-by-side:
   - Layout and spacing
   - Colors and fonts
   - Content placement
   - Responsive behavior

### What to Look For
- **Header**: Logo size, navigation layout, mobile menu
- **Hero Section**: Slider images, text positioning, overlay colors
- **Content Sections**: Spacing, typography, background colors
- **Footer**: Layout, social icons, link styling
- **Responsive**: How elements adapt at different screen sizes

### Document Issues
Create a list of differences found:
```
ISSUES FOUND:
- Header logo too small on mobile
- Slider text positioning off by 20px
- Footer background color doesn't match
- etc.
```

## Troubleshooting

### "React dev server is not running"
Make sure you have `npm run dev` running in another terminal first.

### Screenshots look wrong
- Check that all images are loading correctly
- Verify CSS is being applied
- Make sure fonts are loading

### Browser doesn't open
The script runs in headless mode by default. If you want to see what's happening, you can modify the script to set `headless: false`.

## Next Steps After Screenshots

1. **Compare with WordPress original**
2. **Fix identified issues** in React components/CSS
3. **Re-run screenshots** to verify fixes
4. **Repeat until satisfied** with visual parity

This gives you a concrete way to validate that your React implementation matches the WordPress original!