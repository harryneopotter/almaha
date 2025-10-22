import { webkit } from 'playwright';

(async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();

  await page.goto('http://localhost:3000/about');
  await page.screenshot({ path: 'jules-scratch/verification/about-us.png' });

  await page.goto('http://localhost:3000/quality-assurance');
  await page.screenshot({ path: 'jules-scratch/verification/quality-assurance.png' });

  await page.goto('http://localhost:3000/exports');
  await page.screenshot({ path: 'jules-scratch/verification/exports.png' });

  await browser.close();
})();
