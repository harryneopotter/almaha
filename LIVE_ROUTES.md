# Live site header & footer routes (extracted from local HTML snapshots)

Note: These routes were extracted from the HTML snapshot files in the workspace (no live network requests).

## Unique routes (hrefs)

- **https://twitter.com/** — text(s): (no link text)
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/** — text(s): Home
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`

## App routes → Live-site routes (mapping)

Below is a mapping between the React app routes (from `src/App.jsx`) and the equivalent live-site routes found in the HTML snapshots. Use this as the canonical routing map to keep old links/SEO intact. Notes show anchor fragments or differences where applicable.

- `/` (Home)
  - Live: `https://www.almahafoods.com/` (Home)

- `/about` (About page)
  - Live: `https://www.almahafoods.com/about/`
  - Live anchor sections: `#vision-mission`, `#values`, `#team` (e.g. `https://www.almahafoods.com/about#team`)

- `/what-we-do` (What We Do — single page in app)
  - Live: sections and subpages under `https://www.almahafoods.com/what-we-do/`
  - Subpage equivalents (app also has dedicated subroutes):
    - `/what-we-do/exports` → `https://www.almahafoods.com/what-we-do/exports/` (Exports Profile)
    - `/what-we-do/quality-assurance` → `https://www.almahafoods.com/what-we-do/quality-assurance/` (Quality Assurance)
    - `/what-we-do/domestic-market` → `https://www.almahafoods.com/what-we-do/domestic-market/` (Domestic Market)

- `/our-brands` (Our Brands)
  - Live: `https://www.almahafoods.com/our-brands/`

- `/blog` (Blog index)
  - Live: `https://www.almahafoods.com/blog/` and individual articles under `https://www.almahafoods.com/news/:slug` (e.g. `/news/indian-basmati-rice-market-update-august-2025`)
  - App: article route: `/news/:slug` (matches live article slugs)

- `/career` (Career page)
  - App: `/career` exists and renders `Career` component.
  - Live primary careers page uses `https://www.almahafoods.com/culture-at-al-maha/` (Workplace & Careers). The app also provides `/culture-at-al-maha` route mapped to `CultureAtAlMaha` component.
  - Recommendation: keep both `/career` and `/culture-at-al-maha` as valid routes (app already does) and canonicalize to the preferred live path when deploying redirects.

- `/culture-at-al-maha` (Culture / Work With Us)
  - Live: `https://www.almahafoods.com/culture-at-al-maha/` with anchors like `#life-at-almaha`, `#apply-now`.

- `/corporate-social-responsibility` (CSR)
  - Live: `https://www.almahafoods.com/corporate-social-responsibility/`

- `/contact-us` (Contact)
  - Live: `https://www.almahafoods.com/contact-us/`
  - App also accepts `/contact` and `/Contact` as redirects to `/contact-us` (app contains Navigate redirects).

- `/news/:slug` (News articles)
  - Live: `https://www.almahafoods.com/news/:slug` (multiple article slugs present in snapshots)

- Special business article path
  - App: `/from-strategy-to-success-the-journey-of-a-visionary-ceo-business-connect`
  - Live: the same long URL (present in snapshots).

Other important non-page routes/links to preserve:

- Privacy Policy PDF
  - Live: `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf`
  - Ensure this file remains reachable (either served from `public/` or redirected to the original URL).

- External social links (keep as external):
  - Facebook: `https://www.facebook.com/`
  - Twitter: `https://twitter.com/`
  - LinkedIn: `https://www.linkedin.com/company/79564335/admin/`
  - YouTube: `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g`

Notes and recommendations
- The extracted list uses fully-qualified URLs. When adding routes to React Router, prefer site-relative paths (strip domain) — e.g. `/about`, `/what-we-do/exports` — to keep client-side routing predictable.
- Preserve anchor fragments for long-scrolling pages (e.g. `/about#team`) by adding IDs in the React page markup matching the live site anchors.
- Keep the `privacy-policy` PDF as an externally accessible asset or replicate it to `public/assets/documents/` and update links.
- For SEO and backwards compatibility, add server-side redirects (or Netlify/Vercel redirects) from legacy or variant paths to canonical app routes. Example: redirect `/about/#` or `https://www.almahafoods.com/#` anchor usages to `/` or `/about` as appropriate.

If you'd like, I can now:

- Normalize the list into a JSON/CSV mapping ready for automated redirects.
- Create a `routes.json` (or `redirects/_redirects`) file suitable for your hosting platform.
- Add anchor IDs to the React pages to match the live anchors and verify with a dev run.

Tell me which of those you want next and I'll proceed.

- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/#** — text(s): + 91 11 4333 1111, + 91 11 4333 1122, 1122, DLF Tower-A, Jasola, New Delhi- 110025, India., About Us, What We Do, almahafoods@almahafoods.com
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- **https://www.almahafoods.com/about#team** — text(s): Team
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/about#values** — text(s): Values
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/about#vision-mission** — text(s): Vision & Mission
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/about/** — text(s): About Al Maha, About Us
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/about/#** — text(s): + 91 11 4333 1111, + 91 11 4333 1122, 1122, DLF Tower-A, Jasola, New Delhi- 110025, India., About Us, What We Do, almahafoods@almahafoods.com
  Found in:
- `/workspaces/almaha/Al-maha – about.html`
- **https://www.almahafoods.com/contact-us/** — text(s): Contact Us
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/contact-us/#** — text(s): + 91 11 4333 1111, + 91 11 4333 1122, 1122, DLF Tower-A, Jasola, New Delhi- 110025, India., About Us, What We Do, almahafoods@almahafoods.com
  Found in:
- `/workspaces/almaha/Contact Us – Al-maha.html`
- **https://www.almahafoods.com/corporate-social-responsibility/** — text(s): CSR, Corporate Social Responsibility
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/corporate-social-responsibility/#** — text(s): + 91 11 4333 1111, + 91 11 4333 1122, 1122, DLF Tower-A, Jasola, New Delhi- 110025, India., About Us, What We Do, almahafoods@almahafoods.com
  Found in:
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- **https://www.almahafoods.com/culture-at-al-maha#apply-now** — text(s): Apply now
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/culture-at-al-maha#life-at-almaha** — text(s): Culture@almaha
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/culture-at-al-maha/** — text(s): Work With Us, Workplace & Careers
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/culture-at-al-maha/#** — text(s): + 91 11 4333 1111, + 91 11 4333 1122, 1122, DLF Tower-A, Jasola, New Delhi- 110025, India., About Us, What We Do, almahafoods@almahafoods.com
  Found in:
- `/workspaces/almaha/Culture at Al Maha – career.html`
- **https://www.almahafoods.com/our-brands/** — text(s): Our Brands
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/our-brands/#** — text(s): + 91 11 4333 1111, + 91 11 4333 1122, 1122, DLF Tower-A, Jasola, New Delhi- 110025, India., About Us, What We Do, almahafoods@almahafoods.com
  Found in:
- `/workspaces/almaha/Our Brands – Al-maha.html`
- **https://www.almahafoods.com/what-we-do/domestic-market/** — text(s): Domestic Market, Products
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/what-we-do/domestic-market/#** — text(s): + 91 11 4333 1111, + 91 11 4333 1122, 1122, DLF Tower-A, Jasola, New Delhi- 110025, India., About Us, What We Do, almahafoods@almahafoods.com
  Found in:
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- **https://www.almahafoods.com/what-we-do/exports/** — text(s): Exports, Exports Profile
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/what-we-do/exports/#** — text(s): + 91 11 4333 1111, + 91 11 4333 1122, 1122, DLF Tower-A, Jasola, New Delhi- 110025, India., About Us, What We Do, almahafoods@almahafoods.com
  Found in:
- `/workspaces/almaha/Exports – what-we-do.html`
- **https://www.almahafoods.com/what-we-do/quality-assurance/** — text(s): Quality Assurance
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/what-we-do/quality-assurance/#** — text(s): + 91 11 4333 1111, + 91 11 4333 1122, 1122, DLF Tower-A, Jasola, New Delhi- 110025, India., About Us, What We Do, almahafoods@almahafoods.com
  Found in:
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf** — text(s): Privacy Policy
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.cyberworx.in/** — text(s): Cyberworx
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.facebook.com/** — text(s): (no link text)
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.linkedin.com/company/79564335/admin/** — text(s): (no link text)
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`
- **https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g** — text(s): (no link text)
  Found in:
- `/workspaces/almaha/Al-maha – Al-maha.html`
- `/workspaces/almaha/Al-maha – about.html`
- `/workspaces/almaha/Contact Us – Al-maha.html`
- `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `/workspaces/almaha/Culture at Al Maha – career.html`
- `/workspaces/almaha/Domestic Market – Al-maha.html`
- `/workspaces/almaha/Exports – what-we-do.html`
- `/workspaces/almaha/Our Brands – Al-maha.html`
- `/workspaces/almaha/Quality Assurance – Al-maha.html`

## Per-file link map

### `/workspaces/almaha/Al-maha – Al-maha.html`
- `https://www.almahafoods.com/` — "(no link text)"
- `https://www.almahafoods.com/` — "Home"
- `https://www.almahafoods.com/#` — "About Us"
- `https://www.almahafoods.com/about/` — "About Al Maha"
- `https://www.almahafoods.com/about#vision-mission` — "Vision & Mission"
- `https://www.almahafoods.com/about#values` — "Values"
- `https://www.almahafoods.com/about#team` — "Team"
- `https://www.almahafoods.com/#` — "What We Do"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports Profile"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Domestic Market"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Workplace & Careers"
- `https://www.almahafoods.com/culture-at-al-maha#life-at-almaha` — "Culture@almaha"
- `https://www.almahafoods.com/culture-at-al-maha#apply-now` — "Apply now"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "CSR"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/` — "About Us"
- `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — "Privacy Policy"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Products"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Work With Us"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "Corporate Social Responsibility"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/#` — "1122, DLF Tower-A, Jasola, New Delhi- 110025, India."
- `https://www.almahafoods.com/#` — "+ 91 11 4333 1111"
- `https://www.almahafoods.com/#` — "+ 91 11 4333 1122"
- `https://www.almahafoods.com/#` — "almahafoods@almahafoods.com"
- `https://www.facebook.com/` — "(no link text)"
- `https://twitter.com/` — "(no link text)"
- `https://www.linkedin.com/company/79564335/admin/` — "(no link text)"
- `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g` — "(no link text)"
- `https://www.cyberworx.in/` — "Cyberworx"

### `/workspaces/almaha/Al-maha – about.html`
- `https://www.almahafoods.com/` — "(no link text)"
- `https://www.almahafoods.com/` — "Home"
- `https://www.almahafoods.com/about/#` — "About Us"
- `https://www.almahafoods.com/about/` — "About Al Maha"
- `https://www.almahafoods.com/about#vision-mission` — "Vision & Mission"
- `https://www.almahafoods.com/about#values` — "Values"
- `https://www.almahafoods.com/about#team` — "Team"
- `https://www.almahafoods.com/about/#` — "What We Do"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports Profile"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Domestic Market"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Workplace & Careers"
- `https://www.almahafoods.com/culture-at-al-maha#life-at-almaha` — "Culture@almaha"
- `https://www.almahafoods.com/culture-at-al-maha#apply-now` — "Apply now"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "CSR"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/` — "About Us"
- `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — "Privacy Policy"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Products"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Work With Us"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "Corporate Social Responsibility"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/#` — "1122, DLF Tower-A, Jasola, New Delhi- 110025, India."
- `https://www.almahafoods.com/about/#` — "+ 91 11 4333 1111"
- `https://www.almahafoods.com/about/#` — "+ 91 11 4333 1122"
- `https://www.almahafoods.com/about/#` — "almahafoods@almahafoods.com"
- `https://www.facebook.com/` — "(no link text)"
- `https://twitter.com/` — "(no link text)"
- `https://www.linkedin.com/company/79564335/admin/` — "(no link text)"
- `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g` — "(no link text)"
- `https://www.cyberworx.in/` — "Cyberworx"

### `/workspaces/almaha/Contact Us – Al-maha.html`
- `https://www.almahafoods.com/` — "(no link text)"
- `https://www.almahafoods.com/` — "Home"
- `https://www.almahafoods.com/contact-us/#` — "About Us"
- `https://www.almahafoods.com/about/` — "About Al Maha"
- `https://www.almahafoods.com/about#vision-mission` — "Vision & Mission"
- `https://www.almahafoods.com/about#values` — "Values"
- `https://www.almahafoods.com/about#team` — "Team"
- `https://www.almahafoods.com/contact-us/#` — "What We Do"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports Profile"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Domestic Market"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Workplace & Careers"
- `https://www.almahafoods.com/culture-at-al-maha#life-at-almaha` — "Culture@almaha"
- `https://www.almahafoods.com/culture-at-al-maha#apply-now` — "Apply now"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "CSR"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/` — "About Us"
- `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — "Privacy Policy"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Products"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Work With Us"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "Corporate Social Responsibility"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/contact-us/#` — "1122, DLF Tower-A, Jasola, New Delhi- 110025, India."
- `https://www.almahafoods.com/contact-us/#` — "+ 91 11 4333 1111"
- `https://www.almahafoods.com/contact-us/#` — "+ 91 11 4333 1122"
- `https://www.almahafoods.com/contact-us/#` — "almahafoods@almahafoods.com"
- `https://www.facebook.com/` — "(no link text)"
- `https://twitter.com/` — "(no link text)"
- `https://www.linkedin.com/company/79564335/admin/` — "(no link text)"
- `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g` — "(no link text)"
- `https://www.cyberworx.in/` — "Cyberworx"

### `/workspaces/almaha/Corporate Social Responsibility – Al-maha.html`
- `https://www.almahafoods.com/` — "(no link text)"
- `https://www.almahafoods.com/` — "Home"
- `https://www.almahafoods.com/corporate-social-responsibility/#` — "About Us"
- `https://www.almahafoods.com/about/` — "About Al Maha"
- `https://www.almahafoods.com/about#vision-mission` — "Vision & Mission"
- `https://www.almahafoods.com/about#values` — "Values"
- `https://www.almahafoods.com/about#team` — "Team"
- `https://www.almahafoods.com/corporate-social-responsibility/#` — "What We Do"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports Profile"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Domestic Market"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Workplace & Careers"
- `https://www.almahafoods.com/culture-at-al-maha#life-at-almaha` — "Culture@almaha"
- `https://www.almahafoods.com/culture-at-al-maha#apply-now` — "Apply now"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "CSR"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/` — "About Us"
- `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — "Privacy Policy"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Products"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Work With Us"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "Corporate Social Responsibility"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/corporate-social-responsibility/#` — "1122, DLF Tower-A, Jasola, New Delhi- 110025, India."
- `https://www.almahafoods.com/corporate-social-responsibility/#` — "+ 91 11 4333 1111"
- `https://www.almahafoods.com/corporate-social-responsibility/#` — "+ 91 11 4333 1122"
- `https://www.almahafoods.com/corporate-social-responsibility/#` — "almahafoods@almahafoods.com"
- `https://www.facebook.com/` — "(no link text)"
- `https://twitter.com/` — "(no link text)"
- `https://www.linkedin.com/company/79564335/admin/` — "(no link text)"
- `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g` — "(no link text)"
- `https://www.cyberworx.in/` — "Cyberworx"

### `/workspaces/almaha/Culture at Al Maha – career.html`
- `https://www.almahafoods.com/` — "(no link text)"
- `https://www.almahafoods.com/` — "Home"
- `https://www.almahafoods.com/culture-at-al-maha/#` — "About Us"
- `https://www.almahafoods.com/about/` — "About Al Maha"
- `https://www.almahafoods.com/about#vision-mission` — "Vision & Mission"
- `https://www.almahafoods.com/about#values` — "Values"
- `https://www.almahafoods.com/about#team` — "Team"
- `https://www.almahafoods.com/culture-at-al-maha/#` — "What We Do"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports Profile"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Domestic Market"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Workplace & Careers"
- `https://www.almahafoods.com/culture-at-al-maha#life-at-almaha` — "Culture@almaha"
- `https://www.almahafoods.com/culture-at-al-maha#apply-now` — "Apply now"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "CSR"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/` — "About Us"
- `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — "Privacy Policy"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Products"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Work With Us"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "Corporate Social Responsibility"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/culture-at-al-maha/#` — "1122, DLF Tower-A, Jasola, New Delhi- 110025, India."
- `https://www.almahafoods.com/culture-at-al-maha/#` — "+ 91 11 4333 1111"
- `https://www.almahafoods.com/culture-at-al-maha/#` — "+ 91 11 4333 1122"
- `https://www.almahafoods.com/culture-at-al-maha/#` — "almahafoods@almahafoods.com"
- `https://www.facebook.com/` — "(no link text)"
- `https://twitter.com/` — "(no link text)"
- `https://www.linkedin.com/company/79564335/admin/` — "(no link text)"
- `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g` — "(no link text)"
- `https://www.cyberworx.in/` — "Cyberworx"

### `/workspaces/almaha/Domestic Market – Al-maha.html`
- `https://www.almahafoods.com/` — "(no link text)"
- `https://www.almahafoods.com/` — "Home"
- `https://www.almahafoods.com/what-we-do/domestic-market/#` — "About Us"
- `https://www.almahafoods.com/about/` — "About Al Maha"
- `https://www.almahafoods.com/about#vision-mission` — "Vision & Mission"
- `https://www.almahafoods.com/about#values` — "Values"
- `https://www.almahafoods.com/about#team` — "Team"
- `https://www.almahafoods.com/what-we-do/domestic-market/#` — "What We Do"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports Profile"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Domestic Market"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Workplace & Careers"
- `https://www.almahafoods.com/culture-at-al-maha#life-at-almaha` — "Culture@almaha"
- `https://www.almahafoods.com/culture-at-al-maha#apply-now` — "Apply now"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "CSR"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/` — "About Us"
- `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — "Privacy Policy"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Products"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Work With Us"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "Corporate Social Responsibility"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/what-we-do/domestic-market/#` — "1122, DLF Tower-A, Jasola, New Delhi- 110025, India."
- `https://www.almahafoods.com/what-we-do/domestic-market/#` — "+ 91 11 4333 1111"
- `https://www.almahafoods.com/what-we-do/domestic-market/#` — "+ 91 11 4333 1122"
- `https://www.almahafoods.com/what-we-do/domestic-market/#` — "almahafoods@almahafoods.com"
- `https://www.facebook.com/` — "(no link text)"
- `https://twitter.com/` — "(no link text)"
- `https://www.linkedin.com/company/79564335/admin/` — "(no link text)"
- `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g` — "(no link text)"
- `https://www.cyberworx.in/` — "Cyberworx"

### `/workspaces/almaha/Exports – what-we-do.html`
- `https://www.almahafoods.com/` — "(no link text)"
- `https://www.almahafoods.com/` — "Home"
- `https://www.almahafoods.com/what-we-do/exports/#` — "About Us"
- `https://www.almahafoods.com/about/` — "About Al Maha"
- `https://www.almahafoods.com/about#vision-mission` — "Vision & Mission"
- `https://www.almahafoods.com/about#values` — "Values"
- `https://www.almahafoods.com/about#team` — "Team"
- `https://www.almahafoods.com/what-we-do/exports/#` — "What We Do"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports Profile"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Domestic Market"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Workplace & Careers"
- `https://www.almahafoods.com/culture-at-al-maha#life-at-almaha` — "Culture@almaha"
- `https://www.almahafoods.com/culture-at-al-maha#apply-now` — "Apply now"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "CSR"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/` — "About Us"
- `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — "Privacy Policy"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Products"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Work With Us"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "Corporate Social Responsibility"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/what-we-do/exports/#` — "1122, DLF Tower-A, Jasola, New Delhi- 110025, India."
- `https://www.almahafoods.com/what-we-do/exports/#` — "+ 91 11 4333 1111"
- `https://www.almahafoods.com/what-we-do/exports/#` — "+ 91 11 4333 1122"
- `https://www.almahafoods.com/what-we-do/exports/#` — "almahafoods@almahafoods.com"
- `https://www.facebook.com/` — "(no link text)"
- `https://twitter.com/` — "(no link text)"
- `https://www.linkedin.com/company/79564335/admin/` — "(no link text)"
- `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g` — "(no link text)"
- `https://www.cyberworx.in/` — "Cyberworx"

### `/workspaces/almaha/Our Brands – Al-maha.html`
- `https://www.almahafoods.com/` — "(no link text)"
- `https://www.almahafoods.com/` — "Home"
- `https://www.almahafoods.com/our-brands/#` — "About Us"
- `https://www.almahafoods.com/about/` — "About Al Maha"
- `https://www.almahafoods.com/about#vision-mission` — "Vision & Mission"
- `https://www.almahafoods.com/about#values` — "Values"
- `https://www.almahafoods.com/about#team` — "Team"
- `https://www.almahafoods.com/our-brands/#` — "What We Do"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports Profile"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Domestic Market"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Workplace & Careers"
- `https://www.almahafoods.com/culture-at-al-maha#life-at-almaha` — "Culture@almaha"
- `https://www.almahafoods.com/culture-at-al-maha#apply-now` — "Apply now"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "CSR"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/` — "About Us"
- `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — "Privacy Policy"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Products"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Work With Us"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "Corporate Social Responsibility"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/our-brands/#` — "1122, DLF Tower-A, Jasola, New Delhi- 110025, India."
- `https://www.almahafoods.com/our-brands/#` — "+ 91 11 4333 1111"
- `https://www.almahafoods.com/our-brands/#` — "+ 91 11 4333 1122"
- `https://www.almahafoods.com/our-brands/#` — "almahafoods@almahafoods.com"
- `https://www.facebook.com/` — "(no link text)"
- `https://twitter.com/` — "(no link text)"
- `https://www.linkedin.com/company/79564335/admin/` — "(no link text)"
- `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g` — "(no link text)"
- `https://www.cyberworx.in/` — "Cyberworx"

### `/workspaces/almaha/Quality Assurance – Al-maha.html`
- `https://www.almahafoods.com/` — "(no link text)"
- `https://www.almahafoods.com/` — "Home"
- `https://www.almahafoods.com/what-we-do/quality-assurance/#` — "About Us"
- `https://www.almahafoods.com/about/` — "About Al Maha"
- `https://www.almahafoods.com/about#vision-mission` — "Vision & Mission"
- `https://www.almahafoods.com/about#values` — "Values"
- `https://www.almahafoods.com/about#team` — "Team"
- `https://www.almahafoods.com/what-we-do/quality-assurance/#` — "What We Do"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports Profile"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Domestic Market"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Workplace & Careers"
- `https://www.almahafoods.com/culture-at-al-maha#life-at-almaha` — "Culture@almaha"
- `https://www.almahafoods.com/culture-at-al-maha#apply-now` — "Apply now"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "CSR"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/about/` — "About Us"
- `https://www.almahafoods.com/wp-content/uploads/2024/11/Privacy-Policy-Al-maha.pdf` — "Privacy Policy"
- `https://www.almahafoods.com/what-we-do/domestic-market/` — "Products"
- `https://www.almahafoods.com/our-brands/` — "Our Brands"
- `https://www.almahafoods.com/what-we-do/quality-assurance/` — "Quality Assurance"
- `https://www.almahafoods.com/what-we-do/exports/` — "Exports"
- `https://www.almahafoods.com/culture-at-al-maha/` — "Work With Us"
- `https://www.almahafoods.com/corporate-social-responsibility/` — "Corporate Social Responsibility"
- `https://www.almahafoods.com/contact-us/` — "Contact Us"
- `https://www.almahafoods.com/what-we-do/quality-assurance/#` — "1122, DLF Tower-A, Jasola, New Delhi- 110025, India."
- `https://www.almahafoods.com/what-we-do/quality-assurance/#` — "+ 91 11 4333 1111"
- `https://www.almahafoods.com/what-we-do/quality-assurance/#` — "+ 91 11 4333 1122"
- `https://www.almahafoods.com/what-we-do/quality-assurance/#` — "almahafoods@almahafoods.com"
- `https://www.facebook.com/` — "(no link text)"
- `https://twitter.com/` — "(no link text)"
- `https://www.linkedin.com/company/79564335/admin/` — "(no link text)"
- `https://www.youtube.com/channel/UC6KF_KNSiBrpDAsFiEJHj0g` — "(no link text)"
- `https://www.cyberworx.in/` — "Cyberworx"
