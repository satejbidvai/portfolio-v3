import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1).max(200),
    publishDate: z.coerce.date(),
    tags: z.array(z.string().min(1)).default([]),
    draft: z.boolean().default(false),
    ogImage: z.string(),
    canonicalURL: z.string().url().optional() // Only needed if re-posting a blog from another source
  })
});

export const collections = {
  blog
};
