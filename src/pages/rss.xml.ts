import rss from '@astrojs/rss';
import { getAllPosts, getPostUrl } from '../utils/blog';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const posts = await getAllPosts();

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: getPostUrl(post.slug),
      categories: post.data.tags.length > 0 ? post.data.tags : undefined
    })),
    customData: `<language>en-us</language>`
  });
}
