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
    // Title ≤ 60 characters and description ≤ 155, so search results don’t cut them off.
    title: 'Deotto Lab – Water treatment for data center cooling',
    description:
      'Independent water treatment for data center and industrial cooling: design & engineering, project consulting, operations & maintenance. Zagreb, Croatia.',
    ogAlt: 'Cooling water treatment for data centers & industry. Deotto Lab',
  },
  skip: 'Skip to content',

  menu: {
    open: 'Open menu',
    close: 'Close menu',
    label: 'Menu',
    links: [
      { id: 'services', label: 'Services' },
      { id: 'references', label: 'References' },
      { id: 'about', label: 'About us' },
      { id: 'contact', label: 'Contact' },
    ],
  },

  hero: {
    headline: ['Cooling water treatment', 'for data centers & industry.'],
    lede: 'Design & engineering, project consulting and operations & maintenance for closed-loop and process cooling systems.',
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

  // Client and investor names are left out on purpose. Each spec line is split on " · ".
  references: {
    heading: 'References',
    items: [
      { title: 'AI/HPC Data Center', country: 'Norway', specs: ['12 MW IT', 'Direct liquid cooling', 'Racks up to 110 kW', 'N+1'] },
      { title: 'AI Data Centers', country: 'Norway', specs: ['2 sites', '40 MW IT each', 'Consulting from design', 'SFN flushing', 'Commissioning'] },
      { title: 'AI Supercomputer', country: 'Sweden', specs: ['Liquid cooled', 'Cleaning & passivation', 'SFN flushing', 'Commissioning'] },
      { title: 'Colocation Data Center', country: 'France', specs: ['Live site', '99.999% uptime', 'Cleaning without downtime', 'Passivation'] },
      { title: 'Dairy, own water source', country: 'Croatia', specs: ['2 wells, 16.5 m and 21.5 m', 'Exploration & drilling', 'Water preparation'] },
    ],
  },

  about: {
    heading: 'About us',
    text: 'An independent water treatment lab from Zagreb, Croatia. We look after the water inside data center and industrial cooling systems, then step aside.',
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
    title: 'Privacy notice – Deotto Lab',
    description: 'How Deotto Lab handles the personal data sent through this website, in line with the GDPR.',
    heading: 'Privacy',
    back: 'Back',
  },

  notFound: { title: 'Not found – Deotto Lab', heading: 'Nothing here.', back: 'Return' },
};

export type UI = typeof en;
export const ui: Record<Lang, UI> = { en };

export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
export const home = (lang: Lang) => `${base}${lang}/`;
