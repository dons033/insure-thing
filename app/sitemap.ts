import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routeConfig = [
    { path: "", changeFrequency: "monthly" as const, priority: 1 },
    { path: "/about", changeFrequency: "yearly" as const, priority: 0.8 },
    { path: "/services", changeFrequency: "monthly" as const, priority: 0.9 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.8 },
    { path: "/labs", changeFrequency: "monthly" as const, priority: 0.9 },
    {
      path: "/labs/wc-underwriting",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    { path: "/contact", changeFrequency: "yearly" as const, priority: 0.7 },
  ];

  const routes: MetadataRoute.Sitemap = routeConfig.map(
    ({ path, changeFrequency, priority }) => ({
    url: `${base}${path}`,
    changeFrequency,
    priority,
    }),
  );

  const posts = getAllPosts().map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.frontmatter.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...posts];
}
