import fs from 'node:fs';
import path from 'node:path';
import { PNG } from 'pngjs';
import { cases } from '../tests/audit.config.js';

function readPNG(p) {
  const buf = fs.readFileSync(p);
  return PNG.sync.read(buf);
}

function analyzeHotspots(img) {
  const { width: w, height: h, data } = img;
  const rowCounts = new Array(h).fill(0);
  const colCounts = new Array(w).fill(0);
  let totalDiff = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = data[idx], g = data[idx + 1], b = data[idx + 2];
      // pixelmatch writes non-black on differences; treat any non-zero as diff
      if (r !== 0 || g !== 0 || b !== 0) {
        rowCounts[y]++;
        colCounts[x]++;
        totalDiff++;
      }
    }
  }
  // Aggregate by vertical thirds
  const thirds = [0, Math.floor(h / 3), Math.floor((2 * h) / 3), h];
  const thirdSums = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    for (let y = thirds[i]; y < thirds[i + 1]; y++) thirdSums[i] += rowCounts[y];
  }
  const perThird = thirdSums.map(s => totalDiff ? s / totalDiff : 0);
  // Left/center/right by horizontal thirds
  const thirdsX = [0, Math.floor(w / 3), Math.floor((2 * w) / 3), w];
  const thirdSumsX = [0, 0, 0];
  for (let i = 0; i < 3; i++) {
    for (let x = thirdsX[i]; x < thirdsX[i + 1]; x++) thirdSumsX[i] += colCounts[x];
  }
  const perThirdX = thirdSumsX.map(s => totalDiff ? s / totalDiff : 0);

  return { h, w, totalDiff, perThird, perThirdX };
}

function labelZones(perThird) {
  const zones = ['top', 'middle', 'bottom'];
  return zones
    .map((z, i) => ({ zone: z, frac: perThird[i] }))
    .sort((a, b) => b.frac - a.frac)
    .slice(0, 2); // top 2 zones
}

async function main() {
  const diffDir = path.join('test-results', 'local-vs-live-diff');
  const lines = [
    '# Diff Hotspot Analysis',
    '',
    `Generated: ${new Date().toISOString()}`,
    '',
    'Fractions show where differences concentrate by zone (top/middle/bottom and left/center/right).',
    '',
  ];
  for (const c of cases) {
    const diffPath = path.join(diffDir, `${c.id}-diff.png`);
    if (!fs.existsSync(diffPath)) { lines.push(`- ${c.id}: missing diff`); continue; }
    const img = readPNG(diffPath);
    const { perThird, perThirdX } = analyzeHotspots(img);
    const zonesY = labelZones(perThird);
    const zonesX = labelZones(perThirdX).map(z => ({ zone: z.zone.replace('top','left').replace('middle','center').replace('bottom','right'), frac: z.frac }));
    lines.push(`- ${c.id}: vertical → ${zonesY.map(z => `${z.zone} ${(z.frac*100).toFixed(1)}%`).join(', ')} | horizontal → ${zonesX.map(z => `${z.zone} ${(z.frac*100).toFixed(1)}%`).join(', ')}`);
  }
  await fs.promises.writeFile('LOCAL_VS_LIVE_HOTSPOTS.md', lines.join('\n'));
  console.log('Wrote LOCAL_VS_LIVE_HOTSPOTS.md');
}

main().catch(err => { console.error(err); process.exit(1); });
