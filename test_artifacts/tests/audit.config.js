// Live vs React visual audit configuration (ESM)
// Override bases with env: LIVE_BASE, REACT_BASE

export const viewports = [
  { name: 'mobile', width: 375, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1920, height: 1080 },
];

export const bases = {
  live: process.env.LIVE_BASE || 'https://almahafoods.com',
  react: process.env.REACT_BASE || 'http://localhost:3000',
};

// Pages to audit (exclude Home and Contact as requested)
export const cases = [
  { id: 'about', livePath: '/about/', reactPath: '/about' },
  {
    id: 'exports',
    livePath: '/what-we-do/exports/',
    reactPath: '/what-we-do/exports',
    hideDuringScreenshot: ['#chartdiv', '.amcharts-chart-div', '.map-container'],
  },
  {
    id: 'quality-assurance',
    livePath: '/what-we-do/quality-assurance/',
    reactPath: '/what-we-do/quality-assurance',
  },
  {
    id: 'domestic-market',
    livePath: '/what-we-do/domestic-market/',
    reactPath: '/what-we-do/domestic-market',
  },
  { id: 'our-brands', livePath: '/our-brands/', reactPath: '/our-brands' },
  { id: 'culture-at-al-maha', livePath: '/culture-at-al-maha/', reactPath: '/culture-at-al-maha' },
  {
    id: 'corporate-social-responsibility',
    livePath: '/corporate-social-responsibility/',
    reactPath: '/corporate-social-responsibility',
  },
];

// Keep selectors generic to work with CSS Modules hashing
export const selectors = [
  'header',
  'main',
  'footer',
  'h1',
  'h2',
  'section',
  'nav',
  // Exclude scroll-to-top control to avoid unrelated button diffs
  '.btn, a.button, .primaryButton',
];

export const styleProps = [
  'display', 'position', 'top', 'right', 'bottom', 'left',
  'margin-top', 'margin-right', 'margin-bottom', 'margin-left',
  'padding-top', 'padding-right', 'padding-bottom', 'padding-left',
  'width', 'height', 'max-width', 'min-width', 'max-height', 'min-height',
  'font-family', 'font-size', 'font-weight', 'line-height', 'letter-spacing',
  'color', 'background-color', 'text-transform', 'text-decoration',
  'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width',
  'border-top-style', 'border-right-style', 'border-bottom-style', 'border-left-style',
  'border-top-color', 'border-right-color', 'border-bottom-color', 'border-left-color',
  'border-radius', 'box-shadow', 'z-index', 'opacity',
  'overflow', 'gap', 'row-gap', 'column-gap',
  'flex-direction', 'flex-wrap', 'order', 'justify-content', 'align-items',
  'grid-template-columns', 'grid-template-rows',
  'background-image', 'background-size', 'background-position', 'background-repeat',
  'object-fit', 'transform',
];

// Global hides to stabilize live runs (cookie bars, admin bar, etc.)
export const globalHides = [
  '#wpadminbar',
  '[id*="cookie" i]', '[class*="cookie" i]',
  '[id*="consent" i]', '[class*="consent" i]',
  '[id*="gdpr" i]', '[class*="gdpr" i]',
  // Hide local-only UI controls to stabilize screenshots and computed styles
  '.scrollToTop',
];
