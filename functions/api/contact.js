// Cloudflare Pages Function: POST /api/contact
// Checks the enquiry (honeypot, required fields, consent, optional Turnstile) and emails it
// to the company through the Resend API.
//
// Environment variables (Cloudflare Pages → Settings → Environment variables):
//   RESEND_API_KEY    API key from resend.com (the sending domain must be verified there)
//   CONTACT_TO        where enquiries go, e.g. info@deottolab.com
//   CONTACT_FROM      sender, e.g. "Deotto Lab website <web@deottolab.com>"
//   TURNSTILE_SECRET  optional; set together with PUBLIC_TURNSTILE_SITE_KEY at build time

const LIMITS = { name: 120, company: 160, email: 200, message: 5000 };

export async function onRequestPost({ request, env }) {
  const wantsJson = (request.headers.get('Accept') || '').includes('application/json');
  let form;
  try {
    form = await request.formData();
  } catch {
    return reply(400, 'bad-request');
  }
  const lang = /^[a-z]{2}$/.test(form.get('lang') || '') ? form.get('lang') : 'en';

  // Bots fill in the hidden field. Pretend it worked so they don't retry.
  if (form.get('website')) return reply(200, 'ok');

  const data = {};
  for (const [key, max] of Object.entries(LIMITS)) data[key] = String(form.get(key) || '').trim().slice(0, max);
  const valid = data.name && data.message
    && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email) && form.get('consent') === 'yes';
  if (!valid) return reply(422, 'invalid');

  if (env.TURNSTILE_SECRET) {
    const check = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: String(form.get('cf-turnstile-response') || ''),
        remoteip: request.headers.get('CF-Connecting-IP') || '',
      }),
    }).then((r) => r.json()).catch(() => ({ success: false }));
    if (!check.success) return reply(403, 'spam-check');
  }

  if (!env.RESEND_API_KEY || !env.CONTACT_TO || !env.CONTACT_FROM) return reply(500, 'not-configured');

  const text = [
    `Name: ${data.name}`,
    `Company: ${data.company || '-'}`,
    `Email: ${data.email}`,
    `Language: ${lang}`,
    '',
    data.message,
    '',
    `Consent to data processing given on ${new Date().toISOString()}.`,
  ].join('\n');

  const sent = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: env.CONTACT_FROM,
      to: env.CONTACT_TO.split(',').map((s) => s.trim()),
      reply_to: data.email,
      subject: `Website enquiry from ${data.name}${data.company ? `, ${data.company}` : ""}`,
      text,
    }),
  }).catch(() => null);
  if (!sent || !sent.ok) return reply(502, 'send-failed');

  return reply(200, 'ok');

  function reply(status, code) {
    if (wantsJson) return Response.json({ ok: status === 200, code }, { status });
    // Without JavaScript: back to the form, showing the thank-you note on success.
    const url = new URL(request.url);
    url.pathname = `/${lang}/`;
    url.hash = status === 200 ? 'sent' : 'contact';
    return Response.redirect(url.toString(), 303);
  }
}
