import { defineConfig } from 'astro/config';

export default defineConfig({
  // TODO: replace with the real domain once it is registered.
  site: 'https://deotto.hr',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
});
