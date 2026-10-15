// Content the client edits through the CMS (public/admin/config.yml).
// Every collection keeps one folder per language: src/content/<collection>/<lang>/<slug>.md.
// The slug (file name) is the same in every language, so pages link up across languages.
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const md = (folder: string) => glob({ pattern: '**/*.md', base: `./src/content/${folder}` });

const services = defineCollection({
  loader: md('services'),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    intro: z.string(),
    included: z.array(z.string()),
    systems: z.array(z.string()),
    standards: z.array(z.string()).default([]),
    description: z.string(),
  }),
});

const industries = defineCollection({
  loader: md('industries'),
  schema: z.object({
    title: z.string(),
    order: z.number(),
    // The lead sector has its own page (/data-centers/) instead of an industry detail page.
    lead: z.boolean().default(false),
    intro: z.string(),
    systems: z.array(z.string()),
    help: z.array(z.string()),
    description: z.string(),
  }),
});

const references = defineCollection({
  loader: md('references'),
  schema: z.object({
    // Descriptive title, safe to publish without the client's permission.
    title: z.string(),
    // Real project / client name. Shown only once showClient is true.
    client: z.string().optional(),
    showClient: z.boolean().default(false),
    order: z.number(),
    featured: z.boolean().default(false),
    location: z.string(),
    facility: z.string(),
    keyFigure: z.string(),
    scope: z.array(z.string()),
    industry: z.string(),
    services: z.array(z.string()).default([]),
    year: z.string().optional(),
    status: z.enum(['completed', 'ongoing']).optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    challenge: z.string(),
    ourScope: z.string(),
    result: z.string(),
    source: z.object({ label: z.string(), url: z.string().optional() }).optional(),
    description: z.string(),
  }),
});

const pages = defineCollection({
  loader: md('pages'),
  schema: z.object({
    title: z.string(),
    lede: z.string().optional(),
    description: z.string(),
  }),
});

export const collections = { services, industries, references, pages };
