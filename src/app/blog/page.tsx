import getPostsList from "@/lib/posts/getPostsList";
import { Post } from "@/lib/posts/post";
import PageTitle from "@/components/shared/pageTitle";
import PostsList from "@/app/blog/components/postList";
import PageContentBox from "@/components/shared/pageContentBox";
import { Metadata } from "next";
import staticPageMetadata from "@/lib/staticSeo";

const PAGE_NAME = "Blog ✍️";

export const metadata: Metadata = staticPageMetadata("Blog");

export default function BlogPage() {
  const allPostsList: Post[] = getPostsList();

  return (
    <PageContentBox>
      <PageTitle title={PAGE_NAME} />
      <PostsList allPostsList={allPostsList} />
    </PageContentBox>
  );
}
