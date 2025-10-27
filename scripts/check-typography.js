import { chromium } from 'playwright';
import http from 'http';
import path from 'path';
import fs from 'fs';

// If HOST_URL is provided, use it. Otherwise, start a minimal static server
// serving the built `dist/` directory on port 4173 and use that as the host.
const DEFAULT_PORT = 4173;
const HOST = process.env.HOST_URL || `http://localhost:${DEFAULT_PORT}`;

let staticServer = null;
async function startStaticServerIfNeeded() {
  if (process.env.HOST_URL) return null;
  const distDir = path.resolve(process.cwd(), 'dist');
  const indexFile = path.join(distDir, 'index.html');

  const server = http.createServer((req, res) => {
    try {
      // Always serve index.html for SPA routes
      const filePath = req.url && req.url !== '/' ? path.join(distDir, req.url) : indexFile;
      let servePath = filePath;
      if (!fs.existsSync(servePath) || fs.statSync(servePath).isDirectory()) {
        servePath = indexFile;
      }
      // set a basic Content-Type based on file extension so module scripts load
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
  { name: 'CSR', path: '/corporate-social-responsibility' },
  { name: 'Exports', path: '/what-we-do/exports' },
  { name: 'Quality Assurance', path: '/what-we-do/quality-assurance' },
  // include the correct live path for Culture; local build intentionally omits heading
  { name: 'Culture at Al Maha', path: '/culture-at-al-maha' }
];

function pickHeading(page) {
  // Try several selectors that are used across pages
  return page.$('header .heroContent h1, .heroContent h1, .slideTitle, h1');
}

function pickParagraph(page) {
  return page.$('main p, section p, .description p, p');
}

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

    // wait a moment for any client-side rendering/animations
    try {
      await page.waitForSelector('h1, .heroContent, .slideTitle', { timeout: 10000 });
    } catch (e) {
      // fall back to a slightly longer static wait
      await page.waitForTimeout(3000);
    }

    // save a screenshot for debugging
    try {
      await fs.promises.mkdir(path.join(process.cwd(), 'tmp-screenshots'), { recursive: true });
      const shotPath = path.join(process.cwd(), 'tmp-screenshots', `${p.name.replace(/\s+/g, '_')}.png`);
      await page.screenshot({ path: shotPath, fullPage: true });
      console.log(`  Saved screenshot to ${shotPath}`);
    } catch (err) {
      // ignore screenshot errors
    }

      // dump a small portion of the page HTML for debugging
      try {
        const html = await page.content();
        console.log('  page.content (preview):', html.slice(0, 600).replace(/\n/g, ' '));
      } catch (e) {
        // ignore
      }

    const headingHandle = await pickHeading(page);
    const paraHandle = await pickParagraph(page);

    const headingInfo = headingHandle
      ? await page.evaluate((el) => {
          const s = window.getComputedStyle(el);
          return {
            tag: el.tagName,
            text: el.textContent.trim().slice(0, 120),
            fontFamily: s.fontFamily,
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
            textAlign: s.textAlign,
            lineHeight: s.lineHeight
          };
        }, headingHandle)
      : null;

    const paraInfo = paraHandle
      ? await page.evaluate((el) => {
          const s = window.getComputedStyle(el);
          return {
            tag: el.tagName,
            text: el.textContent.trim().slice(0, 160),
            fontFamily: s.fontFamily,
            fontSize: s.fontSize,
            fontWeight: s.fontWeight,
            textAlign: s.textAlign,
            lineHeight: s.lineHeight
          };
        }, paraHandle)
      : null;

    results.push({ page: p.name, url, heading: headingInfo, paragraph: paraInfo });
    await page.close();
  }

  await browser.close();
  await stopStaticServer();

  // ensure output directory
  const outDir = path.join(process.cwd(), 'tmp-results');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  // pick filename based on host
  const hostLabel = (process.env.HOST_URL || `http://localhost:${DEFAULT_PORT}`).replace(/https?:\/\//, '').replace(/[:\/\.]/g, '_');
  const outFile = path.join(outDir, `${hostLabel}.json`);
  fs.writeFileSync(outFile, JSON.stringify({ host: HOST, timestamp: new Date().toISOString(), results }, null, 2), 'utf8');
  console.log(`Wrote results to ${outFile}`);

  // also print a human-friendly summary
  console.log('\nTYPOGRAPHY CHECK RESULTS');
  console.log('=========================\n');
  for (const r of results) {
    console.log(`Page: ${r.page} — ${r.url}`);
    if (r.error) {
      console.log('  ERROR:', r.error);
      console.log('');
      continue;
    }
    if (r.heading) {
      console.log('  Heading:');
      console.log(`    tag: ${r.heading.tag}`);
      console.log(`    text (preview): "${r.heading.text}"`);
      console.log(`    font-family: ${r.heading.fontFamily}`);
      console.log(`    font-size: ${r.heading.fontSize}`);
      console.log(`    font-weight: ${r.heading.fontWeight}`);
      console.log(`    text-align: ${r.heading.textAlign}`);
      console.log(`    line-height: ${r.heading.lineHeight}`);
    } else {
      console.log('  Heading: not found');
    }

    if (r.paragraph) {
      console.log('  Paragraph:');
      console.log(`    tag: ${r.paragraph.tag}`);
      console.log(`    text (preview): "${r.paragraph.text}"`);
      console.log(`    font-family: ${r.paragraph.fontFamily}`);
      console.log(`    font-size: ${r.paragraph.fontSize}`);
      console.log(`    font-weight: ${r.paragraph.fontWeight}`);
      console.log(`    text-align: ${r.paragraph.textAlign}`);
      console.log(`    line-height: ${r.paragraph.lineHeight}`);
    } else {
      console.log('  Paragraph: not found');
    }
    console.log('');
  }

  console.log('\nDone.');
  process.exit(0);
})();
