import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import { cases, bases, globalHides } from '../tests/audit.config.js';

function normalizeText(s) {
  if (!s) return '';
  return s
    .replace(/\u00a0/g, ' ') // nbsp
    .replace(/[\t\r]+/g, ' ')
    .replace(/\s+\n/g, '\n')
    .replace(/\n\s+/g, '\n')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function jaccardSimilarity(a, b) {
  const as = new Set(a.toLowerCase().split(/\s+/).filter(Boolean));
  const bs = new Set(b.toLowerCase().split(/\s+/).filter(Boolean));
  const union = new Set([...as, ...bs]);
  let inter = 0;
  for (const t of as) if (bs.has(t)) inter++;
  if (union.size === 0) return 1;
  return inter / union.size;
}

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function extractPageText(page) {
  // Hide noisy UI and chrome
  const hides = [
    'header', 'footer', 'nav',
    ...globalHides,
  ]
    .map((sel) => `${sel}{display:none!important;visibility:hidden!important}`)
    .join('\n');

  await page.addStyleTag({ content: `*{caret-color:transparent!important} ${hides}` });

  const text = await page.evaluate(() => {
    const pick = (sels) => sels.map((s) => document.querySelector(s)).find(Boolean);
    const el = pick(['main', '#main', '#content', '.site-content', '.page-content', 'body']);
    if (!el) return document.body?.innerText || '';
    return el.innerText || '';
  });
  return normalizeText(text);
}

async function run() {
  const outDir = path.join('test-results', 'copy');
  await ensureDir(outDir);

  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1920, height: 1080 } });
  const page = await ctx.newPage();

  const liveBase = bases.live;
  const reactBase = bases.react;

  const rows = [];

  for (const c of cases) {
    const liveUrl = `${liveBase}${c.livePath}`;
    const reactUrl = `${reactBase}${c.reactPath}`;

    const record = { id: c.id, liveUrl, reactUrl, similarity: 0, status: 'FAIL' };
    try {
      await page.goto(liveUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
      const liveText = await extractPageText(page);

      await page.goto(reactUrl, { waitUntil: 'domcontentloaded', timeout: 60000 });
      const reactText = await extractPageText(page);

      const sim = jaccardSimilarity(liveText, reactText);
      record.similarity = sim;
      record.status = sim >= 0.95 ? 'PASS' : 'FAIL';

      await fs.promises.writeFile(path.join(outDir, `${c.id}-live.txt`), liveText, 'utf8');
      await fs.promises.writeFile(path.join(outDir, `${c.id}-react.txt`), reactText, 'utf8');
    } catch (err) {
      record.error = err?.message || String(err);
    }
    rows.push(record);
    console.log(`[copy] ${record.id}: ${record.status} ${(record.similarity * 100).toFixed(1)}%`);
  }

  // Build report
  const lines = [];
  lines.push('# Copy Comparison Report');
  lines.push('');
  lines.push(`Live base: ${liveBase}`);
  lines.push(`React base: ${reactBase}`);
  lines.push('');
  lines.push('| Page | Similarity | Status |');
  lines.push('|------|------------:|:------:|');
  for (const r of rows) {
    const pct = r.similarity ? `${(r.similarity * 100).toFixed(1)}%` : '-';
    lines.push(`| ${r.id} | ${pct} | ${r.status} |`);
  }
  lines.push('');
  lines.push('Per-page raw text saved under test-results/copy/*.txt');

  await fs.promises.writeFile('COPY_COMPARISON.md', lines.join('\n'), 'utf8');

  await browser.close();
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
