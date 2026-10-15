import type { APIRoute } from 'astro';
import { base } from '../lib/site';

// Only effective at a domain root (the final domain / Cloudflare Pages), not under a github.io subpath.
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\nDisallow: ${base}admin/\n\nSitemap: ${new URL(`${base}sitemap.xml`, site).href}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
