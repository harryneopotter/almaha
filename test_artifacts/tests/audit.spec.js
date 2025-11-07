import { test } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import { viewports, bases, cases, selectors, styleProps, globalHides } from './audit.config.js';

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

async function stabilize(page, extraHides = []) {
  await page.addStyleTag({
    content: `
      * { animation: none !important; transition: none !important; caret-color: transparent !important; }
      html { scroll-behavior: auto !important; }
      ${[...globalHides, ...(extraHides || [])].map(sel => `${sel}{ visibility: hidden !important; }`).join('\n')}
    `,
  });
  await page.evaluate(async () => {
    if (document.fonts && document.fonts.status !== 'loaded') {
      try { await document.fonts.ready; } catch {}
    }
    window.scrollTo(0, 0);
    return true;
  });
}

async function captureComputedStyles(page, sels, props) {
  return await page.evaluate(({ sels, props }) => {
    const out = {};
    sels.forEach(sel => {
      const el = document.querySelector(sel);
      if (!el) { out[sel] = null; return; }
      const s = getComputedStyle(el);
      const obj = {};
      props.forEach(p => { obj[p] = s.getPropertyValue(p); });
      out[sel] = obj;
    });
    return out;
  }, { sels, props });
}

function diffImages(bufA, bufB, outPath) {
  const a = PNG.sync.read(bufA);
  const b = PNG.sync.read(bufB);
  const w = Math.min(a.width, b.width);
  const h = Math.min(a.height, b.height);
  const aCrop = new PNG({ width: w, height: h });
  const bCrop = new PNG({ width: w, height: h });
  PNG.bitblt(a, aCrop, 0, 0, w, h, 0, 0);
  PNG.bitblt(b, bCrop, 0, 0, w, h, 0, 0);

  const diff = new PNG({ width: w, height: h });
  const mismatched = pixelmatch(aCrop.data, bCrop.data, diff.data, w, h, { threshold: 0.1 });
  fs.writeFileSync(outPath, PNG.sync.write(diff));
  return { mismatched, total: w * h, ratio: mismatched / (w * h), width: w, height: h };
}

for (const vp of viewports) {
  test.describe(`${vp.name} ${vp.width}x${vp.height}`, () => {
    for (const c of cases) {
      test(`${c.id} – live vs react`, async ({ page }) => {
        const outDir = path.join('test-results', 'audit', c.id);
        ensureDir(outDir);

        await page.setViewportSize({ width: vp.width, height: vp.height });

        // Live
        await page.goto(`${bases.live}${c.livePath}`, { waitUntil: 'networkidle' });
        await stabilize(page, c.hideDuringScreenshot);
        const liveShot = await page.screenshot({ fullPage: true });
        const liveStyles = await captureComputedStyles(page, selectors, styleProps);

        // React
        await page.goto(`${bases.react}${c.reactPath}`, { waitUntil: 'networkidle' });
        await stabilize(page, c.hideDuringScreenshot);
        const reactShot = await page.screenshot({ fullPage: true });
        const reactStyles = await captureComputedStyles(page, selectors, styleProps);

        // Image diff
        const diffPath = path.join(outDir, `${c.id}-${vp.name}-diff.png`);
        const { mismatched, total, ratio, width, height } = diffImages(liveShot, reactShot, diffPath);

        // Style diff
        const styleDiff = {};
        for (const sel of selectors) {
          const a = liveStyles[sel];
          const b = reactStyles[sel];
          if (!a || !b) { styleDiff[sel] = { missingIn: !a ? 'live' : 'react' }; continue; }
          const diffs = [];
          for (const p of styleProps) {
            if ((a[p] || '') !== (b[p] || '')) {
              diffs.push({ prop: p, live: a[p], react: b[p] });
            }
          }
          if (diffs.length) styleDiff[sel] = diffs;
        }

        const record = {
          page: c.id,
          viewport: vp.name,
          liveUrl: `${bases.live}${c.livePath}`,
          reactUrl: `${bases.react}${c.reactPath}`,
          viewportSize: { width: vp.width, height: vp.height },
          screenshotDiff: { mismatched, total, ratio, width, height, diffImage: diffPath },
          styleDiff,
        };
        fs.writeFileSync(path.join(outDir, `${c.id}-${vp.name}.json`), JSON.stringify(record, null, 2));
      });
    }
  });
}
