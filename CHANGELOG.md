# OrtizMEP.com — Site Change Log

A running record of every change made to the site. Use this to track updates and troubleshoot.

---

## March 25, 2026

### Added Energy Modeling service page
- **What:** Created new dedicated page at `/services/energy-modeling` with 6 sub-services: HVAC Energy Modeling, Compressible Fluid Pipe Modeling, Non-Compressible Fluid Pipe Modeling, Daylighting Analysis, Glare Analysis, Life Cycle Cost Analysis
- **Files:** `src/services/energy-modeling.html` (new)

### Added Energy Modeling card to homepage
- **What:** Added "Energy Modeling" service preview card to the homepage services grid
- **Files:** `src/index.html`

### Added Energy Modeling section to services page
- **What:** Added Service #06 (Energy Modeling) summary block with link to full details page
- **Files:** `src/services.html`

### Replaced Insights nav link with Ghost blog
- **What:** Changed all "Insights" navigation links (desktop nav, mobile nav, footer) to point to `https://the-mep-brief.ghost.io` instead of `/insights`
- **Files:** `src/index.html`, `src/about.html`, `src/services.html`, `src/contact.html`, `src/insights.njk`, `src/_includes/article.njk`, `src/services/energy-modeling.html`

### Updated homepage JSON-LD structured data
- **What:** Added 6 new Energy Modeling service types to `serviceType` array; added `Building Energy Simulation`, `IESVE`, `Daylighting`, `Pipe System Modeling`, `Life Cycle Cost Analysis` to `knowsAbout` array
- **Files:** `src/index.html`

### Added Energy Modeling JSON-LD to services page
- **What:** Added ProfessionalService schema for Energy Modeling to the services page JSON-LD array
- **Files:** `src/services.html`

### Added Energy Modeling JSON-LD to dedicated page
- **What:** Added 6 individual ProfessionalService schemas (one per sub-service) to the energy modeling page
- **Files:** `src/services/energy-modeling.html`

### Updated homepage meta description
- **What:** Added "energy modeling" to meta description and OG description
- **Before:** "Licensed PE mechanical engineering consulting in Los Angeles. HVAC design, energy compliance & MEP peer review for architects and building owners."
- **After:** "Licensed PE mechanical engineering consulting in Los Angeles. HVAC design, energy modeling, energy compliance & MEP peer review for architects and building owners."
- **Files:** `src/index.html`

### Added Energy Modeling to sitemap
- **What:** Added `https://ortizmep.com/services/energy-modeling` to sitemap.xml
- **Files:** `src/sitemap.xml`

### Updated footer links across all pages
- **What:** Added "Energy Modeling" link to footer services list on all pages; added missing "CFD Analysis" link to contact page footer
- **Files:** `src/index.html`, `src/about.html`, `src/services.html`, `src/contact.html`, `src/services/energy-modeling.html`

---

## March 20, 2026

### Enhanced LocalBusiness schema markup
- **What:** Added `@id`, `alternateName`, `email`, `geo` coordinates (Gardena, CA), expanded `areaServed` with GeoCircle, `priceRange`, expanded `hasCredential` (Title 24 Certified, ASHRAE Member), `knowsAbout` expertise terms
- **Files:** `src/index.html`

### Added ProfessionalService schemas to services page
- **What:** Added 4 ProfessionalService JSON-LD schemas (Schematic MEP Design, Expert Consulting, CFD Analysis, MEP Peer Review) with pricing
- **Files:** `src/services.html`

### Fixed CSS paths (broken pages fix)
- **What:** Changed all relative CSS/asset paths (`./base.css`, `./style.css`, `./app.js`, `./assets/`) to absolute paths (`/base.css`, `/style.css`, `/app.js`, `/assets/`) so pages in subdirectories load styles correctly
- **Files:** `src/index.html`, `src/about.html`, `src/services.html`, `src/contact.html`

### Added Netlify Identity widget to all pages
- **What:** Added `netlify-identity-widget.js` script and redirect handler to all pages (was only on `/admin`), fixing email confirmation flow for CMS login
- **Files:** `src/index.html`, `src/about.html`, `src/services.html`, `src/contact.html`

### Deployed Eleventy + Decap CMS project to GitHub
- **What:** Pushed full project (source files, Eleventy config, netlify.toml, package.json) to `github.com/EddieOrtizMEP/ortizmep`, replacing the incorrectly uploaded built files that were in a subfolder
- **Files:** All project files

---

## March 19, 2026

### Initial Eleventy + Decap CMS project build
- **What:** Converted static HTML site to Eleventy project with Decap CMS for article management. Includes 3 starter articles, CMS admin panel, and all previous SEO fixes.
- **Files:** Full project scaffold

### All SEO fixes applied
1. JSON-LD: LocalBusiness/ProfessionalService + FAQPage schemas — `src/index.html`
2. Image optimization: hero.png→hero.webp (5.5MB→284KB), about-bg→webp, services-bg→webp — `src/assets/`
3. Hero image preload + inline critical CSS — `src/index.html`
4. Meta description shortened to 146 chars — `src/index.html`
5. Canonical tag + Open Graph tags — `src/index.html`
6. H1 updated — `src/index.html`
7. Title tag optimized (56 chars) — `src/index.html`
8. robots.txt created — `src/robots.txt`
9. sitemap.xml created (5 pages) — `src/sitemap.xml`
10. Credentials bar added — `src/index.html`
11. LinkedIn icon in footer — all pages
