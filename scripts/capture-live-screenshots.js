import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { cases, bases, globalHides } from '../tests/audit.config.js';

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function main() {
  const outDir = path.join('test-results', 'live-caps-png');
  await ensureDir(outDir);

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();
  page.setDefaultTimeout(45000);

  for (const c of cases) {
    const url = `${bases.live}${c.livePath}`;
    console.log(`Capturing (live): ${c.id} -> ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    // Stabilize and hide cookie/admin banners
    await page.addStyleTag({ content: `*{animation:none!important;transition:none!important;caret-color:transparent!important} html{scroll-behavior:auto!important}\n${globalHides.map(sel=>`${sel}{visibility:hidden!important}`).join('\n')}` });
    await page.evaluate(() => { window.scrollTo(0,0); return true; });
    const buf = await page.screenshot({ fullPage: true });
    const filePath = path.join(outDir, `${c.id}.png`);
    await fs.promises.writeFile(filePath, buf);
  }

  await browser.close();
  console.log(`Saved live screenshots to ${outDir}`);
}

main().catch(err => { console.error(err); process.exit(1); });
