import { webkit } from 'playwright';

(async () => {
  const browser = await webkit.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:3000/exports');
  await page.screenshot({ path: 'exports-screenshot.png' });
  await browser.close();
})();
