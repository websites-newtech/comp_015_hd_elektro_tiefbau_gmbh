# HD Elektro & Tiefbau GmbH — Website

**Production-ready website for HD Elektro & Tiefbau GmbH, Dortmund.**  
Stack: Static HTML + Alpine.js (CDN) + Custom CSS  
Language: German (de)

---

## File Structure

```
website/
├── index.html          # Startseite (Home)
├── leistungen.html     # Leistungen (Services)
├── projekte.html       # Projekte (Projects – filterable)
├── ueber-uns.html      # Über uns (About)
├── kontakt.html        # Kontakt (Contact + form)
├── impressum.html      # Impressum (Legal notice)
├── datenschutz.html    # Datenschutz (Privacy policy)
├── agb.html            # AGB (Terms & conditions)
├── assets/
│   ├── css/
│   │   └── main.css    # All styles
│   ├── js/
│   │   └── main.js     # Scroll animations, interactivity
│   └── images/         # → Place all images here
│       ├── hero_001.jpg
│       ├── hero_002.jpg
│       ├── hero_003.jpg
│       ├── image_001.jpg
│       ├── image_002.jpg
│       ├── image_003.jpg
│       ├── image_004.jpg
│       └── image_005.jpg
├── design_decisions.md
└── README.md
```

---

## Deployment Options

### Option A: GitHub Pages (Free, Recommended)

1. Create a GitHub repository (e.g. `hd-ets-website`)
2. Copy all files from `website/` into the repository root
3. Go to **Settings → Pages → Source → Deploy from branch → main / root**
4. Site goes live at `https://yourusername.github.io/hd-ets-website/`

**To use a custom domain (hd-ets.de):**
1. In Pages settings, add custom domain `hd-ets.de`
2. At your domain registrar (e.g. IONOS, Strato), set DNS:
   - `A` record → `185.199.108.153`
   - `A` record → `185.199.109.153`
   - `A` record → `185.199.110.153`
   - `A` record → `185.199.111.153`
   - `CNAME` record: `www` → `yourusername.github.io`
3. Enable HTTPS in Pages settings

### Option B: Netlify (Free tier, drag & drop)

1. Go to [netlify.com](https://netlify.com) → Sign up
2. Drag the entire `website/` folder into the deploy zone
3. Instant deployment with HTTPS
4. **Custom domain:** Sites → Domain settings → Add custom domain → `hd-ets.de`

### Option C: Any Web Host (IONOS, Strato, etc.)

1. Connect via FTP (use FileZilla)
2. Upload all files from `website/` to the `public_html` or `www` directory
3. Ensure `index.html` is in the root

### Option D: Vercel

```bash
npm i -g vercel
cd website
vercel
```
Follow prompts. Custom domain: Vercel dashboard → Domains → Add `hd-ets.de`

---

## Before Going Live — Checklist

### Images
- [ ] Copy all images to `assets/images/`
- [ ] Ensure filenames match exactly: `hero_001.jpg`, `hero_002.jpg`, `hero_003.jpg`, `image_001.jpg`–`image_005.jpg`
- [ ] Optimize images with [Squoosh](https://squoosh.app/) or [TinyPNG](https://tinypng.com/) for faster loading
- [ ] Consider converting to WebP format

### Contact Form
The contact form currently simulates submission (1.2 second delay → success state). To make it **actually send emails**, integrate one of:

**Formspree (easiest, free):**
```html
<!-- Replace the @submit.prevent="submit()" line with: -->
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
Sign up at [formspree.io](https://formspree.io), create form, get ID.

**Netlify Forms (if hosting on Netlify):**
Add `netlify` attribute to form tag:
```html
<form netlify name="contact">
```

**EmailJS:**
- Sign up at [emailjs.com](https://emailjs.com)
- Add their SDK and update `main.js` submit function

### SEO / Analytics
- [ ] Add Google Analytics or Plausible (privacy-friendly):
  ```html
  <!-- Add before </head> -->
  <script defer data-domain="hd-ets.de" src="https://plausible.io/js/script.js"></script>
  ```
- [ ] Submit sitemap to Google Search Console
- [ ] Register on Google My Business with the address

### Favicon
Add a favicon — a simple text-based SVG works perfectly:
```html
<!-- Add to <head> of each HTML file -->
<link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='12' fill='%230f1117'/><text y='.9em' font-size='70' font-family='sans-serif' fill='%23f5a623' font-weight='bold'>HD</text></svg>">
```

### Legal
- [ ] Review Datenschutzerklärung with your legal advisor (DSGVO compliance)
- [ ] Verify Impressum information is current
- [ ] If using Google Analytics, update Datenschutz to mention it

---

## Customization Guide

### Change Accent Color
In `assets/css/main.css`, find `:root` and change:
```css
--color-accent: #f5a623;      /* Current: amber */
--color-accent-dark: #d48b0a;
--color-accent-light: #ffd166;
```

### Add/Edit Services
In `leistungen.html`, duplicate a `service-detail-section` block.

### Add Projects
In `projekte.html`, duplicate a `project-card` div and update:
- `x-show` attribute for filter category
- Image src, alt text
- Title and description

### Update Contact Info
Search all HTML files for `+49 231 6283597` and `info@hd-ets.de` to update.

---

## Technical Notes

- **No build process required** — all CDN loaded
- **Alpine.js 3.x** loaded via unpkg CDN
- **Google Fonts** preloaded with `display=swap` to prevent layout shift
- **Reduced motion** respected via `@media (prefers-reduced-motion: reduce)`
- **Safe area insets** applied to navbar and footer for notch/gesture-bar devices
- **All touch targets ≥ 44px** per Apple HIG guidelines
- **Color contrast ratio:** Primary text on dark bg = 12.6:1 (WCAG AAA)
- **Intersection Observer** used for scroll animations (no scroll event listeners = better performance)

---

## Browser Support

| Browser | Support |
|---------|---------|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| IE 11 | ❌ Not supported |

---

## Contact

**HD Elektro & Tiefbau GmbH**  
Iggelhorst 5, 44149 Dortmund  
📞 +49 231 6283597  
📧 info@hd-ets.de  
💬 WhatsApp: +49 155 61764028