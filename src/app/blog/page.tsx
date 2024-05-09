import PageTitle from "@/components/shared/pageTitle";
import PostsList from "@/app/blog/_components/postList";
import PageContentBox from "@/components/shared/pageContentBox";
import { Metadata } from "next";
import staticPageMetadata from "@/lib/staticSeo";
import { Post } from "@/app/blog/_lib/post.type";
import { getAllPosts } from "@/app/blog/_lib/post.service";

const PAGE_NAME = "Blog ✍️";

export const metadata: Metadata = staticPageMetadata("Blog");

export default function BlogPage() {
  const allPostsList: Post[] = getAllPosts();

  return (
    <PageContentBox>
      <PageTitle title={PAGE_NAME} />
      <PostsList allPostsList={allPostsList} />
    </PageContentBox>
  );
}
