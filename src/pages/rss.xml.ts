import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config";

export async function GET(context: any) {
  const allPosts = await getCollection("blog");
  const sortedPosts = allPosts.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: SITE.title.en,
    description: SITE.description.en,
    site: context.site,
    items: sortedPosts.map((post) => {
      const lang = post.data.lang;
      const prefix = lang === SITE.defaultLang ? "" : `/${lang}`;
      return {
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `${prefix}/blog/${post.id}/`,
      };
    }),
  });
}
