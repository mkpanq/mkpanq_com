import getPostsList from "@/lib/posts/getPostsList";

export default function getPostsSlugs(): string[] {
  const postData = getPostsList();
  return postData.map((post) => post.slug);
}
