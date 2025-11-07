import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';
import pixelmatch from 'pixelmatch';
import jpeg from 'jpeg-js';
import { cases } from '../tests/audit.config.js';

const mapping = {
  'about': 'about_us-almaha.jpeg',
  'exports': 'exports_profile-almaha.jpeg',
  'quality-assurance': 'quality_assurance-almaha.jpeg',
  'domestic-market': 'domestic_market-almaha.jpeg',
  'our-brands': 'our_brands-almaha.jpeg',
  'culture-at-al-maha': 'workspace_career-almaha.jpeg',
  'corporate-social-responsibility': 'csr-almaha.jpeg',
};

function readPNGToImage(pngBuffer) {
  const img = PNG.sync.read(pngBuffer);
  return { data: img.data, width: img.width, height: img.height };
}

function readJPEGToImage(jpegBuffer) {
  const img = jpeg.decode(jpegBuffer, { useTArray: true });
  return { data: img.data, width: img.width, height: img.height };
}

function writePNG(data, width, height, outPath) {
  const png = new PNG({ width, height });
  png.data.set(data);
  fs.writeFileSync(outPath, PNG.sync.write(png));
}

function cropToMin(a, b) {
  const w = Math.min(a.width, b.width);
  const h = Math.min(a.height, b.height);
  const aOut = new Uint8ClampedArray(w * h * 4);
  const bOut = new Uint8ClampedArray(w * h * 4);
  // Copy row by row
  for (let y = 0; y < h; y++) {
    const aStart = (y * a.width) * 4;
    const bStart = (y * b.width) * 4;
    const outStart = (y * w) * 4;
    aOut.set(a.data.subarray(aStart, aStart + w * 4), outStart);
    bOut.set(b.data.subarray(bStart, bStart + w * 4), outStart);
  }
  return { w, h, aData: aOut, bData: bOut };
}

async function main() {
  const localDir = path.join('test-results', 'local-caps');
  const liveDir = 'live-caps';
  const outDir = path.join('test-results', 'live-caps-diff');
  await fs.promises.mkdir(outDir, { recursive: true });

  const report = [];

  for (const c of cases) {
    const liveName = mapping[c.id];
    if (!liveName) {
      report.push({ page: c.id, status: 'skipped', reason: 'No live-caps mapping' });
      continue;
    }
    const localPath = path.join(localDir, `${c.id}.png`);
    const livePath = path.join(liveDir, liveName);
    if (!fs.existsSync(localPath) || !fs.existsSync(livePath)) {
      report.push({ page: c.id, status: 'missing', local: fs.existsSync(localPath), live: fs.existsSync(livePath) });
      continue;
    }

    const localImg = readPNGToImage(fs.readFileSync(localPath));
    const liveImg = readJPEGToImage(fs.readFileSync(livePath));

    const { w, h, aData, bData } = cropToMin(localImg, liveImg);
    const diff = new Uint8ClampedArray(w * h * 4);
    const mismatched = pixelmatch(aData, bData, diff, w, h, { threshold: 0.1 });
    const total = w * h;
    const ratio = mismatched / total;

    const diffPath = path.join(outDir, `${c.id}-diff.png`);
    writePNG(diff, w, h, diffPath);

    report.push({ page: c.id, status: 'compared', width: w, height: h, mismatched, total, ratio, diffImage: diffPath });
  }

  const lines = [
    '# Live-caps vs Local Screenshots',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
  ];
  for (const r of report) {
    if (r.status === 'compared') {
      lines.push(`- ${r.page}: ${(r.ratio * 100).toFixed(2)}% diff (${r.mismatched}/${r.total}) -> ${r.diffImage}`);
    } else if (r.status === 'missing') {
      lines.push(`- ${r.page}: missing assets (local: ${r.local ? 'ok' : 'missing'}, live: ${r.live ? 'ok' : 'missing'})`);
    } else if (r.status === 'skipped') {
      lines.push(`- ${r.page}: skipped (${r.reason})`);
    }
  }
  await fs.promises.writeFile('LIVE_CAPS_COMPARISON.md', lines.join('\n'));
  console.log('Comparison complete. See LIVE_CAPS_COMPARISON.md and test-results/live-caps-diff/*.png');
}

main().catch(err => { console.error(err); process.exit(1); });
