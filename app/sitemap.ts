import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog";
import { siteConfig } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const routes = ["", "/about", "/services", "/blog", "/labs", "/contact"].map(
    (path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    }),
  );

  const posts = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
  }));

  return [...routes, ...posts];
}
