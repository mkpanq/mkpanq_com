import { Post } from "@/app/blog/_lib/post.type";
import { Metadata } from "next";

export default function generatePostMetadata(post: Post): Metadata {
  return {
    title: `${post.metadata.title} | mkpanq.com`,
    authors: [
      {
        name: "Marek Pankowski",
        url: "https://mkpanq.com/",
      },
    ],
    description: `${post.metadata.description || post.metadata.title} | mkpanq.com`,
    keywords: ["mkpanq.com", "Marek Pankowski", ...(post.metadata.tags || [])],
    creator: "Marek Pankowski",
    publisher: "Marek Pankowski",
    openGraph: {
      title: `${post.metadata.title} | mkpanq.com`,
      type: "article",
      url: `https://mkpanq.com/blog/${post.slug}`,
      publishedTime: `${post.metadata.publishDate}`,
      authors: ["https://mkpanq.com/"],
      images: [
        {
          url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=${post.metadata.title}&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2Fblog%2F${post.slug}&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl`,
          width: 1200,
          height: 630,
          alt: `mkpanq.com/blog/${post.slug}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@mkpanq",
      creator: "@mkpanq",
      title: `${post.metadata.title} | mkpanq.com`,
      images: [
        {
          url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=${post.metadata.title}&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2Fblog%2F${post.slug}&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl`,
          width: 1200,
          height: 630,
          alt: `mkpanq.com/blog/${post.slug}`,
        },
      ],
    },
    alternates: {
      canonical: `https://mkpanq.com/blog/${post.slug}`,
    },
  };
}
