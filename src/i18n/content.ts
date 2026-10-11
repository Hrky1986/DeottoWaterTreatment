// All page copy, in both languages. Values marked TODO are placeholders
// that Ivan needs to confirm or replace before launch.

export type Lang = 'hr' | 'en';

export interface Content {
  lang: Lang;
  meta: { title: string; description: string; ogAlt: string };
  skip: string;
  menu: { open: string; close: string; label: string };
  nav: { services: string; process: string; rules: string; faq: string; contact: string };
  langSwitch: { label: string; other: string; otherName: string };
  hero: {
    name: string;
    role: string;
    headline: string;
    lede: string;
    ctaPrimary: string;
  };
  services: { heading: string; intro: string; groups: { title: string; who: string; items: string[] }[] };
  process: { heading: string; intro: string; steps: { title: string; text: string }[] };
  rules: {
    heading: string;
    intro: string;
    tableCaption: string;
    cols: [string, string, string];
    rows: [string, string, string][];
    timelineHeading: string;
    timeline: { date: string; text: string }[];
    sourcesHeading: string;
    sources: { label: string; url: string }[];
  };
  faq: { heading: string; items: { q: string; a: string }[] };
  contact: {
    heading: string;
    text: string;
    checklist: string[];
    emailLabel: string;
    phoneLabel: string;
    areaLabel: string;
    area: string;
    email: string;
    phone: string;
    mailSubject: string;
    cta: string;
  };
  footer: { note: string };
}

const sources = [
  { label: 'NN 64/2023 – Pravilnik o parametrima sukladnosti, metodama analiza i monitorinzima vode namijenjene za ljudsku potrošnju', url: 'https://narodne-novine.nn.hr/clanci/sluzbeni/2023_06_64_1057.html' },
  { label: 'Directive (EU) 2020/2184 on the quality of water intended for human consumption', url: 'https://eur-lex.europa.eu/eli/dir/2020/2184/oj' },
  { label: 'HZJZ – Izvješća o zdravstvenoj ispravnosti vode za ljudsku potrošnju', url: 'https://www.hzjz.hr/wp-content/uploads/2023/07/IZVJESTAJ-2022_final.pdf' },
];

// TODO: real contact details.
const EMAIL = 'ivan@deotto.hr';
const PHONE = '+385 00 000 0000';

