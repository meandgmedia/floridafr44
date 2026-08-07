import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Florida FR44 Auto Insurance Team'),
    image: z.string().default('/images/blog/default.svg'),
    imageAlt: z.string().default('Florida FR44 Auto Insurance'),
    category: z.string().default('FR44 Insurance'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    image: z.string().default('/images/guides/default.svg'),
    imageAlt: z.string().default('Florida FR44 Auto Insurance guide'),
    readTime: z.string().default('8 min read'),
  }),
});

export const collections = { blog, guides };
