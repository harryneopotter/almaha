import { test, expect } from '@playwright/test';

test.describe('Basic Page Loading', () => {
  test('Home page loads correctly', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('h1')).toContainText('Al-maha Foods - Home');
  });

  test('About page loads correctly', async ({ page }) => {
    await page.goto('/about');
    await expect(page.locator('h1')).toContainText('About Us');
  });

  test('Contact page loads correctly', async ({ page }) => {
    await page.goto('/contact-us');
    await expect(page.locator('h1')).toContainText('Contact Us');
  });

  test('Navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Test navigation to About page
    await page.click('text=About');
    await expect(page).toHaveURL('/about');
    await expect(page.locator('h1')).toContainText('About Us');
    
    // Test navigation to Contact page
    await page.click('text=Contact');
    await expect(page).toHaveURL('/contact-us');
    await expect(page.locator('h1')).toContainText('Contact Us');
  });
});