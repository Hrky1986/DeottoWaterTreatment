import type { APIRoute } from 'astro';

// Both language pages, each listing the other as an hreflang alternate.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  const loc = (l: string) => new URL(`${base}${l}/`, site).href;
  const lastmod = new Date().toISOString().slice(0, 10);
  const alternates = ['hr', 'en']
    .map((l) => `<xhtml:link rel="alternate" hreflang="${l}" href="${loc(l)}"/>`)
    .concat(`<xhtml:link rel="alternate" hreflang="x-default" href="${loc('en')}"/>`)
    .join('');
  const urls = ['hr', 'en']
    .map((l) => `<url><loc>${loc(l)}</loc><lastmod>${lastmod}</lastmod>${alternates}</url>`)
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
  );
};
