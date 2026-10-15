# Deotto Lab website

Website for Deotto Lab (Zagreb, Croatia): water treatment consulting and commissioning for
mission-critical cooling. It's built from the developer brief of 14 Oct 2026. English comes first,
and the structure is ready for a Croatian version.

## Sitemap

| Page | URL | Content source |
| --- | --- | --- |
| Home | `/en/` | `src/i18n/ui.ts` (home) + collections |
| Services + 6 detail pages | `/en/services/…` | `src/content/services/en/*.md` |
| Data Centers | `/en/data-centers/` | `src/i18n/ui.ts` (dataCenters) |
| Industries + 4 detail pages | `/en/industries/…` | `src/content/industries/en/*.md` |
| References + 6 case pages | `/en/references/…` | `src/content/references/en/*.md` |
| About | `/en/about/` | `src/content/pages/en/about.md` |
| Contact (+ thank-you page) | `/en/contact/` | form → `functions/api/contact.js` |
| Privacy and cookies | `/en/privacy/` | `src/content/pages/en/privacy.md` |

Company details for the footer, the contact page and structured data are in `src/data/company.ts`.

## Stack

- [Astro](https://astro.build) static build with content collections (`src/content.config.ts`). There is no client framework, only small inline scripts for the menu, the reference filters, the contact form and the cookie notice.
- Hand-written CSS (`src/styles/global.css`). Archivo variable font is self-hosted, and the CSS is inlined.
- Cross-document view transitions for smooth page changes, and scroll reveals. Both are turned off when the visitor prefers reduced motion.
- Cloudflare Pages Functions: `functions/index.js` redirects `/` to a language, and `functions/api/contact.js` handles the enquiry form.

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Client permissions (references)

The brief says not to publish client names or logos until permission is confirmed. Each reference therefore has:

- `title`: a descriptive public title (e.g. "40 MW AI data center, Herøya"), always used for now;
- `client`: the real name, published only when `showClient: true`;
- `source`: the public source link, also shown only when `showClient: true` and a URL is filled in.

URLs (slugs) are descriptive too, so they never reveal a client.

## Editing content (CMS)

`/admin/` runs [Decap CMS](https://decapcms.org). It edits the Markdown in `src/content/` and commits it to GitHub, and every commit rebuilds the site. Clients can add references, services and industries and upload photos, which are compressed at build time.

GitHub login needs a small OAuth proxy. One-time setup:

1. Create a GitHub OAuth app (Settings → Developer settings → OAuth Apps).
2. Deploy an OAuth proxy, e.g. [decap-proxy](https://github.com/sterlingwes/decap-proxy) on Cloudflare Workers, with the app's client ID and secret.
3. Set `backend.base_url` in `public/admin/config.yml` to the proxy URL.
4. Give the editor write access to the repository.

## Contact form

The form posts to `/api/contact` (Cloudflare Pages Function). It checks a honeypot field, the required fields and the GDPR consent, optionally verifies Cloudflare Turnstile, and sends the enquiry by email through [Resend](https://resend.com). With JavaScript it submits in-page. Without it, the visitor is redirected to `/en/contact/thanks/`.

Set these in Cloudflare Pages → Settings → Environment variables:

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key (verify the sending domain in Resend) |
| `CONTACT_TO` | Recipient(s), comma-separated |
| `CONTACT_FROM` | Sender, e.g. `Deotto Lab website <web@yourdomain>` |
| `TURNSTILE_SECRET` | Optional spam check (server side) |
| `PUBLIC_TURNSTILE_SITE_KEY` | Optional spam check (build time; shows the widget) |

On the GitHub Pages preview there is no server, so the form shows the error message with the email address.

## Adding the Croatian version (phase 2)

1. Add `'hr'` to `langs` in `src/i18n/ui.ts`, and add an `hr` block translated from `en`.
2. Add `src/content/<collection>/hr/` files with the **same file names** as in `en/`.
3. Add `hr` to `i18n.locales` in `public/admin/config.yml`, and to `LANGS` in `functions/index.js`. Visitors from Croatia then go to `/hr/` automatically.

`hreflang` alternates and the sitemap pick up the new language on their own.

## SEO

- A title and description for every page, with canonical URLs and clean URLs as in the brief.
- JSON-LD: `ProfessionalService` (company), `WebPage`, `BreadcrumbList`, `Service` on service pages and `ItemList` on the services overview.
- `sitemap.xml` and `robots.txt` are generated at build time. The share image is `public/og-image.jpg` (`node scripts/render-og.mjs`).
- Target phrases (data center water treatment, liquid cooling flushing, CHW passivation, commissioning water treatment) appear in titles, descriptions and headings.

## Deploy

- **GitHub Pages preview**: every push to `main` runs `.github/workflows/deploy-pages.yml` (served under `/DeottoWaterTreatment/`).
- **Cloudflare Pages (production)**: build command `npm run build`, output `dist`. The `functions/` directory is deployed automatically. Set the real domain in `astro.config.mjs`.

## Before launch

Placeholders are marked `TODO` in the code. The client still needs to supply:

- [ ] Logo files (SVG); `src/components/Logo.astro` and `public/favicon.svg` are placeholders
- [ ] Approval of the proposed colours (navy, water cyan) and font (Archivo)
- [ ] Domain and hosting access (`astro.config.mjs`, `public/admin/config.yml`)
- [ ] Company details: address, phone, email, OIB, register, share capital, IBAN (`src/data/company.ts`)
- [ ] Permission from each client to use their name and logo (`showClient`)
- [ ] Year, status and source URL for each reference; sign-off on challenge/scope/result texts
- [ ] Site photos for each reference, with permission to publish
- [ ] About text: founding year, team, standards and certifications
- [ ] References for power plants, iron manufacturing and commercial HVAC
- [ ] CPC skid photos and spec (flow, filtration grade, size)
- [ ] Water analysis offer: parameters, lab, accreditation
- [ ] Which ASHRAE documents to cite
- [ ] Legal review of the privacy policy; final sign-off on all English copy
