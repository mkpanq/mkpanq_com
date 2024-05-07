import getPostsList from "@/lib/posts/getPostsList";
import { Post } from "@/lib/posts/post";
import PageTitle from "@/components/shared/pageTitle";
import PostPageContent from "@/app/blog/components/postPage";
import PageContentBox from "@/components/shared/pageContentBox";
import { Metadata } from "next";

type Props = {
  params: { slug: string };
};

// Generate static routes for each blog post
export const dynamicParams = false;
export function generateStaticParams(): { slug: string }[] {
  const postData = getPostsList();
  return postData.map((post) => ({ slug: post.slug }));
}

// Generate metadata for each blog post
// TODO: Remember to add this when unifying data and adding keywords for Post model
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blogPost: Post = findBlogPost(params.slug);

  return {
    title: `${blogPost.data.title} | mkpanq.com`,
    authors: [
      {
        name: "Marek Pankowski",
      },
    ],
    openGraph: {
      title: `${blogPost.data.title} | mkpanq.com`,
      type: "article",
      url: `https://mkpanq.com/blog/${blogPost.slug}`,
      publishedTime: blogPost.data.date,
      authors: ["https://mkpanq.com/about"],
      images: [
        {
          url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=${blogPost.data.title}&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2Fblog%2F${blogPost.slug}&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl`,
          width: 1200,
          height: 630,
          alt: `mkpanq.com/blog/${blogPost.slug}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@mkpanq",
      creator: "@mkpanq",
      title: `${blogPost.data.title} | mkpanq.com`,
      images: [
        {
          url: `https://dynamic-og-image-generator.vercel.app/api/generate?title=${blogPost.data.title}&author=Marek+Pankowski&websiteUrl=https%3A%2F%2Fmkpanq.com%2Fblog%2F${blogPost.slug}&avatar=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F17934750&theme=nightOwl`,
          width: 1200,
          height: 630,
          alt: `mkpanq.com/blog/${blogPost.slug}`,
        },
      ],
    },
    alternates: {
      canonical: `https://mkpanq.com/blog/${blogPost.slug}`,
    },
  };
}

export default function PostPage({ params }: Props) {
  const blogPost: Post = findBlogPost(params.slug);

  return (
    <PageContentBox>
      <PageTitle title={blogPost.data.title} subtitle={blogPost.data.date} />
      <PostPageContent postContent={blogPost.content} />
    </PageContentBox>
  );
}

function findBlogPost(slug: string): Post {
  return getPostsList().find((post) => post.slug === slug) as Post;
}
