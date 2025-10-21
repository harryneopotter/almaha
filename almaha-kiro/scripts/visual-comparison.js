#!/usr/bin/env node

/**
 * Visual Comparison Script for WordPress to React Conversion
 * This script helps validate visual parity between original WordPress site and React implementation
 */

import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

const ORIGINAL_SITE_URL = 'https://almahafoods.com'; // Original WordPress site
const REACT_SITE_URL = 'http://localhost:5173'; // React development server

const PAGES_TO_COMPARE = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about-al-maha/' },
  { name: 'exports', path: '/exports-profile/' },
  { name: 'contact', path: '/contact-us/' },
  { name: 'csr', path: '/corporate-social-responsibility/' },
  { name: 'career', path: '/culture-at-al-maha/' }
];

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 667 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1200, height: 800 }
];

async function captureScreenshots() {
  const browser = await chromium.launch({ headless: true });
  const screenshotsDir = path.join(process.cwd(), 'visual-comparison');
  
  // Create directories
  await fs.mkdir(screenshotsDir, { recursive: true });
  await fs.mkdir(path.join(screenshotsDir, 'original'), { recursive: true });
  await fs.mkdir(path.join(screenshotsDir, 'react'), { recursive: true });
  await fs.mkdir(path.join(screenshotsDir, 'diff'), { recursive: true });

  console.log('🚀 Starting visual comparison capture...');

  for (const viewport of VIEWPORTS) {
    console.log(`📱 Testing ${viewport.name} viewport (${viewport.width}x${viewport.height})`);
    
    for (const page of PAGES_TO_COMPARE) {
      console.log(`  📄 Capturing ${page.name} page...`);
      
      try {
        // Capture original WordPress site
        const originalPage = await browser.newPage();
        await originalPage.setViewportSize({ width: viewport.width, height: viewport.height });
        await originalPage.goto(`${ORIGINAL_SITE_URL}${page.path}`, { waitUntil: 'networkidle' });
        await originalPage.screenshot({
          path: path.join(screenshotsDir, 'original', `${page.name}-${viewport.name}.png`),
          fullPage: true
        });
        await originalPage.close();

        // Capture React implementation
        const reactPage = await browser.newPage();
        await reactPage.setViewportSize({ width: viewport.width, height: viewport.height });
        
        // Map WordPress paths to React paths
        const reactPath = mapWordPressPathToReact(page.path);
        await reactPage.goto(`${REACT_SITE_URL}${reactPath}`, { waitUntil: 'networkidle' });
        await reactPage.screenshot({
          path: path.join(screenshotsDir, 'react', `${page.name}-${viewport.name}.png`),
          fullPage: true
        });
        await reactPage.close();

        console.log(`    ✅ Captured ${page.name} at ${viewport.name}`);
      } catch (error) {
        console.error(`    ❌ Failed to capture ${page.name} at ${viewport.name}:`, error.message);
      }
    }
  }

  await browser.close();
  console.log('📸 Screenshot capture completed!');
  console.log(`Screenshots saved to: ${screenshotsDir}`);
}

function mapWordPressPathToReact(wpPath) {
  const pathMap = {
    '/': '/',
    '/about-al-maha/': '/about',
    '/exports-profile/': '/what-we-do/exports',
    '/contact-us/': '/contact-us',
    '/corporate-social-responsibility/': '/corporate-social-responsibility',
    '/culture-at-al-maha/': '/culture-at-al-maha'
  };
  
  return pathMap[wpPath] || wpPath;
}

async function generateComparisonReport() {
  const screenshotsDir = path.join(process.cwd(), 'visual-comparison');
  const reportPath = path.join(screenshotsDir, 'comparison-report.html');
  
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Visual Comparison Report - WordPress to React</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 40px; }
        .comparison-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 40px; }
        .comparison-item { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
        .comparison-item h3 { margin-top: 0; color: #333; }
        .screenshot { width: 100%; border: 1px solid #ddd; border-radius: 4px; }
        .viewport-section { margin-bottom: 60px; }
        .viewport-title { font-size: 24px; color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px; }
        .page-comparison { margin-bottom: 40px; }
        .page-title { font-size: 18px; color: #34495e; margin-bottom: 20px; }
        .status { padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
        .status.pending { background: #f39c12; color: white; }
        .instructions { background: #e8f4fd; padding: 20px; border-radius: 8px; margin-bottom: 30px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Visual Comparison Report</h1>
            <p>WordPress Original vs React Implementation</p>
            <div class="instructions">
                <h3>How to use this report:</h3>
                <ol>
                    <li>Run <code>npm run dev</code> in the React project directory</li>
                    <li>Run <code>node scripts/visual-comparison.js</code> to capture screenshots</li>
                    <li>Compare the images side by side to identify visual differences</li>
                    <li>Update React components and styles to match WordPress original</li>
                </ol>
            </div>
        </div>
`;

  for (const viewport of VIEWPORTS) {
    html += `
        <div class="viewport-section">
            <h2 class="viewport-title">${viewport.name.toUpperCase()} - ${viewport.width}x${viewport.height}</h2>
    `;
    
    for (const page of PAGES_TO_COMPARE) {
      html += `
            <div class="page-comparison">
                <h3 class="page-title">${page.name.toUpperCase()} Page <span class="status pending">Needs Review</span></h3>
                <div class="comparison-grid">
                    <div class="comparison-item">
                        <h3>WordPress Original</h3>
                        <img src="original/${page.name}-${viewport.name}.png" alt="WordPress ${page.name}" class="screenshot" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
                    </div>
                    <div class="comparison-item">
                        <h3>React Implementation</h3>
                        <img src="react/${page.name}-${viewport.name}.png" alt="React ${page.name}" class="screenshot" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPk5vIEltYWdlPC90ZXh0Pjwvc3ZnPg=='">
                    </div>
                </div>
            </div>
      `;
    }
    
    html += `</div>`;
  }

  html += `
    </div>
</body>
</html>`;

  await fs.writeFile(reportPath, html);
  console.log(`📊 Comparison report generated: ${reportPath}`);
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    await captureScreenshots();
    await generateComparisonReport();
    console.log('\n🎉 Visual comparison setup complete!');
    console.log('Next steps:');
    console.log('1. Start your React dev server: npm run dev');
    console.log('2. Open visual-comparison/comparison-report.html in your browser');
    console.log('3. Review the side-by-side comparisons');
    console.log('4. Update styles to match WordPress original');
  } catch (error) {
    console.error('❌ Error during visual comparison:', error);
    process.exit(1);
  }
}

export { captureScreenshots, generateComparisonReport };