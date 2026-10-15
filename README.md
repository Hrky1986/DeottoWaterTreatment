# Deotto Lab website

A single, quiet page for Deotto Lab (Zagreb, Croatia): water treatment and commissioning for
mission-critical cooling. The site says little on purpose. It shows what is offered, where the
work has been done and how to get in touch.

## Structure

- `/en/`: the page. Hero, services, references (no client names), about us and a contact form, reached through the hamburger menu.
- `/en/privacy/`: privacy notice, linked from the form and the footer.
- `/`: redirects to `/en/`.

All copy is in `src/i18n/ui.ts`. Company details for the footer and structured data are in `src/data/company.ts`.

## Stack

- [Astro](https://astro.build) static build, no client framework. Small inline scripts handle the header, the scroll reveals and the contact form.
- Hand-written CSS (`src/styles/global.css`), light theme. One self-hosted font (Archivo).
- Motion (ripple rings, drifting water, slow reveals) is turned off for visitors who prefer reduced motion.
- No cookies are set, so there is no cookie banner.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Contact form

The form posts to `/api/contact`, a Cloudflare Pages Function (`functions/api/contact.js`). It checks a hidden trap field, the required fields and the GDPR consent, can optionally verify Cloudflare Turnstile, and emails the enquiry through [Resend](https://resend.com). With JavaScript the form submits in place. Without it, the visitor comes back to `/en/#sent`, which shows the thank-you line.

Set these in Cloudflare Pages → Settings → Environment variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (verify the sending domain in Resend) |
| `CONTACT_TO` | Recipient(s), comma-separated |
| `CONTACT_FROM` | Sender, e.g. `Deotto Lab website <web@yourdomain>` |
| `TURNSTILE_SECRET` | Optional spam check (server side) |
| `PUBLIC_TURNSTILE_SITE_KEY` | Optional spam check (build time; shows the widget) |

There is no server on the GitHub Pages preview, so the form shows the error line with the email address.

## SEO

- **Tags:** a title of 60 characters or fewer and a description of 155 or fewer (`src/i18n/ui.ts`), canonical URL, hreflang, and a `robots` tag allowing large image previews.
- **Share previews:** Open Graph and Twitter tags with `public/og-image.jpg` (`node scripts/render-og.mjs`).
- **Structured data:** `Organization`/`ProfessionalService` with address, countries served and an `OfferCatalog` of the three services; also `WebSite` and `WebPage`.
- **Headings:** one `h1`, an `h2` per section and an `h3` per service.
- **Files:** `sitemap.xml` and `robots.txt` are generated at build time. There are PNG icons (`node scripts/render-icons.mjs`) and a web manifest.
- **Speed:** CSS is inlined, one Latin font file (35 KB) is preloaded, and the hero image is served as AVIF/WebP. `public/_headers` caches build assets for a year on Cloudflare.
- **Lighthouse (local build):** 100 for performance, accessibility, best practices and SEO, on both pages.

### After launch on the real domain

1. Set the domain in `astro.config.mjs` (`site`). Canonical URLs, the sitemap and structured data all use it.
2. Add the site to [Google Search Console](https://search.google.com/search-console) and [Bing Webmaster Tools](https://www.bing.com/webmasters), using the HTML tag method. Put the codes in the build environment as `PUBLIC_GOOGLE_SITE_VERIFICATION` and `PUBLIC_BING_SITE_VERIFICATION`, rebuild, then verify.
3. Submit `https://<domain>/sitemap.xml` in both tools.
4. Check the structured data with Google's [Rich Results Test](https://search.google.com/test/rich-results).
5. Fill in the real company details (`src/data/company.ts`). They appear in the structured data, and a real address helps local search.

On the GitHub Pages preview, `robots.txt` sits under a subpath, where search engines ignore it. That is expected for a preview.

## Adding Croatian

Add `'hr'` to `langs` in `src/i18n/ui.ts` with a translated `hr` block, and add `'hr'` to `LANGS` in `functions/index.js`.

## Images

- Hero water: `node scripts/render-water.mjs` → `src/assets/water-ripples.jpg` (procedural, no licence needed).
- Share image: `node scripts/render-og.mjs` → `public/og-image.jpg`.
- Icons: `node scripts/render-icons.mjs` → `public/*.png` (from `public/favicon.svg`).

## Deploy

- **GitHub Pages preview**: every push to `main` runs `.github/workflows/deploy-pages.yml`.
- **Cloudflare Pages (production)**: build command `npm run build`, output `dist`. `functions/` deploys automatically. Set the real domain in `astro.config.mjs`.

## Before launch

Placeholders are marked `TODO`:

- [ ] Logo (SVG): `src/components/Logo.astro`, `public/favicon.svg`
- [ ] Domain: `astro.config.mjs`
- [ ] Company details: address, email, phone, OIB, register, share capital, IBAN (`src/data/company.ts`)
- [ ] Legal review of the privacy notice (`src/pages/[lang]/privacy.astro`)
