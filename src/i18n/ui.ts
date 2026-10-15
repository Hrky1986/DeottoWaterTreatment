// All site copy, per language. Kept deliberately short.
//
// Adding Croatian later: add 'hr' to `langs` and an `hr` block translated from `en`.

export const langs = ['en'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'en';

export const locales: Record<Lang, { og: string }> = {
  en: { og: 'en_GB' },
};

const en = {
  meta: {
    title: 'Deotto Lab – Water treatment for mission-critical cooling',
    description:
      'Design and engineering, project consulting, and operations and maintenance for the water in data center and industrial cooling systems.',
  },
  skip: 'Skip to content',

  menu: {
    open: 'Open menu',
    close: 'Close menu',
    label: 'Menu',
    links: [
      { id: 'services', label: 'Services' },
      { id: 'about', label: 'About us' },
      { id: 'contact', label: 'Contact' },
    ],
  },

  hero: {
    headline: ['Clean water,', 'quietly kept.'],
    lede: 'Water treatment and commissioning for mission-critical cooling.',
    cta: 'Begin a conversation',
    scroll: 'Scroll',
  },

  // In project order, from the first drawing to years of operation.
  services: {
    heading: 'Services',
    items: [
      { title: 'Design & Engineering', note: 'systems built to stay clean' },
      { title: 'Project consulting', note: 'independent, from the first drawing' },
      { title: 'Operations & Maintenance', note: 'treatment that lasts' },
    ],
  },

  about: {
    heading: 'About us',
    text: 'An independent water treatment lab from Zagreb. We look after the water inside cooling systems, then step aside.',
    places: ['Sweden', 'Norway', 'France', 'Croatia'],
    note: 'AI factories and data centers up to 40 MW. Some still running while we worked.',
  },

  contact: {
    heading: 'Begin a conversation',
    lede: 'Tell us a little. We’ll take it from there.',
    name: 'Name',
    company: 'Company',
    email: 'Email',
    message: 'Message',
    consent: 'I agree to Deotto Lab using these details to reply, as set out in the',
    consentLink: 'privacy notice',
    submit: 'Send',
    sending: 'Sending…',
    sent: 'Thank you. We’ll be in touch.',
    error: 'That didn’t go through. Write to us at',
    required: 'Required',
  },

  footer: { privacy: 'Privacy' },

  privacy: {
    title: 'Privacy – Deotto Lab',
    heading: 'Privacy',
    back: 'Back',
  },

  notFound: { title: 'Not found – Deotto Lab', heading: 'Nothing here.', back: 'Return' },
};

export type UI = typeof en;
export const ui: Record<Lang, UI> = { en };

export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const home = (lang: Lang) => `${base}${lang}/`;
