import { test, expect } from '@playwright/test';

test.describe('Home Page Visual Tests', () => {
  test('should display hero slider', async ({ page }) => {
    await page.goto('/');
    
    // Wait for the hero slider to load
    await page.waitForSelector('.heroSlider', { timeout: 10000 });
    
    // Check if hero slider is visible
    const heroSlider = page.locator('.heroSlider');
    await expect(heroSlider).toBeVisible();
    
    // Check if slide content is present
    const slideTitle = page.locator('h2').first();
    await expect(slideTitle).toBeVisible();
  });

  test('should display welcome section', async ({ page }) => {
    await page.goto('/');
    
    // Check if welcome section is visible
    const welcomeHeading = page.getByText('Welcome to Al Maha Foods');
    await expect(welcomeHeading).toBeVisible();
    
    // Check if description text is present
    const description = page.getByText(/The Idea and Passion/);
    await expect(description).toBeVisible();
  });

  test('should display vision block', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to vision block
    await page.evaluate(() => window.scrollTo(0, 800));
    
    // Check if vision block is visible
    const visionTitle = page.locator('.vision-title');
    await expect(visionTitle).toBeVisible();
  });

  test('should display international presence section', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to international presence
    await page.evaluate(() => window.scrollTo(0, 1500));
    await page.waitForTimeout(1000);
    
    // Check if section is visible
    const heading = page.locator('.international-presence-heading');
    await expect(heading).toBeVisible();
  });

  test('should display domestic presence section', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to domestic presence
    await page.evaluate(() => window.scrollTo(0, 2500));
    await page.waitForTimeout(1000);
    
    // Check if section is visible
    const heading = page.locator('.domestic-presence-heading');
    await expect(heading).toBeVisible();
  });

  test('should display CTA section', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to CTA
    await page.evaluate(() => window.scrollTo(0, 3500));
    await page.waitForTimeout(1000);
    
    // Check if CTA is visible
    const ctaHeading = page.getByText('Ready to Work With Us?');
    await expect(ctaHeading).toBeVisible();
    
    // Check if buttons are present
    const getInTouchButton = page.getByRole('link', { name: 'Get In Touch' });
    await expect(getInTouchButton).toBeVisible();
  });

  test('should have working navigation menu', async ({ page }) => {
    await page.goto('/');
    
    // Check if header is visible
    const header = page.locator('header');
    await expect(header).toBeVisible();
    
    // Check if logo is visible
    const logo = page.locator('header img[alt="Al Maha Foods"]');
    await expect(logo).toBeVisible();
    
    // Check if navigation links are present
    const homeLink = page.getByRole('link', { name: 'Home' });
    await expect(homeLink).toBeVisible();
  });

  test('should display footer', async ({ page }) => {
    await page.goto('/');
    
    // Scroll to bottom
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);
    
    // Check if footer is visible
    const footer = page.locator('footer');
    await expect(footer).toBeVisible();
    
    // Check copyright text
    const copyright = page.getByText(/Al Maha Foods. All rights reserved/);
    await expect(copyright).toBeVisible();
  });
});

