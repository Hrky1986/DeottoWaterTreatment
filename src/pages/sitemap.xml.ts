import type { APIRoute } from 'astro';
import { langs } from '../i18n/ui';
import { getIndustries, getReferences, getServices, link } from '../lib/site';

// Every public page, in every language. With more than one language each URL lists
// its translations as hreflang alternates.
export const GET: APIRoute = async ({ site }) => {
  const lastmod = new Date().toISOString().slice(0, 10);
  const paths = new Set<string>(['', 'services', 'data-centers', 'industries', 'references', 'about', 'contact', 'privacy']);
  for (const lang of langs) {
    (await getServices(lang)).forEach((s) => paths.add(`services/${s.slug}`));
    (await getIndustries(lang)).filter((i) => !i.data.lead).forEach((i) => paths.add(`industries/${i.slug}`));
    (await getReferences(lang)).forEach((r) => paths.add(`references/${r.slug}`));
  }

  const loc = (lang: string, p: string) => new URL(link(lang as never, ...(p ? p.split('/') : [])), site).href;
  const urls = [...paths].flatMap((p) =>
    langs.map((lang) => {
      const alternates = langs.length > 1
        ? langs.map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${loc(l, p)}"/>`).join('')
        : '';
      return `<url><loc>${loc(lang, p)}</loc><lastmod>${lastmod}</lastmod>${alternates}</url>`;
    }),
  );

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
