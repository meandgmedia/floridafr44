# Florida FR44 Auto Insurance — Website

Production-ready marketing website for **Florida FR44 Auto Insurance**, built with
[Astro](https://astro.build), TypeScript, and static site generation. Designed for
deployment on **Cloudflare Pages** with **Cloudflare DNS**, source-controlled on GitHub.

Live domain: `https://floridafr44autoinsurance.com`

---

## Tech stack

- **Astro 4** (static output, TypeScript strict mode)
- **Astro Content Collections** for the Blog and Guides sections
- **@astrojs/sitemap** for automatic `sitemap-index.xml` generation
- Hand-written CSS with a design-token system (no CSS framework, no client-side JS
  framework) — kept intentionally minimal for fast Core Web Vitals
- JSON-LD structured data: `Organization`/`InsuranceAgency`, `LocalBusiness`, `WebSite`,
  `Article`, `BreadcrumbList`, and `FAQPage` schemas throughout

## Project structure

```
├── public/                      # Static assets served as-is
│   ├── images/
│   │   ├── logo.png              # Your provided logo (used site-wide)
│   │   ├── og-default.svg        # Default Open Graph share image
│   │   ├── blog/, guides/        # Cover art for articles (abstract SVG placeholders —
│   │   │                          swap in real photography any time)
│   ├── favicon.png               # Your provided favicon
│   ├── robots.txt
│   └── llms.txt
│
├── src/
│   ├── components/               # Reusable Astro components
│   │   ├── Header.astro, Footer.astro
│   │   ├── CtaBanner.astro, FaqAccordion.astro, Breadcrumbs.astro
│   │   ├── CompareGraphic.astro  # Hero "compare carriers" illustration
│   │   └── PostCard.astro, GuideCard.astro
│   │
│   ├── content/
│   │   ├── config.ts             # Content collection schemas
│   │   ├── blog/                 # 15 starter blog articles (Markdown)
│   │   └── guides/                # 10 long-form guides (Markdown)
│   │
│   ├── data/
│   │   ├── site.ts               # Business info, nav links, FL cities, carriers —
│   │   │                          edit this file to update contact info sitewide
│   │   └── schema.ts              # JSON-LD schema builder functions
│   │
│   ├── layouts/
│   │   └── BaseLayout.astro      # <head> — meta, OG/Twitter tags, canonical, schema slot
│   │
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── quote.astro           # Get a Free Quote (Web3Forms placeholder)
│   │   ├── contact.astro         # Contact (Web3Forms + Google Maps placeholders)
│   │   ├── about.astro
│   │   ├── fr44-insurance.astro
│   │   ├── sr22-insurance.astro
│   │   ├── florida-auto-insurance.astro
│   │   ├── faq.astro             # 30+ Q&A with FAQPage schema
│   │   ├── privacy-policy.astro, terms.astro, disclaimer.astro
│   │   ├── blog/index.astro, blog/[slug].astro
│   │   └── guides/index.astro, guides/[slug].astro
│   │
│   └── styles/
│       └── global.css            # Design tokens (color/type/spacing) + base styles
│
├── astro.config.mjs               # site URL + sitemap integration
├── tsconfig.json
└── package.json
```

## Local development

Requires Node.js 18.17+ (or 20+).

```bash
npm install
npm run dev
```

The site runs at `http://localhost:4321`.

```bash
npm run build     # type-checks and builds the static site to /dist
npm run preview   # serves the built /dist locally to sanity-check the production build
```

## Connecting the forms (Web3Forms)

The **Get a Free Quote** and **Contact** pages ship with fully-styled, accessible forms
that are clearly marked with:

```html
<!-- BEGIN WEB3FORMS PLACEHOLDER -->
...
<!-- END WEB3FORMS PLACEHOLDER -->
```

To activate them:

1. Create a free access key at [web3forms.com](https://web3forms.com/).
2. In `src/pages/quote.astro` and `src/pages/contact.astro`, replace
   `YOUR_WEB3FORMS_ACCESS_KEY` with your real access key.
3. Optionally add a `redirect` hidden field pointing to a thank-you page once you've
   created one.

The Contact page also has a **Google Maps** placeholder — replace the `.map-placeholder`
block with a real `<iframe>` embed once you have a service-area map ready.

## Updating business info

Phone number, email, business hours, nav links, and the list of Florida cities/carriers
all live in one file: `src/data/site.ts`. Update it once and the change propagates to
the header, footer, schema, and every page that references it.

## Adding new blog posts or guides

Add a new Markdown file to `src/content/blog/` or `src/content/guides/` with frontmatter
matching the schema in `src/content/config.ts`. Astro will automatically generate the
route, card, and `Article` schema — no other code changes needed.

## Deploying to Cloudflare Pages

1. Push this repository to GitHub: `https://github.com/meandgmedia/floridafr44`
2. In the Cloudflare dashboard, go to **Workers & Pages → Create → Pages → Connect to Git**
   and select the repository.
3. Build settings:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Deploy. Cloudflare Pages will build and deploy automatically on every push to `main`.

### Connecting your domain

1. In Cloudflare Pages, go to your project → **Custom domains** → add
   `floridafr44autoinsurance.com` (and `www` if desired).
2. If your domain's DNS already lives on Cloudflare, the CNAME record is created for you
   automatically. Otherwise, point your domain's nameservers to Cloudflare first.
3. SSL/TLS is provisioned automatically by Cloudflare.

### Environment notes

- This is a fully static site (`output: 'static'` in `astro.config.mjs`) — no server
  runtime or environment variables are required to build or deploy it.
- `astro.config.mjs` sets `site: 'https://floridafr44autoinsurance.com'`, which is used
  to generate canonical URLs, Open Graph URLs, and the sitemap. Update this if the
  domain ever changes.

## SEO assets included

- `robots.txt` and `llms.txt` in `/public`
- Auto-generated `sitemap-index.xml` / `sitemap-0.xml` on every build
- Per-page canonical URLs, Open Graph, and Twitter Card meta tags
- JSON-LD: `InsuranceAgency`/`Organization`, `LocalBusiness`, `WebSite`, `Article`
  (blog + guides), `BreadcrumbList` (every inner page), `FAQPage` (homepage FAQ + full
  FAQ page)

## Notes on imagery

Blog and guide cover images are original, license-free abstract SVG illustrations
generated for this project — no stock photography or third-party imagery is used
anywhere on the site. They're easy to swap: just replace the referenced file in
`public/images/blog/` or `public/images/guides/`, or point a post's `image:` frontmatter
field at a new asset.
