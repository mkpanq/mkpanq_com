import { Metadata } from "next";

export default function staticPageMetadata(pageTitle: string): Metadata {
  const pageName =
    pageTitle[0].toUpperCase() + pageTitle.slice(1).toLowerCase();
  const pageUrl = pageName === "Home" ? "" : pageName.toLowerCase();

  return {
    title: `${pageName} | mkpanq.com | Marek Pankowski`,
    description: `${pageName} | mkpanq.com - Marek Pankowski's personal page`,
    keywords: [
      "marek",
      "pankowski",
      "marek pankowski",
      "mkpanq",
      "mkpanq.com",
      "panq",
      "panq digital",
      "digital",
    ],
    openGraph: {
      url: `https://mkpanq.com/${pageUrl}`,
      type: "website",
      title: `${pageName} | mkpanq.com | Marek Pankowski`,
      description: `${pageName} | mkpanq.com - Marek Pankowski's personal page`,
      images: [
        {
          url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=${pageName}&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl`,
          width: 1200,
          height: 630,
          alt: `mkpanq.com/${pageUrl}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${pageName} | mkpanq.com | Marek Pankowski`,
      description: `${pageName} | mkpanq.com - Marek Pankowski's personal page`,
      creator: "@mkpanq",
      site: "@mkpanq",
      images: [
        {
          url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=${pageName}&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl`,
          width: 1200,
          height: 630,
          alt: `mkpanq.com/blog/${pageUrl}`,
        },
      ],
    },
    alternates: {
      canonical: `https://mkpanq.com/${pageUrl}`,
    },
  };
}
