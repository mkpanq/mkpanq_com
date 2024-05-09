import { Metadata } from "next";
import { getAllPosts } from "@/app/blog/_lib/post.service";
import PageContentBox from "@/components/shared/pageContentBox";
import PageTitle from "@/components/shared/pageTitle";
import { Post } from "@/app/blog/_lib/post.type";
import PostPageContent from "@/app/blog/_components/postPageContent";
import generatePostMetadata from "@/app/blog/_lib/post.seo";

type PageProps = {
  params: { slug: string };
};

const allPostsData = getAllPosts();
const getPostBySlug = (slug: string) =>
  allPostsData.find((post) => post.slug === slug) as Post;

// Generate static routes for each blog post
export const dynamicParams = false;
export function generateStaticParams(): { slug: string }[] {
  return allPostsData.map((post) => ({ slug: post.slug }));
}

// TODO: Think about adding JSON-LD to post, blog and author pages
// Generate metadata for each blog post
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const blogPost: Post = getPostBySlug(params.slug);

  return generatePostMetadata(blogPost);
}

export default function PostPage({ params }: PageProps) {
  const post: Post = getPostBySlug(params.slug);

  return (
    <PageContentBox>
      <PageTitle
        title={post.metadata.title}
        subtitle={post.metadata.publishDate}
      />
      <PostPageContent postContent={post.content} />
    </PageContentBox>
  );
}
