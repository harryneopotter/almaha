import { test, expect } from '@playwright/test';

const BREAKPOINTS = {
  mobile: { width: 375, height: 667 },
  tablet: { width: 768, height: 1024 },
  desktop: { width: 1200, height: 800 },
  wide: { width: 1920, height: 1080 }
};

const PAGES = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'contact', path: '/contact-us' },
  { name: 'csr', path: '/corporate-social-responsibility' },
  { name: 'career', path: '/culture-at-al-maha' },
  { name: 'exports', path: '/what-we-do/exports' }
];

test.describe('Responsive Design Validation', () => {
  for (const [breakpointName, viewport] of Object.entries(BREAKPOINTS)) {
    test.describe(`${breakpointName} breakpoint (${viewport.width}x${viewport.height})`, () => {
      test.beforeEach(async ({ page }) => {
        await page.setViewportSize(viewport);
      });

      for (const pageInfo of PAGES) {
        test(`${pageInfo.name} page responsive layout`, async ({ page }) => {
          await page.goto(pageInfo.path);
          await page.waitForLoadState('networkidle');

          // Test header responsiveness
          const header = page.locator('header');
          await expect(header).toBeVisible();

          if (viewport.width <= 1024) {
            // Mobile/Tablet: Mobile menu button should be visible
            const mobileMenuButton = page.locator('[class*="mobileMenuButton"]');
            await expect(mobileMenuButton).toBeVisible();

            // Desktop menu should be hidden
            const desktopMenu = page.locator('[class*="menuHorizontal"]');
            await expect(desktopMenu).toBeHidden();
          } else {
            // Desktop: Desktop menu should be visible
            const desktopMenu = page.locator('[class*="menuHorizontal"]');
            await expect(desktopMenu).toBeVisible();

            // Mobile menu button should be hidden
            const mobileMenuButton = page.locator('[class*="mobileMenuButton"]');
            await expect(mobileMenuButton).toBeHidden();
          }

          // Test logo responsiveness
          const logo = page.locator('[class*="logoCustomizer"] img');
          await expect(logo).toBeVisible();

          if (viewport.width <= 768) {
            // Mobile: Logo should be smaller
            const logoHeight = await logo.evaluate(el => getComputedStyle(el).height);
            expect(parseInt(logoHeight)).toBeLessThanOrEqual(50);
          } else {
            // Desktop: Logo should be full size
            const logoHeight = await logo.evaluate(el => getComputedStyle(el).height);
            expect(parseInt(logoHeight)).toBeGreaterThanOrEqual(60);
          }

          // Test container responsiveness
          const containers = page.locator('[class*="container"]');
          const containerCount = await containers.count();
          
          for (let i = 0; i < containerCount; i++) {
            const container = containers.nth(i);
            const containerPadding = await container.evaluate(el => {
              const styles = getComputedStyle(el);
              return {
                paddingLeft: parseInt(styles.paddingLeft),
                paddingRight: parseInt(styles.paddingRight)
              };
            });

            if (viewport.width <= 375) {
              // Mobile: Minimal padding
              expect(containerPadding.paddingLeft).toBeLessThanOrEqual(16);
              expect(containerPadding.paddingRight).toBeLessThanOrEqual(16);
            } else if (viewport.width <= 768) {
              // Tablet: Medium padding
              expect(containerPadding.paddingLeft).toBeLessThanOrEqual(20);
              expect(containerPadding.paddingRight).toBeLessThanOrEqual(20);
            }
          }

          // Test footer responsiveness
          const footer = page.locator('footer');
          await expect(footer).toBeVisible();

          // Take screenshot for visual comparison
          await expect(page).toHaveScreenshot(`${pageInfo.name}-${breakpointName}.png`, {
            fullPage: true,
            threshold: 0.2
          });
        });
      }

      test('Mobile menu functionality', async ({ page }) => {
        if (viewport.width <= 1024) {
          await page.goto('/');
          await page.waitForLoadState('networkidle');

          const mobileMenuButton = page.locator('[class*="mobileMenuButton"]');
          const mobileMenu = page.locator('[class*="menuPrimary"]');

          // Initially menu should be closed
          await expect(mobileMenu).not.toHaveClass(/mobileOpen/);

          // Click to open menu
          await mobileMenuButton.click();
          await expect(mobileMenu).toHaveClass(/mobileOpen/);

          // Click to close menu
          await mobileMenuButton.click();
          await expect(mobileMenu).not.toHaveClass(/mobileOpen/);
        }
      });

      test('Typography scaling', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        const headings = page.locator('h1, h2, h3');
        const headingCount = await headings.count();

        for (let i = 0; i < Math.min(headingCount, 5); i++) {
          const heading = headings.nth(i);
          const fontSize = await heading.evaluate(el => {
            return parseInt(getComputedStyle(el).fontSize);
          });

          // Verify font sizes are appropriate for viewport
          if (viewport.width <= 375) {
            // Mobile: Smaller font sizes
            expect(fontSize).toBeLessThanOrEqual(32);
          } else if (viewport.width <= 768) {
            // Tablet: Medium font sizes
            expect(fontSize).toBeLessThanOrEqual(40);
          } else {
            // Desktop: Full font sizes
            expect(fontSize).toBeGreaterThanOrEqual(16);
          }
        }
      });

      test('Image responsiveness', async ({ page }) => {
        await page.goto('/');
        await page.waitForLoadState('networkidle');

        const images = page.locator('img');
        const imageCount = await images.count();

        for (let i = 0; i < Math.min(imageCount, 10); i++) {
          const image = images.nth(i);
          const imageBox = await image.boundingBox();
          
          if (imageBox) {
            // Images should not overflow viewport
            expect(imageBox.width).toBeLessThanOrEqual(viewport.width);
            
            // Images should maintain aspect ratio
            const naturalDimensions = await image.evaluate(el => ({
              naturalWidth: el.naturalWidth,
              naturalHeight: el.naturalHeight,
              displayWidth: el.offsetWidth,
              displayHeight: el.offsetHeight
            }));

            if (naturalDimensions.naturalWidth > 0 && naturalDimensions.naturalHeight > 0) {
              const naturalRatio = naturalDimensions.naturalWidth / naturalDimensions.naturalHeight;
              const displayRatio = naturalDimensions.displayWidth / naturalDimensions.displayHeight;
              
              // Allow for some rounding differences
              expect(Math.abs(naturalRatio - displayRatio)).toBeLessThan(0.1);
            }
          }
        }
      });

      test('Form responsiveness', async ({ page }) => {
        await page.goto('/contact-us');
        await page.waitForLoadState('networkidle');

        const forms = page.locator('form');
        const formCount = await forms.count();

        if (formCount > 0) {
          const form = forms.first();
          const formInputs = form.locator('input, textarea, select');
          const inputCount = await formInputs.count();

          for (let i = 0; i < inputCount; i++) {
            const input = formInputs.nth(i);
            const inputBox = await input.boundingBox();
            
            if (inputBox) {
              // Form inputs should not overflow viewport
              expect(inputBox.width).toBeLessThanOrEqual(viewport.width - 40);
              
              if (viewport.width <= 768) {
                // Mobile: Form inputs should be full width
                const inputWidth = await input.evaluate(el => {
                  return getComputedStyle(el).width;
                });
                // Should be close to full width (allowing for padding/margins)
                expect(parseInt(inputWidth)).toBeGreaterThan(viewport.width * 0.7);
              }
            }
          }
        }
      });
    });
  }

  test('Cross-breakpoint navigation consistency', async ({ page }) => {
    for (const pageInfo of PAGES) {
      await page.goto(pageInfo.path);
      await page.waitForLoadState('networkidle');

      // Test navigation at different breakpoints
      for (const [breakpointName, viewport] of Object.entries(BREAKPOINTS)) {
        await page.setViewportSize(viewport);
        await page.waitForTimeout(500); // Allow for responsive adjustments

        // Header should always be visible
        const header = page.locator('header');
        await expect(header).toBeVisible();

        // Logo should always be clickable
        const logo = page.locator('[class*="logoCustomizer"] a');
        await expect(logo).toBeVisible();

        // Footer should always be visible
        const footer = page.locator('footer');
        await expect(footer).toBeVisible();
      }
    }
  });
});

test.describe('Performance at different viewports', () => {
  for (const [breakpointName, viewport] of Object.entries(BREAKPOINTS)) {
    test(`Performance metrics at ${breakpointName}`, async ({ page }) => {
      await page.setViewportSize(viewport);
      
      const startTime = Date.now();
      await page.goto('/');
      await page.waitForLoadState('networkidle');
      const loadTime = Date.now() - startTime;

      // Page should load within reasonable time
      expect(loadTime).toBeLessThan(5000);

      // Check for layout shifts
      const layoutShifts = await page.evaluate(() => {
        return new Promise((resolve) => {
          let cumulativeLayoutShift = 0;
          const observer = new PerformanceObserver((list) => {
            for (const entry of list.getEntries()) {
              if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
                cumulativeLayoutShift += entry.value;
              }
            }
          });
          observer.observe({ entryTypes: ['layout-shift'] });
          
          setTimeout(() => {
            observer.disconnect();
            resolve(cumulativeLayoutShift);
          }, 2000);
        });
      });

      // Cumulative Layout Shift should be minimal
      expect(layoutShifts).toBeLessThan(0.1);
    });
  }
});