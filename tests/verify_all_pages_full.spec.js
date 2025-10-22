import { test, expect } from '@playwright/test';

test.describe('Screenshot Verification', () => {
  test.setTimeout(120000); // 2 minute timeout for the test

  test('capture full page screenshots', async ({ page }) => {
    // Capture About Us page
    await page.goto('/about-us', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'about-us-full.png', fullPage: true });

    // Capture Quality Assurance page
    await page.goto('/quality-assurance', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'quality-assurance-full.png', fullPage: true });

    // Capture Exports page
    await page.goto('/exports', { waitUntil: 'networkidle' });
    await page.screenshot({ path: 'exports-full.png', fullPage: true });
  });
});
