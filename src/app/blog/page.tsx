import getPostsList from "@/lib/posts/getPostsList";
import { Post } from "@/lib/posts/post";
import PageTitle from "@/components/shared/pageTitle";
import PostsList from "@/app/blog/components/postList";
import PageContentBox from "@/components/shared/pageContentBox";
import { Metadata } from "next";

// TODO: Removing ?
const PAGE_NAME = "Blog ✍️";

export const metadata: Metadata = {
  title: "Blog | mkpanq.com | Marek Pankowski",
  description: "Blog | mkpanq.com - Marek Pankowski's personal page",
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
    url: "https://mkpanq.com/blog",
    type: "website",
    title: "Blog | mkpanq.com | Marek Pankowski",
    description: "Blog | mkpanq.com - Marek Pankowski's personal page",
    images: [
      {
        url: "https://dynamic-og-image-generator.vercel.app/api/generate?title=Blog&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl",
        width: 1200,
        height: 630,
        alt: "mkpanq.com/blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | mkpanq.com | Marek Pankowski",
    description: "Blog | mkpanq.com - Marek Pankowski's personal page",
    creator: "@mkpanq",
    site: "@mkpanq",
    images: [
      {
        url: "https://dynamic-og-image-generator.vercel.app/api/generate?title=Blog&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl",
        width: 1200,
        height: 630,
        alt: "mkpanq.com/blog",
      },
    ],
  },
  alternates: {
    canonical: "https://mkpanq.com/blog",
  },
};

export default function BlogPage() {
  const allPostsList: Post[] = getPostsList();

  return (
    <PageContentBox>
      <PageTitle title={PAGE_NAME} />
      <PostsList allPostsList={allPostsList} />
    </PageContentBox>
  );
}
