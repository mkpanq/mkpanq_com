import fs from "fs";
import path from "node:path";
import { POSTS_FOLDER_PATH } from "@/app/blog/_lib/helpers/constants";
import { Post, PostMetadata } from "@/app/blog/_lib/post.type";
import matter from "gray-matter";

export function postMarkdownFileParser(fileName: string): Post | {} {
  const dataBuffer = getDataBuffer(fileName);

  const slug = parseSlug(fileName);
  try {
    const parsedDataBuffer = matter(dataBuffer);

    const metadata: PostMetadata = parseMetadata(parsedDataBuffer);
    const content = parsedDataBuffer.content;

    return {
      slug: slug,
      content: content,
      metadata: metadata,
    };
  } catch (error) {
    console.error(`Error while parsing file ${fileName}: ${error}`);
    return {};
  }
}

function parseMetadata(
  parsedBuffer: matter.GrayMatterFile<string>,
): PostMetadata {
  const rawMetadata = parsedBuffer.data;

  return {
    publishDate: new Date(rawMetadata.date).toLocaleDateString("en-gb", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
    }),
    title: rawMetadata.title,
    description: rawMetadata.description || "",
    tags: rawMetadata.tags || [],
  };
}

function parseSlug(fileName: string): string {
  return fileName.split(".")[0];
}

function getDataBuffer(fileName: string): string {
  return fs.readFileSync(path.join(POSTS_FOLDER_PATH, fileName), "utf-8");
}
