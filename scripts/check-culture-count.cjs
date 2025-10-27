const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const http = require('http');

(async () => {
  const DIST = path.resolve(__dirname, '..', 'dist');
  const PORT = process.env.PORT || 4173;
  const HOST_URL = process.env.HOST_URL;

  let server;
  let baseUrl;

  if (!HOST_URL) {
    // start a simple static server (no external deps)
    const indexFile = path.join(DIST, 'index.html');
    const serverInstance = http.createServer((req, res) => {
      try {
        const reqUrl = req.url && req.url !== '/' ? req.url.split('?')[0] : '/';
        let filePath = path.join(DIST, decodeURIComponent(reqUrl));
        if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
          filePath = indexFile;
        }
        const ext = path.extname(filePath).toLowerCase();
        const mimeMap = {
          '.js': 'application/javascript', '.mjs': 'application/javascript', '.css': 'text/css', '.html': 'text/html', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.map': 'application/json'
        };
        const contentType = mimeMap[ext] || 'application/octet-stream';
        res.writeHead(200, { 'Content-Type': contentType });
        const stream = fs.createReadStream(filePath);
        stream.pipe(res);
      } catch (err) {
        res.writeHead(500);
        res.end('Server error');
      }
    });
    await new Promise((resolve, reject) => {
      serverInstance.listen(PORT, (err) => {
        if (err) return reject(err);
        console.log(`Static server serving dist/ at http://localhost:${PORT}`);
        resolve();
      });
    });
    server = serverInstance;
    baseUrl = `http://localhost:${PORT}`;
  } else {
    baseUrl = HOST_URL.replace(/\/$/, '');
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const url = baseUrl + '/culture-at-al-maha';
  console.log('Visiting', url);
  await page.goto(url, { waitUntil: 'networkidle' });

  // Simple presence check: count occurrences of the word 'Responsibility' in visible page text
  const bodyText = await page.evaluate(() => document.body.innerText || '');
  const matches = (bodyText.match(/\bResponsibility\b/gi) || []);
  const count = matches.length;
  console.log('Occurrences of word "Responsibility" on page (approx):', count);

  await page.screenshot({ path: path.resolve(__dirname, '..', 'tmp-screenshots', 'Culture_count_check.png'), fullPage: false }).catch(()=>{});

  await browser.close();
  if (server) server.close();

  // write a small json
  const out = { url, approx_h3_count: count };
  const outPath = path.resolve(__dirname, '..', 'tmp-results', 'culture_count_local.json');
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, JSON.stringify(out, null, 2));
  console.log('Wrote results to', outPath);
})();
