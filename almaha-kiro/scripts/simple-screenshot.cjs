const { chromium } = require('playwright');
const fs = require('fs').promises;
const path = require('path');

console.log('🚀 Starting screenshot capture...');

async function takeScreenshots() {
  const REACT_SITE_URL = 'http://localhost:5173';
  const SCREENSHOTS_DIR = path.join(process.cwd(), 'visual-comparison');

  // Create directories
  await fs.mkdir(SCREENSHOTS_DIR, { recursive: true });
  await fs.mkdir(path.join(SCREENSHOTS_DIR, 'react'), { recursive: true });

  console.log('📁 Created directories');

  const browser = await chromium.launch({ headless: true });
  console.log('🌐 Browser launched');

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

    // Take homepage screenshot
    console.log('📸 Taking homepage screenshot...');
    const page = await browser.newPage();
    await page.setViewportSize({ width: 1200, height: 800 });
    await page.goto(`${REACT_SITE_URL}/`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(2000);
    
    const screenshotPath = path.join(SCREENSHOTS_DIR, 'react', 'homepage-desktop.png');
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`✅ Homepage screenshot saved to: ${screenshotPath}`);
    
    await page.close();

  } catch (error) {
    console.error('❌ Error during screenshot capture:', error);
  } finally {
    await browser.close();
    console.log('🏁 Screenshot capture completed');
  }
}

takeScreenshots().catch(console.error);