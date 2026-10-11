import { defineConfig } from 'astro/config';

// SITE and BASE_PATH are set by the GitHub Pages workflow
// (https://hrky1986.github.io + /DeottoWaterTreatment). Locally and on
// Cloudflare Pages the site is served from the domain root.
export default defineConfig({
  // TODO: replace the fallback with the real domain once it is registered.
  site: process.env.SITE || 'https://deotto.hr',
  base: process.env.BASE_PATH || '/',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
});
