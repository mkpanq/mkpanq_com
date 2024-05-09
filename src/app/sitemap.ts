import { MetadataRoute } from "next";
import { getAllPosts } from "@/app/blog/_lib/post.service";
import { Post } from "@/app/blog/_lib/post.type";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: "https://mkpanq.com",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://mkpanq.com/now",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://mkpanq.com/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: "https://mkpanq.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = getAllPosts().map((post: Post) => ({
    url: `https://mkpanq.com/blog/${post.slug}`,
    lastModified: post.metadata.publishDate,
    changeFrequency: "daily",
    priority: 0.6,
  }));

  return [...staticPages, ...blogPosts];
}
