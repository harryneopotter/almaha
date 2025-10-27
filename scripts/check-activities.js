import { chromium } from 'playwright';
import http from 'http';
import path from 'path';
import fs from 'fs';

const DEFAULT_PORT = 4173;
const HOST = process.env.HOST_URL || `http://localhost:${DEFAULT_PORT}`;

let staticServer = null;
async function startStaticServerIfNeeded() {
  if (process.env.HOST_URL) return null;
  const distDir = path.resolve(process.cwd(), 'dist');
  const indexFile = path.join(distDir, 'index.html');

  const server = http.createServer((req, res) => {
    try {
      const filePath = req.url && req.url !== '/' ? path.join(distDir, req.url) : indexFile;
      let servePath = filePath;
      if (!fs.existsSync(servePath) || fs.statSync(servePath).isDirectory()) {
        servePath = indexFile;
      }
      const ext = path.extname(servePath).toLowerCase();
      const mimeMap = {
        '.js': 'application/javascript',
        '.mjs': 'application/javascript',
        '.css': 'text/css',
        '.html': 'text/html',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.jpeg': 'image/jpeg',
        '.svg': 'image/svg+xml',
        '.webp': 'image/webp',
        '.woff': 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf': 'font/ttf',
        '.map': 'application/json'
      };
      const contentType = mimeMap[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      const stream = fs.createReadStream(servePath);
      stream.pipe(res);
    } catch (err) {
      res.writeHead(500);
      res.end('Server error');
    }
  });

  await new Promise((resolve, reject) => {
    server.listen(DEFAULT_PORT, (err) => {
      if (err) return reject(err);
      console.log(`Static server serving dist/ at http://localhost:${DEFAULT_PORT}`);
      resolve();
    });
  });

  staticServer = server;
  return server;
}

async function stopStaticServer() {
  if (!staticServer) return;
  await new Promise((resolve) => staticServer.close(resolve));
}

const pages = [
  { name: 'CSR', path: '/corporate-social-responsibility' }
];

(async () => {
  await startStaticServerIfNeeded();
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const results = [];

  for (const p of pages) {
    const url = HOST + p.path;
    const page = await context.newPage();
    page.on('console', (m) => console.log('  page console>', m.type(), m.text()));
    console.log(`Visiting ${url}`);
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });
    } catch (err) {
      console.error(`Failed to load ${url}: ${err.message}`);
      results.push({ page: p.name, url, error: err.message });
      await page.close();
      continue;
    }

    try {
      await page.waitForTimeout(1500);
      // wait for any CSR-related DOM to hydrate
      await page.waitForSelector('h1, .description, .activitiesGrid, video, iframe', { timeout: 5000 });
    } catch (e) {
      // no-op
    }

    // Robust detection: find the H2 that contains "CSR Activities" (local classnames are CSS-module hashed)
    const activitiesInfo = await page.evaluate(() => {
      function findActivitiesSection() {
        const headings = Array.from(document.querySelectorAll('h2'));
        const match = headings.find(h => /CSR Activities/i.test(h.textContent));
        if (!match) return null;
          // prefer to inspect a nearby container, but fall back to document-wide scan
          // collect h3/img/p counts within a reasonable ancestor (up to 6 levels)
          let section = null;
          let node = match;
          for (let i = 0; i < 6 && node; i++) {
            if (node.querySelector && node.querySelector('h3, img, video, iframe')) {
              section = node;
              break;
            }
            node = node.parentElement;
          }
          section = section || document.body;
          const h3count = section.querySelectorAll('h3').length;
          const imgcount = section.querySelectorAll('img').length;
          const pcount = section.querySelectorAll('p').length;
          // detect video/iframe that appear after the heading in the DOM
          const mediaEls = Array.from(document.querySelectorAll('video, iframe'));
          const media = mediaEls.filter(el => match.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING)
            .map(el => {
              let src = el.getAttribute('src');
              if (!src && el.tagName.toLowerCase() === 'video') {
                const source = el.querySelector('source');
                if (source) src = source.getAttribute('src');
              }
              return { tag: el.tagName.toLowerCase(), src };
            });
        return { foundHeading: !!match, h3count, imgcount, pcount, media };
      }
      return findActivitiesSection();
    });

    const hasActivitiesGrid = activitiesInfo !== null && activitiesInfo.h3count > 0;
    const activityItems = activitiesInfo ? activitiesInfo.h3count : 0;
    const videos = activitiesInfo ? activitiesInfo.media : [];

    // save screenshot for visual inspection
    try {
      await fs.promises.mkdir(path.join(process.cwd(), 'tmp-screenshots'), { recursive: true });
      const shotPath = path.join(process.cwd(), 'tmp-screenshots', `${p.name.replace(/\s+/g, '_')}_activities.png`);
      await page.screenshot({ path: shotPath, fullPage: true });
      console.log(`  Saved screenshot to ${shotPath}`);
    } catch (err) {
      // ignore
    }

    results.push({ page: p.name, url, hasActivitiesGrid, activityItems, media: videos });
    await page.close();
  }

  await browser.close();
  await stopStaticServer();

  const outDir = path.join(process.cwd(), 'tmp-results');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  const hostLabel = (process.env.HOST_URL || `http://localhost:${DEFAULT_PORT}`).replace(/https?:\/\//, '').replace(/[:\/\.]/g, '_');
  const outFile = path.join(outDir, `${hostLabel}_activities.json`);
  fs.writeFileSync(outFile, JSON.stringify({ host: HOST, timestamp: new Date().toISOString(), results }, null, 2), 'utf8');
  console.log(`Wrote results to ${outFile}`);

  for (const r of results) {
    console.log(`\nPage: ${r.page} — ${r.url}`);
    if (r.error) {
      console.log('  ERROR:', r.error);
      continue;
    }
    console.log(`  hasActivitiesGrid: ${r.hasActivitiesGrid}`);
    console.log(`  activityItems: ${r.activityItems}`);
    console.log(`  media found: ${r.media.length}`);
    for (const m of r.media) console.log(`    - ${m.tag} src=${m.src}`);
  }

  process.exit(0);
})();
