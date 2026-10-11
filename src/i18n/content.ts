// All page copy, in both languages. Values marked TODO are placeholders
// that Ivan needs to confirm or replace before launch.

export type Lang = 'hr' | 'en';

export interface Problem {
  id: string;
  label: string;
  title: string;
  cause: string;
  limit: string;
  fixes: string[];
  help: string;
}

export interface Content {
  lang: Lang;
  meta: { title: string; description: string };
  skip: string;
  nav: { problems: string; services: string; process: string; rules: string; faq: string; contact: string };
  langSwitch: { label: string; other: string; otherName: string };
  hero: {
    name: string;
    role: string;
    headline: string;
    lede: string;
    ctaPrimary: string;
    ctaSecondary: string;
    sheetTitle: string;
    sheetSource: string;
    sheetLimit: string;
    sheetOver: string;
    sheetOk: string;
    sheetNote: string;
    rows: { name: string; value: number; limit: number; unit: string }[];
  };
  problems: { heading: string; intro: string; causeLabel: string; limitLabel: string; fixesLabel: string; helpLabel: string; items: Problem[] };
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
      title: 'Ivan Deotto – savjetnik za obradu vode',
      description:
        'Analiza vode, odabir uređaja za pročišćavanje, bunari, kamenac, željezo, arsen i Legionella. Savjetovanje za kućanstva, turizam, ugostiteljstvo i industriju u Hrvatskoj.',
    },
    skip: 'Preskoči na sadržaj',
    nav: { problems: 'Problemi', services: 'Usluge', process: 'Kako radim', rules: 'Propisi', faq: 'Pitanja', contact: 'Kontakt' },
    langSwitch: { label: 'Jezik', other: 'EN', otherName: 'English' },
    hero: {
      name: 'Ivan Deotto',
      role: 'savjetnik za obradu vode',
      headline: 'Prvo saznajte što je u vodi. Onda birajte uređaj.',
      lede:
        'Pomažem kućanstvima, iznajmljivačima, ugostiteljima i tvrtkama protumačiti analizu vode i odabrati obradu koja rješava stvarni problem, bez kupnje opreme koja vam ne treba.',
      ctaPrimary: 'Dogovorite procjenu vode',
      ctaSecondary: 'Pronađite svoj problem',
      sheetTitle: 'Primjer analize bunarske vode',
      sheetSource: 'istočna Slavonija',
      sheetLimit: 'MDK',
      sheetOver: 'iznad dopuštenog',
      sheetOk: 'u granicama',
      sheetNote: 'Ilustrativne vrijednosti. Granice prema NN 64/2023.',
      rows: [
        { name: 'Arsen', value: 24, limit: 10, unit: 'µg/l' },
        { name: 'Željezo', value: 340, limit: 200, unit: 'µg/l' },
        { name: 'Mangan', value: 31, limit: 50, unit: 'µg/l' },
        { name: 'Nitrati', value: 18, limit: 50, unit: 'mg/l' },
      ],
    },
    problems: {
      heading: 'Što primjećujete na vodi?',
      intro: 'Odaberite ono što vas muči. Vidjet ćete najčešći uzrok, što kaže propis i koje vrste obrade dolaze u obzir.',
      causeLabel: 'Najčešći uzrok',
      limitLabel: 'Što kaže propis',
      fixesLabel: 'Moguća rješenja',
      helpLabel: 'Kako vam pomažem',
      items: [
        {
          id: 'kamenac',
          label: 'Kamenac na slavinama i aparatima',
          title: 'Tvrda voda',
          cause:
            'Kalcij i magnezij otopljeni iz vapnenca. Velik dio Hrvatske, osobito krš i Panonska nizina, ima tvrdu vodu. Kamenac skraćuje vijek bojlera, perilica i aparata za kavu i povećava potrošnju energije.',
          limit:
            'Tvrdoća nije zdravstveni problem i propis za nju ne određuje MDK. Procjenjuje se prema preporukama Svjetske zdravstvene organizacije.',
          fixes: [
            'Ionski omekšivač za cijelu kuću ili samo za toplu vodu',
            'Djelomično omekšavanje, da voda zadrži dio minerala',
            'Dozirni uređaji protiv kamenca za bojlere i kotlove',
          ],
          help: 'Izmjerim tvrdoću i potrošnju, dimenzioniram omekšivač i pazim da se voda ne omekša previše, jer premeka voda nagriza cijevi.',
        },
        {
          id: 'zeljezo',
          label: 'Smeđe mrlje i metalni okus',
          title: 'Željezo i mangan',
          cause:
            'Česti u bunarskoj i podzemnoj vodi. Voda iz slavine može biti bistra, a nakon stajanja požuti i ostavlja hrđaste ili crne mrlje na sanitarijama i rublju.',
          limit: 'MDK za željezo je 200 µg/l, a za mangan 50 µg/l (indikatorski parametri).',
          fixes: [
            'Oksidacija i filtracija kroz katalitičku ispunu',
            'Aeracija za veće koncentracije',
            'Kloriranje ili ozon prije filtra kad su prisutne i bakterije željeza',
          ],
          help: 'Uz željezo provjerim pH, kisik i amonij. O njima ovisi koja će metoda raditi, pa ne kupujete filtar koji se začepi za mjesec dana.',
        },
        {
          id: 'miris',
          label: 'Miris po pokvarenim jajima ili kloru',
          title: 'Sumporovodik ili nusprodukti dezinfekcije',
          cause:
            'Miris po jajima obično je sumporovodik iz podzemne vode ili bakterije u bojleru. Izražen okus klora potječe od dezinfekcije u javnoj vodoopskrbi.',
          limit: 'Miris i okus moraju biti prihvatljivi potrošačima i bez neuobičajenih promjena.',
          fixes: [
            'Aeracija ili oksidacija sumporovodika',
            'Filtar s aktivnim ugljenom na mjestu potrošnje',
            'Dezinfekcija i servis bojlera kad miris dolazi samo iz tople vode',
          ],
          help: 'Utvrdim dolazi li miris iz izvora, mreže ili bojlera. Ako je samo u toploj vodi, filtar na ulazu ga neće ukloniti.',
        },
        {
          id: 'bunar',
          label: 'Imam vlastiti bunar ili izvor',
          title: 'Bakterije i nitrati u bunaru',
          cause:
            'Bunari su izloženi oborinskoj vodi, septičkim jamama i gnojidbi. Nakon jakih kiša ili poplava mikrobiološka kvaliteta se može naglo pogoršati.',
          limit: 'E. coli i enterokoki: 0 u 100 ml. Nitrati: 50 mg/l, nitriti: 0,50 mg/l.',
          fixes: [
            'Zaštita glave bunara i udaljenost od izvora onečišćenja',
            'UV dezinfekcija s predfiltracijom',
            'Selektivna ionska izmjena ili reverzna osmoza za nitrate',
          ],
          help: 'Sastavim plan uzorkovanja, protumačim nalaz laboratorija i predložim redoslijed obrade. UV uređaj ne radi ako je voda mutna ili puna željeza.',
        },
        {
          id: 'arsen',
          label: 'Arsen u vodi',
          title: 'Prirodni arsen u podzemnoj vodi',
          cause:
            'U istočnoj Slavoniji arsen prirodno potječe iz stijena i tla vodonosnika. Nema boje, okusa ni mirisa, pa se otkriva samo analizom.',
          limit: 'MDK za arsen je 10 µg/l.',
          fixes: [
            'Adsorpcija na ispunama na bazi željeza',
            'Reverzna osmoza za vodu za piće i kuhanje',
            'Priključak na javnu vodoopskrbu gdje je dostupna',
          ],
          help: 'Pomažem odabrati između adsorpcije i reverzne osmoze, odrediti kad mijenjati ispunu i provjeriti radi li uređaj nakon ugradnje.',
        },
        {
          id: 'legionela',
          label: 'Apartmani, hoteli i topla voda',
          title: 'Legionella u sustavima tople vode',
          cause:
            'Legionella se razmnožava u vodi od 25 do 50 °C, u bojlerima, rijetko korištenim tušama i dugim cijevima. Prenosi se udisanjem kapljica pod tušem.',
          limit: 'U objektima od javnozdravstvenog interesa: manje od 1 000 CFU/l na mjestu potrošnje (NN 64/2023).',
          fixes: [
            'Topla voda iznad 60 °C u spremniku i barem 50 °C na slavinama',
            'Redovito ispiranje rijetko korištenih izljeva',
            'Termička ili kemijska dezinfekcija i uklanjanje slijepih vodova',
          ],
          help: 'Izradim procjenu rizika unutarnje mreže, plan uzorkovanja i upute za osoblje, i pripremim dokumentaciju za inspekciju prije sezone.',
        },
      ],
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
      title: 'Ivan Deotto – water treatment consultant',
      description:
        'Water analysis, treatment system selection, private wells, limescale, iron, arsenic and Legionella. Consulting for homes, tourism, hospitality and industry in Croatia.',
    },
    skip: 'Skip to content',
    nav: { problems: 'Problems', services: 'Services', process: 'How I work', rules: 'Regulations', faq: 'FAQ', contact: 'Contact' },
    langSwitch: { label: 'Language', other: 'HR', otherName: 'Hrvatski' },
    hero: {
      name: 'Ivan Deotto',
      role: 'water treatment consultant',
      headline: 'Find out what is in your water. Then choose the equipment.',
      lede:
        'I help households, holiday rental owners, restaurants and companies read their water analysis and choose treatment that solves the actual problem, without buying equipment they do not need.',
      ctaPrimary: 'Book a water assessment',
      ctaSecondary: 'Find your water problem',
      sheetTitle: 'Example well water analysis',
      sheetSource: 'eastern Slavonia',
      sheetLimit: 'limit',
      sheetOver: 'over the limit',
      sheetOk: 'within limit',
      sheetNote: 'Illustrative values. Limits from Croatian regulation NN 64/2023.',
      rows: [
        { name: 'Arsenic', value: 24, limit: 10, unit: 'µg/l' },
        { name: 'Iron', value: 340, limit: 200, unit: 'µg/l' },
        { name: 'Manganese', value: 31, limit: 50, unit: 'µg/l' },
        { name: 'Nitrate', value: 18, limit: 50, unit: 'mg/l' },
      ],
    },
    problems: {
      heading: 'What are you noticing in your water?',
      intro: 'Pick what is bothering you. You will see the most likely cause, what the regulation says and which kinds of treatment can help.',
      causeLabel: 'Most likely cause',
      limitLabel: 'What the regulation says',
      fixesLabel: 'Possible solutions',
      helpLabel: 'How I help',
      items: [
        {
          id: 'limescale',
          label: 'Limescale on taps and appliances',
          title: 'Hard water',
          cause:
            'Calcium and magnesium dissolved from limestone. Much of Croatia, especially the karst and the Pannonian plain, has hard water. Scale shortens the life of water heaters, washing machines and coffee machines and raises energy use.',
          limit: 'Hardness is not a health issue and has no legal maximum. It is assessed against World Health Organization guidance.',
          fixes: ['Ion-exchange softener for the whole house or hot water only', 'Partial softening so the water keeps some minerals', 'Anti-scale dosing for water heaters and boilers'],
          help: 'I measure hardness and consumption, size the softener and make sure the water is not over-softened, because very soft water corrodes pipes.',
        },
        {
          id: 'iron',
          label: 'Brown stains and a metallic taste',
          title: 'Iron and manganese',
          cause:
            'Common in well and groundwater. Water can come out clear, then turn yellow after standing and leave rust or black stains on sanitary ware and laundry.',
          limit: 'Limit is 200 µg/l for iron and 50 µg/l for manganese (indicator parameters).',
          fixes: ['Oxidation and filtration through catalytic media', 'Aeration for higher concentrations', 'Chlorine or ozone before the filter when iron bacteria are present'],
          help: 'Along with iron I check pH, oxygen and ammonium. They decide which method will work, so you do not buy a filter that clogs within a month.',
        },
        {
          id: 'odour',
          label: 'Smell of rotten eggs or chlorine',
          title: 'Hydrogen sulphide or disinfection by-products',
          cause:
            'A rotten egg smell is usually hydrogen sulphide from groundwater or bacteria in the water heater. A strong chlorine taste comes from disinfection in the public supply.',
          limit: 'Odour and taste must be acceptable to consumers with no abnormal change.',
          fixes: ['Aeration or oxidation of hydrogen sulphide', 'Activated carbon filter at the point of use', 'Disinfecting and servicing the water heater when only hot water smells'],
          help: 'I find out whether the smell comes from the source, the pipes or the heater. If it is only in hot water, a filter on the inlet will not remove it.',
        },
        {
          id: 'well',
          label: 'I have my own well or spring',
          title: 'Bacteria and nitrate in wells',
          cause:
            'Wells are exposed to surface runoff, septic tanks and fertiliser. After heavy rain or flooding the microbiological quality can drop sharply.',
          limit: 'E. coli and enterococci: 0 per 100 ml. Nitrate: 50 mg/l, nitrite: 0.50 mg/l.',
          fixes: ['Protecting the wellhead and distance from pollution sources', 'UV disinfection with pre-filtration', 'Nitrate-selective ion exchange or reverse osmosis'],
          help: 'I put together a sampling plan, interpret the lab report and propose the order of treatment steps. A UV unit does not work if the water is cloudy or full of iron.',
        },
        {
          id: 'arsenic',
          label: 'Arsenic in water',
          title: 'Natural arsenic in groundwater',
          cause:
            'In eastern Slavonia arsenic comes naturally from the rocks and soil of the aquifer. It has no colour, taste or smell, so only an analysis can detect it.',
          limit: 'Limit for arsenic is 10 µg/l.',
          fixes: ['Adsorption on iron-based media', 'Reverse osmosis for drinking and cooking water', 'Connection to the public supply where available'],
          help: 'I help you choose between adsorption and reverse osmosis, set a media replacement schedule and check that the system works after installation.',
        },
        {
          id: 'legionella',
          label: 'Holiday rentals, hotels and hot water',
          title: 'Legionella in hot water systems',
          cause:
            'Legionella multiplies in water between 25 and 50 °C: in water heaters, rarely used showers and long pipe runs. It spreads by inhaling droplets in the shower.',
          limit: 'In premises of public health interest: below 1,000 CFU/l at the tap (NN 64/2023).',
          fixes: ['Hot water above 60 °C in the tank and at least 50 °C at the taps', 'Regular flushing of rarely used outlets', 'Thermal or chemical disinfection and removing dead legs'],
          help: 'I prepare a risk assessment of the building’s pipework, a sampling plan and staff instructions, and get your documentation ready for inspection before the season.',
        },
      ],
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
