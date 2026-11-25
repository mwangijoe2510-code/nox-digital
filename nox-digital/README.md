# NOX Digital — React site

Run locally: `npm install && npm run dev`  ·  Build: `npm run build` (upload the `dist/` folder to your hosting)

## Things you'll want to personalise
- **All text, services, projects, FAQs, contact details** → `src/data.js`
- **Your photo** → save as `public/founder.jpg` (shown in the hero chip and Founder section, auto B&W)
- **Real project screenshots** → save as `public/work/trailblaze360.jpg`, `public/work/manesports.jpg`, `public/work/brighthill.jpg` (16:10 works best). They replace the built-in mockups automatically.
- **Add a project** → copy a block in `projects` inside `src/data.js` (set a unique `slug`, `kind` can be `trail`, `mane`, `bright` or `nox` for the mockup style).
- **Your surname** → `founder.name` in `src/data.js`.

## v5 additions
- **/pricing**, **/estimator** (instant range → WhatsApp), **/audit** (10-question self-audit), **/demo** (live Agrovet POS).
- Edit prices in `src/data.js` → `pricing` and `estimator` (they are EXAMPLE figures).
- `brand.bookingUrl` (Calendly/Cal.com) powers "Book a call"; empty = opens WhatsApp.
- `brand.formEndpoint` (Formspree URL) saves every contact-form enquiry; empty = WhatsApp/email only.
- English/Kiswahili switch (nav, CTAs, footer) in `src/lib/i18n.jsx`.
- Pages are lazy-loaded; `public/sitemap.xml` + `robots.txt` use the placeholder domain www.noxdigital.co.ke — change it.

## v6 additions
- Every project now shows on an iMac + MacBook + iPad + iPhone (inline SVG devices): `src/components/Devices.jsx`.
- Real screenshots auto-replace the mock screens: `/public/work/<slug>.jpg` (desktop), `<slug>-1.jpg` (laptop), `<slug>-m.jpg` (phone + tablet).
- Work list shows the device image instead of the arrow; "How fast we reply" lives in `brand.replyTimes` (data.js).
