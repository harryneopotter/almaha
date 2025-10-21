#!/usr/bin/env node

/**
 * Screenshot Comparison Script
 * Takes screenshots of React implementation and compares with saved WordPress screenshots
 */

import { chromium } from 'playwright';
import fs from 'fs/promises';
import path from 'path';

const REACT_SITE_URL = 'http://localhost:5173';
const SCREENSHOTS_DIR = path.join(process.cwd(), 'visual-comparison');

const PAGES_TO_TEST = [
  { name: 'home', path: '/', description: 'Homepage with slider and welcome section' },
  { name: 'about', path: '/about', description: 'About page with company information' },
  { name: 'contact', path: '/contact-us', description: 'Contact page with form' }
];

const VIEWPORTS = [
  { name: 'desktop', width: 1200, height: 800 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'mobile', width: 375, height: 667 }
];

async function takeScreenshots() {
  console.log('🚀 Starting screenshot capture...');
  console.log('Node version:', process.version);
  console.log('Current directory:', process.cwd());
  
  // Create directories
  await fs.mkdir(SCREENSHOTS_DIR, { recursive: true });
  await fs.mkdir(path.join(SCREENSHOTS_DIR, 'react'), { recursive: true });
  await fs.mkdir(path.join(SCREENSHOTS_DIR, 'reports'), { recursive: true });

  const browser = await chromium.launch({ headless: false }); // Show browser for debugging
  
  try {
    // Test if React dev server is running
    const testPage = await browser.newPage();
    try {
      await testPage.goto(REACT_SITE_URL, { timeout: 5000 });
      console.log('✅ React dev server is running');
      await testPage.close();
    } catch (error) {
      console.error('❌ React dev server is not running. Please start it with: npm run dev');
      await browser.close();
      return;
    }

    const results = [];

    for (const viewport of VIEWPORTS) {
      console.log(`\n📱 Testing ${viewport.name} viewport (${viewport.width}x${viewport.height})`);
      
      for (const page of PAGES_TO_TEST) {
        console.log(`  📄 Capturing ${page.name} page...`);
        
        try {
          const reactPage = await browser.newPage();
          await reactPage.setViewportSize({ 
            width: viewport.width, 
            height: viewport.height 
          });
          
          // Navigate to React page
          await reactPage.goto(`${REACT_SITE_URL}${page.path}`, { 
            waitUntil: 'networkidle',
            timeout: 10000 
          });
          
          // Wait a bit for any animations to complete
          await reactPage.waitForTimeout(2000);
          
          // Take screenshot
          const screenshotPath = path.join(
            SCREENSHOTS_DIR, 
            'react', 
            `${page.name}-${viewport.name}.png`
          );
          
          await reactPage.screenshot({
            path: screenshotPath,
            fullPage: true
          });
          
          // Get page info for report
          const title = await reactPage.title();
          const url = reactPage.url();
          
          results.push({
            page: page.name,
            viewport: viewport.name,
            title,
            url,
            screenshot: `react/${page.name}-${viewport.name}.png`,
            description: page.description,
            status: 'captured'
          });
          
          console.log(`    ✅ Captured ${page.name} at ${viewport.name}`);
          await reactPage.close();
          
        } catch (error) {
          console.error(`    ❌ Failed to capture ${page.name} at ${viewport.name}:`, error.message);
          results.push({
            page: page.name,
            viewport: viewport.name,
            error: error.message,
            status: 'failed'
          });
        }
      }
    }

    await generateReport(results);
    console.log('\n📸 Screenshot capture completed!');
    console.log(`Screenshots saved to: ${SCREENSHOTS_DIR}`);
    console.log(`Open ${path.join(SCREENSHOTS_DIR, 'reports', 'screenshot-report.html')} to view results`);

  } finally {
    await browser.close();
  }
}

