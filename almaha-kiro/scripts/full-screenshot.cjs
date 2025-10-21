const { chromium } = require('playwright');
const fs = require('fs').promises;
const path = require('path');

console.log('🚀 Starting comprehensive screenshot capture...');

async function takeScreenshots() {
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

  // Create directories
  await fs.mkdir(SCREENSHOTS_DIR, { recursive: true });
  await fs.mkdir(path.join(SCREENSHOTS_DIR, 'react'), { recursive: true });
  await fs.mkdir(path.join(SCREENSHOTS_DIR, 'reports'), { recursive: true });

  console.log('📁 Created directories');

  const browser = await chromium.launch({ headless: true });
  console.log('🌐 Browser launched');

  const results = [];

  try {
    // Test if React dev server is running
    const testPage = await browser.newPage();
    console.log('📄 Testing dev server connection...');
    
    try {
      await testPage.goto(REACT_SITE_URL, { timeout: 5000 });
      console.log('✅ React dev server is running');
      await testPage.close();
    } catch (error) {
      console.error('❌ React dev server is not running. Please start it with: npm run dev');
      console.error('Error:', error.message);
      await browser.close();
      return;
    }

    // Take screenshots for each viewport and page
    for (const viewport of VIEWPORTS) {
      console.log(`\n📱 Testing ${viewport.name} viewport (${viewport.width}x${viewport.height})`);
      
      for (const pageInfo of PAGES_TO_TEST) {
        console.log(`  📄 Capturing ${pageInfo.name} page...`);
        
        try {
          const page = await browser.newPage();
          await page.setViewportSize({ width: viewport.width, height: viewport.height });
          
          await page.goto(`${REACT_SITE_URL}${pageInfo.path}`, { 
            waitUntil: 'networkidle',
            timeout: 10000 
          });
          
          // Wait for any animations
          await page.waitForTimeout(2000);
          
          const screenshotPath = path.join(
            SCREENSHOTS_DIR, 
            'react', 
            `${pageInfo.name}-${viewport.name}.png`
          );
          
          await page.screenshot({ path: screenshotPath, fullPage: true });
          
          const title = await page.title();
          
          results.push({
            page: pageInfo.name,
            viewport: viewport.name,
            title,
            screenshot: `react/${pageInfo.name}-${viewport.name}.png`,
            description: pageInfo.description,
            status: 'captured',
            path: screenshotPath
          });
          
          console.log(`    ✅ Captured ${pageInfo.name} at ${viewport.name}`);
          await page.close();
          
        } catch (error) {
          console.error(`    ❌ Failed to capture ${pageInfo.name} at ${viewport.name}:`, error.message);
          results.push({
            page: pageInfo.name,
            viewport: viewport.name,
            error: error.message,
            status: 'failed'
          });
        }
      }
    }

    // Generate HTML report
    await generateReport(results, SCREENSHOTS_DIR);

  } catch (error) {
    console.error('❌ Error during screenshot capture:', error);
  } finally {
    await browser.close();
    console.log('\n🏁 Screenshot capture completed');
    console.log(`📊 View results at: ${path.join(SCREENSHOTS_DIR, 'reports', 'screenshot-report.html')}`);
  }
}

async function generateReport(results, screenshotsDir) {
  const reportPath = path.join(screenshotsDir, 'reports', 'screenshot-report.html');
  
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
        .viewport-section { 
            margin-bottom: 40px; 
            background: white; 
            border-radius: 8px; 
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .viewport-header { 
            background: #28a745; 
            color: white; 
            padding: 20px; 
            font-size: 20px; 
            font-weight: 600; 
        }
        .pages-grid { 
            display: grid; 
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); 
            gap: 20px; 
            padding: 20px; 
        }
        .page-item { 
            border: 1px solid #ddd; 
            border-radius: 8px; 
            overflow: hidden; 
        }
        .page-header { 
            padding: 15px; 
            background: #f8f9fa; 
            border-bottom: 1px solid #ddd; 
            font-weight: 600;
        }
        .screenshot-container { 
            padding: 15px; 
            text-align: center; 
        }
        .screenshot { 
            max-width: 100%; 
            border: 1px solid #ddd; 
            border-radius: 4px; 
        }
        .error { 
            color: #dc3545; 
            padding: 20px; 
            text-align: center; 
            font-style: italic; 
        }
        .instructions { 
            background: #e8f4fd; 
            padding: 20px; 
            border-radius: 8px; 
            margin-bottom: 30px; 
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>React Implementation Screenshots</h1>
            <p>Captured on ${new Date().toLocaleString()}</p>
        </div>
        
        <div class="instructions">
            <h3>How to compare with WordPress original:</h3>
            <ol>
                <li>Open <strong>https://www.almahafoods.com</strong> in another browser tab</li>
                <li>Compare layouts, colors, spacing, and content placement</li>
                <li>Note any differences that need to be fixed</li>
                <li>Update React code and re-run screenshots</li>
            </ol>
        </div>
`;

  // Group by viewport
  const viewports = ['desktop', 'tablet', 'mobile'];
  
  for (const viewportName of viewports) {
    const viewportResults = results.filter(r => r.viewport === viewportName);
    if (viewportResults.length === 0) continue;
    
    html += `
        <div class="viewport-section">
            <div class="viewport-header">
                ${viewportName.toUpperCase()} Screenshots
            </div>
            <div class="pages-grid">
    `;
    
    for (const result of viewportResults) {
      html += `
                <div class="page-item">
                    <div class="page-header">
                        ${result.page.toUpperCase()} Page
                    </div>
                    <div class="screenshot-container">
      `;
      
      if (result.status === 'captured') {
        html += `<img src="../${result.screenshot}" alt="${result.page} ${viewportName}" class="screenshot">`;
      } else {
        html += `<div class="error">Failed to capture: ${result.error}</div>`;
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
    </div>
</body>
</html>`;

  await fs.writeFile(reportPath, html);
  console.log(`📊 Report generated: ${reportPath}`);
}

takeScreenshots().catch(console.error);