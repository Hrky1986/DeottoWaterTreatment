// Cloudflare Pages Function for "/" only.
// Order: language the visitor picked before (cookie) → IP country from Cloudflare → English.
export function onRequest({ request }) {
  const cookie = request.headers.get('Cookie') || '';
  const saved = cookie.match(/(?:^|;\s*)lang=(hr|en)\b/)?.[1];
  const country = request.cf?.country || request.headers.get('CF-IPCountry');
  const lang = saved || (country === 'HR' ? 'hr' : 'en');

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
