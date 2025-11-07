import fs from 'fs';
import path from 'path';

function loadResults(file) {
  if (!fs.existsSync(file)) throw new Error(`Missing file ${file}`);
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function compareField(a, b) {
  if (a === undefined && b === undefined) return null;
  if (a === undefined) return { status: 'missing_local', local: null, live: b };
  if (b === undefined) return { status: 'missing_live', local: a, live: null };
  if (String(a).trim() === String(b).trim()) return { status: 'same', value: a };
  return { status: 'diff', local: a, live: b };
}

function comparePage(local, live) {
  const out = { page: local.page || live.page, url_local: local.url, url_live: live.url, diffs: [] };
  const sections = ['heading', 'paragraph'];
  const props = ['tag', 'text', 'fontFamily', 'fontSize', 'fontWeight', 'textAlign', 'lineHeight'];

  for (const s of sections) {
    const la = local[s] || null;
    const lb = live[s] || null;
    if (!la && !lb) continue;
    for (const p of props) {
      const a = la ? la[p] : undefined;
      const b = lb ? lb[p] : undefined;
      const res = compareField(a, b);
      if (!res) continue;
      if (res.status === 'same') continue;
      out.diffs.push({ section: s, prop: p, result: res });
    }
  }
  return out;
}

function main() {
  const dir = path.join(process.cwd(), 'tmp-results');
  const localFile = path.join(dir, 'localhost_4173.json');
  const liveFile = path.join(dir, 'almahafoods_com.json');
  const local = loadResults(localFile);
  const live = loadResults(liveFile);
  const localMap = new Map(local.results.map(r => [r.page, r]));
  const liveMap = new Map(live.results.map(r => [r.page, r]));

  const pages = new Set([...localMap.keys(), ...liveMap.keys()]);
  const report = [];
  for (const p of pages) {
    const la = localMap.get(p) || { page: p, url: null };
    const lb = liveMap.get(p) || { page: p, url: null };
    report.push(comparePage(la, lb));
  }

  const outPath = path.join(dir, 'compare_report.json');
  fs.writeFileSync(outPath, JSON.stringify({ generated: new Date().toISOString(), report }, null, 2));
  console.log(`Wrote comparison report to ${outPath}`);
  // human readable summary
  for (const p of report) {
    console.log('\nPage:', p.page);
    if (p.diffs.length === 0) console.log('  No differences found.');
    for (const d of p.diffs) {
      const r = d.result;
      if (r.status === 'missing_local') console.log(`  ${d.section}.${d.prop}: missing in local — live=${r.live}`);
      else if (r.status === 'missing_live') console.log(`  ${d.section}.${d.prop}: missing in live — local=${r.local}`);
      else if (r.status === 'diff') console.log(`  ${d.section}.${d.prop}: local=${r.local}  live=${r.live}`);
    }
  }
}

main();
