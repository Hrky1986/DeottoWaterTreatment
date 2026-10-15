// Cloudflare Pages Function for "/" only.
// English is the only language for now. When the Croatian version is added, put 'hr' in LANGS:
// visitors then get the language they picked before (cookie), or Croatian when they browse from Croatia.
const LANGS = ['en'];
const DEFAULT = 'en';

export function onRequest({ request }) {
  const cookie = request.headers.get('Cookie') || '';
  const saved = cookie.match(/(?:^|;\s*)lang=([a-z]{2})\b/)?.[1];
  const country = request.cf?.country || request.headers.get('CF-IPCountry');
  const byCountry = country === 'HR' ? 'hr' : DEFAULT;
  const lang = [saved, byCountry].find((l) => LANGS.includes(l)) || DEFAULT;

  const url = new URL(request.url);
  url.pathname = `/${lang}/`;

  return new Response(null, {
    status: 302,
    headers: {
      Location: url.toString(),
      // The answer depends on who is asking, so it must never be cached for everyone.
      'Cache-Control': 'private, no-store',
      Vary: 'Cookie',
    },
  });
}
