import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

export const getAllPosts = async (): Promise<CollectionEntry<'blog'>[]> => {
  const posts = await getCollection('blog', ({ data }) => {
    // Exclude draft posts in production
    return import.meta.env.PROD ? !data.draft : true;
  });

  // Sort by publish date, newest first
  return posts.sort((a, b) => {
    return b.data.publishDate.getTime() - a.data.publishDate.getTime();
  });
};

export const getPostBySlug = async (slug: string): Promise<CollectionEntry<'blog'> | undefined> => {
  const posts = await getAllPosts();
  return posts.find((post) => post.slug === slug);
};

export const getPostsByTag = async (tag: string): Promise<CollectionEntry<'blog'>[]> => {
  const posts = await getAllPosts();
  return posts.filter((post) => post.data.tags.includes(tag));
};

export const getPostUrl = (slug: string): string => {
  return `/blog/${slug}`;
};
