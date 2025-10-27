## Al Maha React Beta — Project status & remaining work

Date: 2025-10-24

### Summary (current state)

- Target: Convert WordPress snapshots into a React/Vite beta with pixel parity and deliver a production-ready static build for cPanel.
- Core stack: React 18, React Router v6, Vite, CSS Modules.
- Recent fixes applied:
  - About page: removed duplicate sidebar heading and added a conservative, page-scoped CSS override so `.description` is not clipped (~70px issue fixed).
  - Added `goldSeparator` spacing helper (left 72px / right 36px) and applied it to About sections.
  - Shared CTA default text updated to "We are here to support you." so pages using the no-prop CTA match the live copy.
  - Culture/Careers page: added fragment anchors (`#apply-now`, `#life-at-almaha`) to match live fragments.
  - Canonicalization: `/career` now redirects to `/culture-at-al-maha` both client-side (React Router Navigate) and server-side via `public/.htaccess` (`Redirect 301 /career /culture-at-al-maha`).
  - Privacy Policy PDF placed at `public/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` and confirmed in `dist/` after build.
  - Ran production build and created `dist/` and a packaged `dist.zip` (63 MB). SHA-256: `e6e252bc8fe52f835076ead065a1bb6b660469554a2142fd027b4a622b74c6b3`.
  - Extracted header/footer links from saved HTML snapshots and wrote `LIVE_ROUTES.md` (29 unique hrefs across snapshots).

### Files changed / added (high-level)

- `src/pages/About.jsx` — removed duplicate heading; applied `goldSeparator`.
- `src/pages/About.module.css` — added defensive override for `.description` and `goldSeparator` spacing rules.
- `src/components/home/CTASection.jsx` — default `title` updated.
- `src/pages/CultureAtAlMaha.jsx` — added `id` anchors (`apply-now`, `life-at-almaha`).
- `src/App.jsx` — client-side redirect: `/career` -> `/culture-at-al-maha`.
- `public/.htaccess` — added `Redirect 301 /career /culture-at-al-maha` (server-level canonicalization for cPanel/Apache).
- `public/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — placeholder/real PDF included.
- `scripts/extract_routes.py` — script to generate `LIVE_ROUTES.md` from local snapshots.
- `LIVE_ROUTES.md` — extracted header/footer hrefs.
- `dist/` & `dist.zip` — production artifacts created.

### Build & artifacts

- `dist/` produced by `npm run build` (Vite). Rebuilt after edits to ensure changes are reflected.
- `dist.zip` created at repository root (63 MB). SHA-256 checksum above.

### Quality gates (status)

- Build: PASS — production build completed successfully and includes expected files.
- Lint / Typecheck: NOT RUN — no automated lint/typecheck executed in this session.
- Visual tests (Playwright audits): NOT RUN in this session — a visual audit summary exists in `context/AUDIT_REPORT.md` showing current diffs and areas to improve.

### Known visual differences (from audit)

- Buttons: padding, border, background, border-radius differ from live styles (live buttons use Roboto, borders and background gold; current buttons lack border-radius and have different padding).
- Heading (`h2`) spacing/display differences: live site uses inline-block sizing and margins that differ from current implementation (audit reports large H2 differences across pages).
- Header & footer typography and spacing show consistent differences vs live across many pages.

### Remaining work / recommended next tasks (prioritized)

1) Run Playwright visual tests and iterate to 100% pixel parity (MANDATORY per conversion policy)
   - Run Playwright at 375 / 768 / 1920 viewports.
   - Fix pages with largest diffs first (audit shows `our-brands`, `domestic-market`, `corporate-social-responsibility`, `about`, `what-we-do/*`).

2) Address global style gaps to reduce many small diffs:
   - Normalize font-family / weights (Roboto) and base sizes to match the live site.
   - Adjust button styles: padding, border, background color (#ECC558 / rgb(236,197,88)), border-radius (8px), text-transform and letter-spacing where needed.
   - Ensure `h1`/`h2` display and margins match live (inline-block vs block where required).

3) Expand anchor/id coverage where live fragments exist (search `LIVE_ROUTES.md` for fragment links and add matching `id`s in React pages).

4) Convert `LIVE_ROUTES.md` into an `.htaccess` redirect manifest (server-level) if you want to keep additional legacy route redirects beyond `/career`.

5) Replace placeholder Privacy PDF with final authoritative PDF if a newer version exists, then rebuild and repackage.

6) Optional: Lint/Typecheck and small unit/static checks; run full CI checks if available.

7) Final packaging & delivery checklist:
   - Run Playwright visual tests and iterate until 100% match.
   - Ensure zero console errors/warnings in dev server.
   - Run `npm run build` and verify `dist/` includes all legacy asset paths (pdfs, uploads) and `.htaccess`.
   - Create final `dist.zip` and provide checksum.

### How to reproduce locally (short)

1. Dev server (inspect pages):
```bash
npm run dev
```

2. Build production:
```bash
npm run build
```

3. Serve the `dist/` folder locally for a quick smoke-test (optional):
```bash
npx serve dist
```

4. Run Playwright visual tests (if configured):
```bash
npm run test:visual
```

### Notes / next action suggestion

I can run the Playwright visual comparisons now, produce the visual diff report, and start fixing the highest-diff pages iteratively until they match. Alternatively, I can convert `LIVE_ROUTES.md` into a full `.htaccess` redirect list and commit it for deployment. Which would you like me to do next?

---
Generated from the conversion session state and visual audit (see `context/AUDIT_REPORT.md`).
