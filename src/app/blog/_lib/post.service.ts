import { getAllPostsFilenames } from "@/app/blog/_lib/helpers/filenamesGetter";
import { Post } from "@/app/blog/_lib/post.type";
import { postMarkdownFileParser } from "@/app/blog/_lib/helpers/fileParser";

export function getAllPosts(): Post[] {
  const postsFilenames: string[] = getAllPostsFilenames();
  const filteretPosts = postsFilenames
    .map((filename) => postMarkdownFileParser(filename))
    .filter((post) => Object.keys(post).length !== 0) as Post[];

  const sortedPosts = filteretPosts.sort((a, b) => {
    return (
      new Date(b.metadata.publishDate).getTime() -
      new Date(a.metadata.publishDate).getTime()
    );
  });

  return sortedPosts;
}
