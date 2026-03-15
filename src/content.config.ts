import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(200),
    publishDate: z.coerce.date(),
    tags: z.array(z.string().min(1)).default([]),
    draft: z.boolean().default(false),
    ogImage: z.string(),
    canonicalURL: z.url().optional() // Only needed if re-posting a blog from another source
  })
});

export const collections = { blog };