async function generateReport(results) {
  const reportPath = path.join(SCREENSHOTS_DIR, 'reports', 'screenshot-report.html');
  
  let html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React Implementation Screenshots</title>
    <style>
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; 
            margin: 0; 
            padding: 20px; 
            background: #f5f5f5; 
        }
        .container { max-width: 1400px; margin: 0 auto; }
        .header { 
            text-align: center; 
            margin-bottom: 40px; 
            background: white; 
            padding: 30px; 
            border-radius: 8px; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.1); 
        }
        .header h1 { margin: 0 0 10px 0; color: #333; }
        .header p { color: #666; margin: 0; }
        .viewport-section { 
            margin-bottom: 60px; 
            background: white; 
            border-radius: 8px; 
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .viewport-header { 
            background: #28a745; 
            color: white; 
            padding: 20px; 
            font-size: 24px; 
            font-weight: 600; 
        }
        .pages-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); 
            gap: 30px; 
            padding: 30px; 
        }
        .page-item { 
            border: 1px solid #ddd; 
            border-radius: 8px; 
            overflow: hidden; 
            background: #fafafa;
        }
        .page-header { 
            padding: 15px 20px; 
            background: #f8f9fa; 
            border-bottom: 1px solid #ddd; 
        }
        .page-title { 
            font-size: 18px; 
            font-weight: 600; 
            color: #333; 
            margin: 0 0 5px 0; 
        }
        .page-description { 
            font-size: 14px; 
            color: #666; 
            margin: 0; 
        }
        .screenshot-container { 
            padding: 20px; 
            text-align: center; 
        }
        .screenshot { 
            max-width: 100%; 
            border: 1px solid #ddd; 
            border-radius: 4px; 
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .error { 
            color: #dc3545; 
            padding: 20px; 
            text-align: center; 
            font-style: italic; 
        }
        .status { 
            padding: 4px 8px; 
            border-radius: 4px; 
            font-size: 12px; 
            font-weight: bold; 
            text-transform: uppercase; 
        }
        .status.captured { background: #d4edda; color: #155724; }
        .status.failed { background: #f8d7da; color: #721c24; }
        .instructions { 
            background: #e8f4fd; 
            padding: 20px; 
            border-radius: 8px; 
            margin-bottom: 30px; 
            border-left: 4px solid #0693e3;
        }
        .instructions h3 { margin-top: 0; color: #0693e3; }
        .meta-info { 
            font-size: 12px; 
            color: #888; 
            margin-top: 10px; 
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>React Implementation Screenshots</h1>
            <p>Visual capture of current React implementation - ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="instructions">
            <h3>How to use these screenshots:</h3>
            <ol>
                <li><strong>Compare with WordPress original:</strong> Open the original WordPress site alongside these screenshots</li>
                <li><strong>Check layout accuracy:</strong> Verify that sections, spacing, and content placement match</li>
                <li><strong>Validate responsive behavior:</strong> Compare mobile, tablet, and desktop layouts</li>
                <li><strong>Identify issues:</strong> Note any differences in colors, fonts, spacing, or content</li>
                <li><strong>Update React code:</strong> Fix identified issues and re-run this script</li>
            </ol>
        </div>
`;

  // Group results by viewport
  const viewportGroups = {};
  results.forEach(result => {
    if (!viewportGroups[result.viewport]) {
      viewportGroups[result.viewport] = [];
    }
    viewportGroups[result.viewport].push(result);
  });

  // Generate sections for each viewport
  for (const [viewportName, viewportResults] of Object.entries(viewportGroups)) {
    const viewport = VIEWPORTS.find(v => v.name === viewportName);
    html += `
        <div class="viewport-section">
            <div class="viewport-header">
                ${viewportName.toUpperCase()} - ${viewport?.width || 'Unknown'}x${viewport?.height || 'Unknown'}
            </div>
            <div class="pages-grid">
    `;
    
    for (const result of viewportResults) {
      html += `
                <div class="page-item">
                    <div class="page-header">
                        <div class="page-title">
                            ${result.page.toUpperCase()} Page 
                            <span class="status ${result.status}">${result.status}</span>
                        </div>
                        <div class="page-description">${result.description || 'No description'}</div>
                    </div>
                    <div class="screenshot-container">
      `;
      
      if (result.status === 'captured') {
        html += `
                        <img src="../${result.screenshot}" alt="${result.page} ${viewportName}" class="screenshot">
                        <div class="meta-info">
                            Title: ${result.title}<br>
                            URL: ${result.url}
                        </div>
        `;
      } else {
        html += `
                        <div class="error">
                            Failed to capture screenshot<br>
                            Error: ${result.error}
                        </div>
        `;
      }
      
      html += `
                    </div>
                </div>
      `;
    }
    
    html += `
            </div>
        </div>
    `;
  }

  html += `
        <div class="instructions">
            <h3>Next Steps:</h3>
            <ul>
                <li>Compare these screenshots with the original WordPress site</li>
                <li>Document any visual differences found</li>
                <li>Update React components and CSS to match WordPress original</li>
                <li>Re-run this script to verify fixes</li>
                <li>Repeat until visual parity is achieved</li>
            </ul>
        </div>
    </div>
</body>
</html>`;

  await fs.writeFile(reportPath, html);
  console.log(`📊 Screenshot report generated: ${reportPath}`);
}

// Main execution
if (import.meta.url === `file://${process.argv[1]}`) {
  takeScreenshots().catch(console.error);
}

export { takeScreenshots };