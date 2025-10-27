const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const serveStatic = require('serve-static');
const finalhandler = require('finalhandler');
const http = require('http');

(async () => {
  const DIST = path.resolve(__dirname, '..', 'dist');
  const PORT = process.env.PORT || 4173;
  const HOST_URL = process.env.HOST_URL;

  let server;
  let baseUrl;

  if (!HOST_URL) {
    // start a simple static server
    const serve = serveStatic(DIST, { index: ['index.html'] });
    server = http.createServer(function (req, res) {
      serve(req, res, finalhandler(req, res));
    }).listen(PORT);
    baseUrl = `http://localhost:${PORT}`;
    console.log(`Static server serving dist/ at ${baseUrl}`);
  } else {
    baseUrl = HOST_URL.replace(/\/$/, '');
  }

  const browser = await chromium.launch();
  const page = await browser.newPage();
  const url = baseUrl + '/culture-at-al-maha';
  console.log('Visiting', url);
  await page.goto(url, { waitUntil: 'networkidle' });

  // Find the heading node that contains 'Company Culture' and then count following value items
  const heading = await page.$x("//h2[contains(normalize-space(.), 'Company Culture')]");
  let count = -1;
  if (heading.length) {
    const h = heading[0];
    // Find the nearest ancestor row then count h3 elements under it
    const container = await h.evaluateHandle(node => {
      // climb to parent that contains icon boxes
      let el = node;
      while (el && !el.querySelectorAll) el = el.parentElement;
      // try to find following sibling containing icon boxes
      let parent = el.parentElement;
      const found = parent.querySelectorAll('.icon-box-heading h3, .icon-box-content h3, .valueItem h3, h3');
      return found.length ? parent : el.parentElement;
    });

    // Count h3s inside the larger right column area (limit search)
    count = await page.evaluate(el => {
      const right = el.querySelectorAll('.icon-box-heading h3, .icon-box-content h3, .valueItem h3, .cultureValues h3, h3');
      // Filter duplicates and headings that are not part of the icon boxes by checking text length
      const texts = Array.from(right).map(n => n.textContent && n.textContent.trim()).filter(Boolean);
      return texts.length;
    }, container);
  } else {
    console.log('Company Culture heading not found.');
  }

  console.log('Detected h3 count in Culture area (approx):', count);

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
