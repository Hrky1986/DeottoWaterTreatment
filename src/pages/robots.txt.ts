import type { APIRoute } from 'astro';

// Only effective at a domain root (the final domain / Cloudflare Pages), not under a github.io subpath.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL(`${base}sitemap.xml`, site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
