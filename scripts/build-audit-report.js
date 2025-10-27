import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const auditDir = path.join(root, 'test-results', 'audit');
const reportPath = path.join(root, 'AUDIT_REPORT.md');

if (!fs.existsSync(auditDir)) {
  console.error('No audit results found. Run: npm run audit');
  process.exit(1);
}

function pct(n) { return (n * 100).toFixed(2) + '%'; }

let md = `# Al Maha – Visual Audit Report

Generated: ${new Date().toISOString()}

- Viewports: 375 (mobile), 768 (tablet), 1920 (desktop)
- Diff images saved under test-results/audit/<page>/<page>-<viewport>-diff.png
- Live base: ${process.env.LIVE_BASE || 'https://almahafoods.com'}
- React base: ${process.env.REACT_BASE || 'http://localhost:3000'}
`;

const pages = fs
  .readdirSync(auditDir)
  .filter((f) => fs.statSync(path.join(auditDir, f)).isDirectory());

for (const page of pages) {
  const dir = path.join(auditDir, page);
  const jsons = fs.readdirSync(dir).filter((f) => f.endsWith('.json')).sort();
  if (!jsons.length) continue;

  md += `\n\n## ${page}\n`;
  for (const file of jsons) {
    const rec = JSON.parse(fs.readFileSync(path.join(dir, file), 'utf8'));
    md += `\n### ${rec.viewport}\n`;
    md += `- Live: ${rec.liveUrl}\n`;
    md += `- React: ${rec.reactUrl}\n`;
    md += `- Screenshot diff: ${pct(rec.screenshotDiff.ratio)} (${rec.screenshotDiff.mismatched}/${rec.screenshotDiff.total} pixels)\n`;
    const relDiff = path.relative(root, rec.screenshotDiff.diffImage);
    if (fs.existsSync(path.join(root, relDiff))) {
      md += `- Diff image: ${relDiff}\n`;
    }
    const diffs = rec.styleDiff || {};
    const keys = Object.keys(diffs);
    if (!keys.length) {
      md += `- Computed styles: No tracked differences\n`;
    } else {
      md += `- Computed styles differences:\n`;
      for (const sel of keys) {
        const v = diffs[sel];
        if (v?.missingIn) {
          md += `  - ${sel}: missing in ${v.missingIn}\n`;
          continue;
        }
        md += `  - ${sel}:\n`;
        for (const d of v) {
          md += `    - ${d.prop}: live="${d.live}" vs react="${d.react}"\n`;
        }
      }
    }
  }
}

fs.writeFileSync(reportPath, md, 'utf8');
console.log(`Report written to ${reportPath}`);
