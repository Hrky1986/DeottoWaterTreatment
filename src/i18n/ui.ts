// Interface copy and the fixed page copy (home, data centers, contact), per language.
// Services, industries, references, About and Privacy live in src/content/ and are edited in the CMS.
//
// Adding Croatian later: add 'hr' to `langs`, copy the `en` block below as `hr` and translate it,
// then add src/content/<collection>/hr/ files with the same file names.

export const langs = ['en'] as const;
export type Lang = (typeof langs)[number];
export const defaultLang: Lang = 'en';

export const locales: Record<Lang, { name: string; og: string }> = {
  en: { name: 'English', og: 'en_GB' },
};

const en = {
  skip: 'Skip to content',
  menu: { open: 'Open menu', close: 'Close menu', label: 'Main menu' },
  nav: {
    home: 'Home',
    services: 'Services',
    dataCenters: 'Data Centers',
    industries: 'Industries',
    references: 'References',
    about: 'About',
    contact: 'Contact',
    privacy: 'Privacy and cookies',
  },
  cta: 'Contact us',
  breadcrumb: 'Breadcrumb',
  tagline: 'Water treatment consulting and commissioning for mission-critical cooling.',
  learnMore: 'Learn more',
  viewProject: 'View project',
  allServices: 'All services',
  allReferences: 'All references',
  allIndustries: 'All industries',
  standardsLabel: 'Standards',

  home: {
    title: 'Deotto Lab – Data center water treatment and commissioning',
    description:
      'Water treatment consulting and commissioning for mission-critical cooling: CHW and liquid cooling flushing, CPC, passivation and handover to BSRIA BG29/2021 and ASHRAE.',
    eyebrow: 'Deotto Lab · Zagreb',
    headline: 'Water treatment consulting and commissioning for mission-critical cooling.',
    lede: 'From design review to pre-commissioning, CPC flushing and handover, to BSRIA BG29/2021 and ASHRAE.',
    primary: 'See our references',
    secondary: 'Contact us',
    proofLabel: 'Key figures',
    proof: [
      { value: '3', label: 'countries', detail: 'Data center projects in Sweden, Norway and France' },
      { value: '40 MW', label: 'AI data centers', detail: 'Liquid-cooled AI sites up to 40 MW of IT load' },
      { value: '0', label: 'downtime', detail: 'Live data centers cleaned while they stay in operation' },
    ],
    servicesEyebrow: 'What we do',
    servicesHeading: 'Six services, one team, from design to handover',
    referencesEyebrow: 'Featured references',
    referencesHeading: 'Proven on AI and colocation data centers',
    industriesEyebrow: 'Industries',
    industriesHeading: 'Data centers first, and the industries that rely on clean water',
  },

  contactBand: {
    heading: 'Planning a new cooling system or commissioning?',
    text: 'Talk to us early. Cleanability is cheapest to fix at the design stage.',
  },

  services: {
    title: 'Services – Deotto Lab',
    description:
      'Water treatment consulting, pre-commissioning and CPC flushing, commissioning and handover, live data center cleaning, filtration skids and water analysis.',
    heading: 'Services',
    lede: 'Independent water treatment support for closed water systems, from the first design review to handover and beyond.',
    included: 'What’s included',
    systems: 'Typical systems',
    related: 'Related references',
    other: 'Other services',
    counter: (n: number, total: number) => `Service ${String(n).padStart(2, '0')} / ${String(total).padStart(2, '0')}`,
  },

  dataCenters: {
    title: 'Data center water treatment and liquid cooling flushing – Deotto Lab',
    description:
      'Water treatment for data center liquid cooling: CHW passivation, SFN/DLC flushing, CPC pre-commission cleaning and commissioning, plus cleaning of live data centers without downtime.',
    eyebrow: 'Lead sector',
    heading: 'Data Centers',
    lede: 'High-density AI hardware depends on clean, stable cooling water. We make sure the CHW and SFN/DLC loops are ready for it.',
    whyHeading: 'Why water quality is critical in liquid cooling',
    whyText:
      'In a liquid-cooled data center, chilled water (CHW) and secondary fluid networks (SFN) carry heat away from racks drawing 100 kW and more. Direct liquid cooling (DLC) brings that water right up to the processors, through cold plates with channels a fraction of a millimetre wide.',
    why: [
      { title: 'Fine channels clog', text: 'Construction debris, mill scale and corrosion products block cold plates and strainers and cut flow to the hardware.' },
      { title: 'Corrosion starts early', text: 'Fresh steel and copper surfaces corrode quickly unless the loop is cleaned and passivated before filling.' },
      { title: 'Biofilm cuts heat transfer', text: 'Bacteria in poorly treated water form biofilm, which insulates heat exchangers and speeds up corrosion.' },
      { title: 'Warranties depend on it', text: 'CDU and cold plate suppliers set water quality limits. Documented cleanliness at handover protects the warranty.' },
    ],
    stagesHeading: 'What we do at each stage',
    stages: [
      { title: 'Design consulting', text: 'Flushing strategy, water specifications and reviews for cleanability.', service: 'water-treatment-consulting' },
      { title: 'Cleaning and passivation', text: 'Chemical cleaning and passivation of new pipework to BSRIA BG29/2021.', service: 'pre-commissioning-cpc-flushing' },
      { title: 'Flushing', text: 'CPC and SFN flushing with our own filtration skids.', service: 'filtration-skids-new-technology' },
      { title: 'Commissioning', text: 'Water quality sign-off and documentation at handover.', service: 'commissioning-handover' },
      { title: 'Ongoing treatment', text: 'Treatment programmes and laboratory analysis in operation.', service: 'water-analysis' },
    ],
    liveEyebrow: 'Live sites',
    liveHeading:'Cleaning without downtime on live sites',
    liveText:
      'Operating data centers can’t switch their cooling off. We clean and treat CHW systems while the facility stays in operation, using side-stream filtration and controlled cleaning, with water quality monitored throughout.',
    liveLink: 'Live data center cleaning',
    referencesHeading: 'Data center references',
  },

  industries: {
    title: 'Industries – Deotto Lab',
    description:
      'Water treatment for data centers, food and beverage, power plants, iron manufacturing and commercial HVAC.',
    heading: 'Industries',
    lede: 'Data centers are our lead sector. The same expertise in closed water systems serves other industries where water quality matters.',
    systems: 'Typical water systems',
    help: 'How we help',
    reference: 'Reference',
    noReference: 'Ask us about similar projects in this sector.',
  },

  references: {
    title: 'References – Deotto Lab',
    description:
      'Reference projects: AI and colocation data centers in Sweden, Norway and France, and industrial water projects in Croatia.',
    heading: 'References',
    lede: 'Data center and industrial projects in Sweden, Norway, France and Croatia.',
    filterIndustry: 'Industry',
    filterService: 'Service',
    all: 'All',
    count: (n: number) => (n === 1 ? '1 project' : `${n} projects`),
    empty: 'No projects match both filters.',
    reset: 'Show all projects',
    keyFigure: 'Key figure',
    scopeTags: 'Scope',
    facts: 'Key facts',
    location: 'Location',
    facility: 'Facility',
    industry: 'Industry',
    servicesLabel: 'Services',
    year: 'Year',
    status: 'Status',
    statusValues: { completed: 'Completed', ongoing: 'Ongoing' },
    source: 'Public source',
    challenge: 'The challenge',
    scope: 'Our scope',
    result: 'Result',
    more: 'More references',
  },

  about: {
    countries: 'Countries worked in',
    countryList: ['Croatia', 'France', 'Norway', 'Sweden'],
    standards: 'Standards followed',
    based: 'Based in',
  },

  contact: {
    title: 'Contact – Deotto Lab',
    description: 'Send Deotto Lab an enquiry about data center water treatment, flushing, commissioning or water analysis.',
    heading: 'Contact us',
    lede: 'Tell us about your project, the systems involved and where it stands. We’ll reply with next steps.',
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      phone: 'Phone',
      optional: 'optional',
      industry: 'Industry',
      industryPlaceholder: 'Choose an industry',
      industryOther: 'Other',
      message: 'Message',
      messageHint: 'The site, the systems involved and the stage of the project help us reply faster.',
      consent:
        'I agree that Deotto Lab may use the data in this form to reply to my enquiry, as described in the',
      consentLink: 'privacy policy',
      submit: 'Send enquiry',
      sending: 'Sending…',
      sent: 'Thank you. Your enquiry has been sent, and we’ll get back to you soon.',
      error: 'Your enquiry couldn’t be sent. Please try again, or email us directly at',
      required: 'Required',
    },
    detailsHeading: 'Company details',
    email: 'Email',
    phone: 'Phone',
    address: 'Address',
    thanksTitle: 'Enquiry sent – Deotto Lab',
    thanksHeading: 'Thank you',
    thanksText: 'Your enquiry has been sent. We’ll get back to you soon.',
    thanksBack: 'Back to the home page',
  },

  footer: {
    services: 'Services',
    industries: 'Industries',
    company: 'Company',
    legal: 'Company details',
    rights: 'All rights reserved.',
  },

  cookie: {
    text: 'This site uses no tracking or advertising cookies.',
    link: 'Privacy and cookies',
    ok: 'OK',
    label: 'Cookie notice',
  },

  notFound: {
    title: 'Page not found – Deotto Lab',
    heading: 'Page not found',
    text: 'The page may have moved. Try one of these instead:',
  },
};

export type UI = typeof en;
export const ui: Record<Lang, UI> = { en };