export const content: Record<Lang, Content> = {
  hr: {
    lang: 'hr',
    meta: {
      title: 'Obrada i pročišćavanje vode – savjetnik Ivan Deotto',
      description:
        'Analiza vode, omekšivači, filtri za željezo i arsen, UV za bunare i procjena rizika od Legionelle za apartmane i hotele. Savjetovanje u cijeloj Hrvatskoj.',
      ogAlt: 'Ivan Deotto, savjetnik za obradu vode',
    },
    skip: 'Preskoči na sadržaj',
    menu: { open: 'Otvori izbornik', close: 'Zatvori izbornik', label: 'Izbornik' },
    nav: { services: 'Usluge', process: 'Kako radim', rules: 'Propisi', faq: 'Pitanja', contact: 'Kontakt' },
    langSwitch: { label: 'Jezik', other: 'EN', otherName: 'English' },
    hero: {
      name: 'Ivan Deotto',
      role: 'savjetnik za obradu vode',
      headline: 'Prvo saznajte što je u vodi. Onda birajte uređaj.',
      lede:
        'Pomažem kućanstvima, iznajmljivačima, ugostiteljima i tvrtkama protumačiti analizu vode i odabrati obradu koja rješava stvarni problem, bez kupnje opreme koja vam ne treba.',
      ctaPrimary: 'Dogovorite procjenu vode',
    },
    services: {
      heading: 'Usluge',
      intro: 'Svaki posao počinje analizom i razgovorom o tome kako koristite vodu. Usluge su grupirane prema tome za koga su.',
      groups: [
        {
          title: 'Kućanstva i bunari',
          who: 'Obiteljske kuće, vikendice, vlastiti bunari',
          items: ['Tumačenje laboratorijskih nalaza', 'Odabir i dimenzioniranje omekšivača, filtara, UV i RO uređaja', 'Drugo mišljenje o ponudi za opremu', 'Provjera uređaja nakon ugradnje'],
        },
        {
          title: 'Turizam i ugostiteljstvo',
          who: 'Apartmani, kampovi, hoteli, restorani',
          items: ['Procjena rizika od Legionelle', 'Pregled sustava tople vode', 'Plan uzorkovanja i upute za osoblje', 'Dokumentacija za sanitarnu inspekciju'],
        },
        {
          title: 'Prehrana i industrija',
          who: 'Proizvodnja hrane, pogoni, kotlovnice',
          items: ['Kvaliteta procesne vode', 'Obrada vode za kotlove i rashladne sustave', 'Voda u HACCP dokumentaciji', 'Smanjenje potrošnje kemikalija i vode'],
        },
        {
          title: 'Mali vodoopskrbljivači',
          who: 'Općine, lokalni vodovodi, ustanove',
          items: ['Planovi sigurnosti vode', 'Programi monitoringa', 'Procjena rizika od izvorišta do slavine', 'Modernizacija postojeće obrade'],
        },
      ],
    },
    process: {
      heading: 'Kako radim',
      intro: 'Od prvog poziva do vode koja je ispravna i ostaje takva.',
      steps: [
        { title: 'Razgovor', text: 'Opišete problem, izvor vode i kako je koristite. Ako imate stari nalaz, pošaljite ga.' },
        { title: 'Uzorkovanje i analiza', text: 'Odredim koje parametre treba ispitati. Uzorke analizira ovlašteni laboratorij.' },
        { title: 'Izvještaj i preporuka', text: 'Dobivate pisano tumačenje nalaza i prijedlog obrade s okvirnim troškovima ugradnje i održavanja.' },
        { title: 'Provedba', text: 'Po želji pregledam ponude izvođača i nadzirem ugradnju i puštanje u rad.' },
        { title: 'Kontrola', text: 'Kontrolna analiza potvrdi da obrada radi, a plan održavanja da tako i ostane.' },
      ],
    },
    rules: {
      heading: 'Granične vrijednosti i rokovi',
      intro:
        'U Hrvatskoj kvalitetu vode za piće propisuje Pravilnik NN 64/2023, kojim je preuzeta EU Direktiva o vodi za piće 2020/2184.',
      tableCaption: 'Odabrane maksimalno dopuštene koncentracije (MDK)',
      cols: ['Parametar', 'MDK', 'Gdje se najčešće javlja'],
      rows: [
        ['E. coli, enterokoki', '0 / 100 ml', 'Bunari, izvori, cisterne'],
        ['Arsen', '10 µg/l', 'Podzemna voda istočne Slavonije'],
        ['Nitrati', '50 mg/l', 'Plitki bunari u poljoprivrednim područjima'],
        ['Nitriti', '0,50 mg/l', 'Bunari, nedovoljno obrađena voda'],
        ['Željezo', '200 µg/l', 'Bunarska i podzemna voda'],
        ['Mangan', '50 µg/l', 'Bunarska i podzemna voda'],
        ['Olovo', '10 µg/l, od 2036. 5 µg/l', 'Stare olovne cijevi i armature'],
        ['Uran', '30 µg/l', 'Pojedini podzemni izvori'],
        ['PFAS ukupno', '0,50 µg/l', 'Blizina industrije i vatrogasnih vježbališta'],
        ['Legionella', '< 1 000 CFU/l', 'Topla voda u hotelima, bolnicama, domovima'],
      ],
      timelineHeading: 'Rokovi iz EU Direktive o vodi za piće',
      timeline: [
        { date: '22. 6. 2023.', text: 'Na snagu stupa hrvatski Pravilnik NN 64/2023.' },
        { date: '12. 1. 2026.', text: 'Počinju se primjenjivati granice za PFAS.' },
        { date: '12. 7. 2027.', text: 'Prva procjena rizika slivnih područja crpilišta.' },
        { date: '12. 1. 2029.', text: 'Prva procjena rizika vodoopskrbnog sustava i unutarnjih mreža prioritetnih objekata.' },
        { date: '12. 1. 2036.', text: 'MDK za olovo smanjuje se s 10 na 5 µg/l.' },
      ],
      sourcesHeading: 'Izvori',
      sources,
    },
    faq: {
      heading: 'Česta pitanja',
      items: [
        {
          q: 'Trebam li ispitivati vodu iz javnog vodovoda?',
          a: 'Vodovod kontrolira vodu do priključka na vašu nekretninu. Za ono što se događa u unutarnjim cijevima i bojleru odgovoran je vlasnik zgrade. Analiza ima smisla kod starih instalacija, promjene okusa ili ako iznajmljujete smještaj.',
        },
        {
          q: 'Koliko često ispitivati bunar?',
          a: 'Barem jednom godišnje te nakon poplava, radova na bunaru ili promjene boje, mirisa i okusa vode. Prva analiza neka bude šira, a kasnije se prati ono što je bilo problematično.',
        },
        {
          q: 'Je li omekšana voda zdrava za piće?',
          a: 'Ionski omekšivač zamjenjuje kalcij i magnezij natrijem. Za većinu ljudi to nije problem, ali preporučujem ostaviti jednu slavinu s neomekšanom vodom za piće i kuhanje.',
        },
        {
          q: 'Uklanja li filtar u vrču arsen ili nitrate?',
          a: 'Obični filtri s aktivnim ugljenom ne uklanjaju ih pouzdano. Za arsen i nitrate potrebne su posebne ispune ili reverzna osmoza, uz kontrolnu analizu nakon ugradnje.',
        },
        {
          q: 'Na kojem području radite?',
          // TODO: confirm service area.
          a: 'Savjetovanje na temelju nalaza moguće je bilo gdje u Hrvatskoj. Obilazak na terenu dogovaramo prema lokaciji.',
        },
      ],
    },
    contact: {
      heading: 'Pošaljite upit',
      text: 'Javite se e-poštom ili telefonom. Upit će biti brže riješen ako navedete:',
      checklist: ['odakle dolazi voda (vodovod, bunar, izvor, cisterna)', 'što ste primijetili i otkad', 'za što koristite vodu (kućanstvo, apartmani, proizvodnja)', 'postojeći nalaz analize, ako ga imate'],
      emailLabel: 'E-pošta',
      phoneLabel: 'Telefon',
      areaLabel: 'Područje rada',
      area: 'Cijela Hrvatska', // TODO: confirm
      email: EMAIL,
      phone: PHONE,
      mailSubject: 'Upit za procjenu vode',
      cta: 'Pošalji e-poštu',
    },
    footer: { note: 'Podaci o propisima služe za informiranje i ne zamjenjuju analizu ovlaštenog laboratorija.' },
  },

  en: {
    lang: 'en',
    meta: {
      title: 'Water treatment consultant in Croatia – Ivan Deotto',
      description:
        'Water analysis, softeners, iron and arsenic filters, UV for private wells and Legionella risk assessment for rentals and hotels. Consulting across Croatia.',
      ogAlt: 'Ivan Deotto, water treatment consultant',
    },
    skip: 'Skip to content',
    menu: { open: 'Open menu', close: 'Close menu', label: 'Menu' },
    nav: { services: 'Services', process: 'How I work', rules: 'Regulations', faq: 'FAQ', contact: 'Contact' },
    langSwitch: { label: 'Language', other: 'HR', otherName: 'Hrvatski' },
    hero: {
      name: 'Ivan Deotto',
      role: 'water treatment consultant',
      headline: 'Find out what is in your water. Then choose the equipment.',
      lede:
        'I help households, holiday rental owners, restaurants and companies read their water analysis and choose treatment that solves the actual problem, without buying equipment they do not need.',
      ctaPrimary: 'Book a water assessment',
    },
    services: {
      heading: 'Services',
      intro: 'Every job starts with an analysis and a conversation about how you use water. Services are grouped by who they are for.',
      groups: [
        {
          title: 'Homes and wells',
          who: 'Family houses, holiday homes, private wells',
          items: ['Interpreting lab reports', 'Choosing and sizing softeners, filters, UV and RO systems', 'Second opinion on equipment quotes', 'Checking systems after installation'],
        },
        {
          title: 'Tourism and hospitality',
          who: 'Apartments, campsites, hotels, restaurants',
          items: ['Legionella risk assessment', 'Hot water system review', 'Sampling plan and staff instructions', 'Documentation for health inspections'],
        },
        {
          title: 'Food and industry',
          who: 'Food production, plants, boiler rooms',
          items: ['Process water quality', 'Boiler and cooling water treatment', 'Water in HACCP documentation', 'Reducing chemical and water use'],
        },
        {
          title: 'Small water suppliers',
          who: 'Municipalities, local waterworks, institutions',
          items: ['Water safety plans', 'Monitoring programmes', 'Risk assessment from source to tap', 'Upgrading existing treatment'],
        },
      ],
    },
    process: {
      heading: 'How I work',
      intro: 'From the first call to water that is safe and stays that way.',
      steps: [
        { title: 'Conversation', text: 'You describe the problem, the water source and how you use it. If you have an older lab report, send it over.' },
        { title: 'Sampling and analysis', text: 'I decide which parameters need testing. Samples are analysed by an accredited laboratory.' },
        { title: 'Report and recommendation', text: 'You get a written interpretation of the results and a treatment proposal with estimated installation and running costs.' },
        { title: 'Implementation', text: 'If you want, I review contractor quotes and supervise installation and commissioning.' },
        { title: 'Follow-up', text: 'A control analysis confirms the treatment works, and a maintenance plan keeps it that way.' },
      ],
    },
    rules: {
      heading: 'Limits and deadlines',
      intro: 'In Croatia, drinking water quality is set by regulation NN 64/2023, which transposes the EU Drinking Water Directive 2020/2184.',
      tableCaption: 'Selected maximum permitted values',
      cols: ['Parameter', 'Limit', 'Where it usually occurs'],
      rows: [
        ['E. coli, enterococci', '0 / 100 ml', 'Wells, springs, cisterns'],
        ['Arsenic', '10 µg/l', 'Groundwater in eastern Slavonia'],
        ['Nitrate', '50 mg/l', 'Shallow wells in farming areas'],
        ['Nitrite', '0.50 mg/l', 'Wells, under-treated water'],
        ['Iron', '200 µg/l', 'Well and groundwater'],
        ['Manganese', '50 µg/l', 'Well and groundwater'],
        ['Lead', '10 µg/l, 5 µg/l from 2036', 'Old lead pipes and fittings'],
        ['Uranium', '30 µg/l', 'Some groundwater sources'],
        ['PFAS total', '0.50 µg/l', 'Near industry and firefighting training sites'],
        ['Legionella', '< 1,000 CFU/l', 'Hot water in hotels, hospitals, care homes'],
      ],
      timelineHeading: 'EU Drinking Water Directive deadlines',
      timeline: [
        { date: '22 Jun 2023', text: 'Croatian regulation NN 64/2023 enters into force.' },
        { date: '12 Jan 2026', text: 'PFAS limits start to apply.' },
        { date: '12 Jul 2027', text: 'First risk assessment of catchment areas for abstraction points.' },
        { date: '12 Jan 2029', text: 'First risk assessment of supply systems and of pipework in priority premises.' },
        { date: '12 Jan 2036', text: 'Lead limit drops from 10 to 5 µg/l.' },
      ],
      sourcesHeading: 'Sources',
      sources,
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Do I need to test water from the public supply?',
          a: 'The water utility is responsible up to the connection to your property. What happens in the internal pipes and water heater is the building owner’s responsibility. Testing makes sense with old pipework, a change in taste, or if you rent out accommodation.',
        },
        {
          q: 'How often should a well be tested?',
          a: 'At least once a year, and after flooding, work on the well, or any change in colour, smell or taste. Make the first analysis broad, then keep tracking whatever was a problem.',
        },
        {
          q: 'Is softened water safe to drink?',
          a: 'An ion-exchange softener swaps calcium and magnesium for sodium. For most people that is fine, but I recommend keeping one tap with unsoftened water for drinking and cooking.',
        },
        {
          q: 'Does a jug filter remove arsenic or nitrate?',
          a: 'Ordinary activated carbon filters do not remove them reliably. Arsenic and nitrate need specific media or reverse osmosis, with a control analysis after installation.',
        },
        {
          q: 'Which area do you cover?',
          // TODO: confirm service area.
          a: 'Consulting based on lab reports is available anywhere in Croatia. Site visits are arranged depending on location. English-speaking property owners are welcome.',
        },
      ],
    },
    contact: {
      heading: 'Send an enquiry',
      text: 'Get in touch by email or phone. I can help faster if you include:',
      checklist: ['where the water comes from (mains, well, spring, cistern)', 'what you have noticed and since when', 'what the water is used for (home, rentals, production)', 'any existing lab report'],
      emailLabel: 'Email',
      phoneLabel: 'Phone',
      areaLabel: 'Service area',
      area: 'All of Croatia', // TODO: confirm
      email: EMAIL,
      phone: PHONE,
      mailSubject: 'Water assessment enquiry',
      cta: 'Send an email',
    },
    footer: { note: 'Regulatory information is for guidance and does not replace an analysis by an accredited laboratory.' },
  },
};
