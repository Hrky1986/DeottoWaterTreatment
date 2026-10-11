# DeottoWaterTreatment

Single-page website for Ivan Deotto, water treatment consultant, in Croatian and English.

## Stack

- [Astro](https://astro.build) static build: plain HTML, no client framework. The only JavaScript is a small inline script for the problem finder tabs and the language switch.
- Hand-written CSS (`src/styles/global.css`) with light and dark themes.
- Self-hosted variable font (Archivo, via Fontsource), no third-party requests.
- Cloudflare Pages Function (`functions/index.js`) picks the language for `/` from the visitor's IP country.

## Language selection

`/hr/` and `/en/` are separate static pages. When someone opens `/`:

1. If they switched language before (cookie `lang`), they go to that language.
2. Otherwise, on Cloudflare Pages, visitors from Croatia (`CF-IPCountry: HR`) go to `/hr/`, everyone else to `/en/`.
3. On hosts without the function (local preview, GitHub Pages), `src/pages/index.astro` falls back to the browser's time zone (`Europe/Zagreb`) or language (`hr`).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Preview on GitHub Pages

Every push to `main` runs `.github/workflows/deploy-pages.yml` and publishes the site to
https://hrky1986.github.io/DeottoWaterTreatment/. The workflow sets `SITE` and `BASE_PATH`
so links work under the `/DeottoWaterTreatment/` subpath. GitHub Pages cannot run the
IP-based redirect, so `/` uses the time zone / browser language fallback there.

One-time setup: repository Settings → Pages → Source: **GitHub Actions**.

## Deploy to Cloudflare Pages

Connect the GitHub repository in the Cloudflare dashboard with:

- Build command: `npm run build`
- Build output directory: `dist`

The `functions/` directory is deployed automatically.

## Before launch

All copy lives in `src/i18n/content.ts`. Lines marked `TODO` are placeholders: email, phone, service area and the domain in `astro.config.mjs`.
