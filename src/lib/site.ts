import type { ImageMetadata } from 'astro';
import { getCollection } from 'astro:content';
import { langs, type Lang } from '../i18n/ui';

export const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

/** Site-relative URL for a page, e.g. link('en', 'services', slug) -> /en/services/<slug>/ */
export const link = (lang: Lang, ...parts: string[]) => `${base}${[lang, ...parts].filter(Boolean).join('/')}/`;

/** JSON-LD id of the company, referenced from page-level structured data. */
export const orgId = (site: URL) => `${new URL(base, site).href}#org`;

export const langPaths =() => langs.map((lang) => ({ params: { lang } }));

// Entry ids look like "en/water-analysis": language folder, then the slug.
const slugOf = (id: string) => id.split('/').slice(1).join('/');
const inLang = (lang: Lang) => ({ id }: { id: string }) => id.startsWith(`${lang}/`);
const withSlug = <T extends { id: string; data: { order: number } }>(list: T[]) =>
  list.map((e) => ({ ...e, slug: slugOf(e.id) })).sort((a, b) => a.data.order - b.data.order);

export const getServices = async (lang: Lang) => withSlug(await getCollection('services', inLang(lang)));
export const getIndustries = async (lang: Lang) => withSlug(await getCollection('industries', inLang(lang)));
export const getReferences = async (lang: Lang) => withSlug(await getCollection('references', inLang(lang)));
export const getPage = async (lang: Lang, slug: string) =>
  (await getCollection('pages', ({ id }) => id === `${lang}/${slug}`))[0];

export type Service = Awaited<ReturnType<typeof getServices>>[number];
export type Industry = Awaited<ReturnType<typeof getIndustries>>[number];
export type Reference = Awaited<ReturnType<typeof getReferences>>[number];

/** The lead industry (data centers) has its own top-level page. */
export const industryLink = (lang: Lang, i: Industry) => (i.data.lead ? link(lang, 'data-centers') : link(lang, 'industries', i.slug));

/** Name shown for a reference: the client's name only once they have given permission. */
export const refName = (r: Reference) => (r.data.showClient && r.data.client ? r.data.client : r.data.title);

// Photos uploaded through the CMS land in src/assets/uploads and are stored as
// "/src/assets/uploads/<file>". Resolve them so Astro can resize and compress them.
const uploads = import.meta.glob<{ default: ImageMetadata }>('/src/assets/uploads/*.{jpg,jpeg,png,webp,avif}', { eager: true });
export const uploadedImage = (path?: string) => (path ? uploads[`/src/assets/uploads/${path.split('/').pop()}`]?.default : undefined);

/** Split plain multi-line CMS text into paragraphs. */
export const paragraphs = (text: string) => text.split(/\n\s*\n/).map((p) => p.trim()).filter(Boolean);
