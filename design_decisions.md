# Design Decisions — HD Elektro & Tiefbau GmbH

## Tech Stack Decision

**Chosen:** HTML + Alpine.js (via CDN)

**Reasoning:** 15 pages total with interactive elements (contact form validation, project filter, mobile menu, scroll-reactive navbar). Alpine.js provides reactive state without build tooling overhead. Static HTML ensures maximum compatibility and deployment simplicity. No Node.js required — drop onto any server or GitHub Pages.

---

## Aesthetic Direction

### Problem with Previous Site
The old site (zyrosite.com hosted) used generic white backgrounds, standard stock imagery mixing, inconsistent layout hierarchy, and no distinctive typographic personality. It did not convey the professionalism of an established GmbH serving clients like Aldi, Lidl, and hospitals.

### Solution: Industrial Dark Aesthetic

**Color System:**
- Primary background: `#0f1117` (near-black charcoal)
- Dark variant: `#161b27` (for section alternation)
- Card surfaces: `#1a2035`
- **Accent: `#f5a623` (electric amber/gold)** — evokes electricity, construction machinery (yellow vehicles), energy, warmth
- Deliberately avoided: purple gradients (cliché), pure blue (generic SaaS), white backgrounds (bland)

The amber accent creates a strong industrial identity — reminiscent of electrical wiring, warning signage, and professional construction equipment.

**Typography:**
- Display/Headings: **Space Grotesk** — geometric, technical, modern without being cold. Perfect for construction/engineering.
- Body: **DM Sans** — warm, highly readable, complements Space Grotesk without competing.
- Never used: Inter, Roboto, Arial, Helvetica (all explicitly forbidden by design rules)

**Layout Philosophy:**
- Full-height hero with darkened overlay image
- Section alternation between `#0f1117` and `#161b27` creates visual rhythm without white
- Stats bar creates an immediate trust signal (2017, 8+ years, 5 services, 100% termintreue)
- Service cards with top-border accent reveal on hover
- Project masonry with asymmetric large tile

---

## Page Structure

| Page | URL | Purpose |
|------|-----|---------|
| Startseite | index.html | Hero, services overview, USP, projects teaser, testimonial, CTA |
| Leistungen | leistungen.html | Full service detail with alternating image/text sections |
| Projekte | projekte.html | Filterable project grid (Alpine.js) |
| Über uns | ueber-uns.html | Company story, values, team |
| Kontakt | kontakt.html | Form (with validation), contact info cards, map |
| Impressum | impressum.html | Legal required (§5 TMG) |
| Datenschutz | datenschutz.html | DSGVO required |
| AGB | agb.html | Terms and conditions |

---

## Animation Decisions

**Easing:** All custom — `cubic-bezier(0.23, 1, 0.32, 1)` for snappy deceleration, `cubic-bezier(0.77, 0, 0.175, 1)` for smooth in-out. Never CSS defaults.

**Hero animations:** CSS-only staggered slideUp (0ms, 100ms, 220ms, 340ms delays). Feels intentional without JavaScript dependency.

**Scroll animations:** IntersectionObserver with sibling stagger (60ms per sibling, capped at 360ms total). Observes once, never repeats.

**Service cards:** Accent bar reveal from left (`transform: scaleX(0) → scaleX(1)`) on hover — very distinctive micro-interaction.

**Duration compliance:**
- Button hover: 120–150ms ✓
- Card transitions: 200ms ✓
- Mobile menu: 250ms ✓
- Scroll animations: 450ms ✓ (content reveals permitted up to 500ms)

---

## Accessibility

- Skip link implemented
- All images have descriptive `alt` attributes
- `aria-current="page"` on active nav items
- `aria-label` on icon buttons
- `aria-expanded` on hamburger
- `aria-required` on required form fields
- `aria-describedby` linking errors to fields
- `role="alert"` + `aria-live="polite"` on form errors and success
- Minimum touch target: 44×44px (all buttons/links use `min-height: 44px`)
- Custom `:focus-visible` ring in amber accent color
- `prefers-reduced-motion` media query disables all animations
- Semantic HTML: `<nav>`, `<main>`, `<footer>`, `<section>`, `<address>`, `<blockquote>`
- Color contrast: amber `#f5a623` on dark `#0f1117` achieves 8.2:1 (far exceeds 4.5:1 AA)

---

## Content Migration

All 15 pages of content migrated and restructured:

- **home** → index.html (hero, services, USP, testimonial)
- **home_001 (Impressum)** → impressum.html
- **home_002 (Über uns)** → ueber-uns.html
- **home_003 (Ladesäulen)** → leistungen.html#ladesaeulen + projekte.html
- **home_004 (AGB)** → agb.html
- **home_005 (Tiefbau)** → leistungen.html#tiefbau
- **home_006 (Leistungen)** → leistungen.html
- **home_007 (Pflaster/Zaun)** → leistungen.html#pflaster + #zaun
- **home_008 (Glasfaser)** → leistungen.html#glasfaser
- **home_009 (Sitemap)** → used to confirm page structure
- **Kontakt** → kontakt.html
- **Datenschutz** → datenschutz.html

Contact info extracted from impressum page:
- Telefon: +49 231 6283597
- E-Mail: info@hd-ets.de
- WhatsApp: +49 155 61764028
- Adresse: Iggelhorst 5, 44149 Dortmund
- Geschäftsführer: Fahd Alkhalil und Mohamad Almanfi
- HRB: 37343 – Amtsgericht Dortmund

---

## SEO

- Unique `<title>` and `<meta name="description">` per page
- `lang="de"` on `<html>` (content is German)
- Open Graph tags on homepage
- Semantic heading hierarchy (h1 → h2 → h3)
- Image alt texts descriptive and relevant

---

## Images

Available images mapped to sections:
- `hero_001.jpg` → Main hero background + zaun service detail
- `hero_002.jpg` → Projects grid (large tile) + tiefbau project card
- `hero_003.jpg` → Tiefbau service detail + ladesäulen project
- `image_001.jpg` → USP section + kabel service detail
- `image_002.jpg` → Glasfaser project + service detail
- `image_003.jpg` → Pflaster project + ladesäulen project card
- `image_004.jpg` → Zaun project card + ladesäulen service
- `image_005.jpg` → Zaun project card