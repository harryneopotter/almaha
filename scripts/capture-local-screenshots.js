import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { cases, bases, globalHides } from '../tests/audit.config.js';

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function main() {
  const outDir = path.join('test-results', 'local-caps');
  await ensureDir(outDir);

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();

  for (const c of cases) {
    const url = `${bases.react}${c.reactPath}`;
    console.log(`Capturing: ${c.id} -> ${url}`);
    await page.goto(url, { waitUntil: 'networkidle' });
    // Stabilize animations, hide cookie/admin bars
    await page.addStyleTag({ content: `*{animation:none!important;transition:none!important;caret-color:transparent!important} html{scroll-behavior:auto!important}\n${globalHides.map(sel=>`${sel}{visibility:hidden!important}`).join('\n')}` });
    await page.evaluate(() => { window.scrollTo(0,0); return true; });
    const buf = await page.screenshot({ fullPage: true });
    const filePath = path.join(outDir, `${c.id}.png`);
    await fs.promises.writeFile(filePath, buf);
  }

  await browser.close();
  console.log(`Saved local screenshots to ${outDir}`);
}

main().catch(err => { console.error(err); process.exit(1); });
