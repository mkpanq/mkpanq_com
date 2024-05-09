import { getAllPostsFilenames } from "@/lib/posts/helpers/filenamesGetter";
import { Post } from "@/lib/posts/post.type";
import { postMarkdownFileParser } from "@/lib/posts/helpers/fileParser";

export function getAllPosts(): Post[] {
  const postsFilenames: string[] = getAllPostsFilenames();
  return postsFilenames
    .map((filename) => postMarkdownFileParser(filename))
    .filter((post) => Object.keys(post).length !== 0) as Post[];
}
