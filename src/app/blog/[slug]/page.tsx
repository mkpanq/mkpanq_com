import getPostsList from "@/lib/posts/getPostsList";
import { Post } from "@/lib/posts/post";
import PageTitle from "@/components/shared/pageTitle";
import PostPageContent from "@/app/blog/components/postPage";
import PageContentBox from "@/components/shared/pageContentBox";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  const postData = getPostsList();
  return postData.map((post) => ({ slug: post.slug }));
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post: Post = getPostsList().find((post) => post.slug === slug) as Post;

  return (
    <PageContentBox>
      <PageTitle title={post.data.title} subtitle={post.data.date} />
      <PostPageContent postContent={post.content} />
    </PageContentBox>
  );
}
