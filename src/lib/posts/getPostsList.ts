import path from "node:path";
import * as fs from "fs";
import { Post } from "@/lib/posts/post";
import matter from "gray-matter";

const POSTS_FOLDER = "posts";
const POSTS_PATH = path.join(process.cwd(), POSTS_FOLDER);

export default function getPostsList(): Post[] {
  const postsFileNames = getPostsFileNames();
  if (!postsFileNames.length) return [];

  return postsFileNames.map((fileName) => parseSinglePostFile(fileName));
}

function parseSinglePostFile(postFileName: string): Post {
  const postPath = path.join(POSTS_PATH, postFileName);
  const postData = fs.readFileSync(postPath, "utf-8");

  // TODO: Move matter parsing to separate function + add error catching
  const postId = postFileName.split(".")[0];
  const postYAMLData = matter(postData).data;
  const postContent = matter(postData).content;

  return {
    slug: postId,
    data: {
      title: postYAMLData.title,
      date: postYAMLData.date,
    },
    content: matter(postContent).content,
  };
}

function getPostsFileNames() {
  try {
    checkPostsFolderExistence();
    return fs.readdirSync(POSTS_PATH);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function checkPostsFolderExistence() {
  if (!fs.existsSync(POSTS_PATH))
    throw `${POSTS_PATH} is not proper path for posts data`;
}
