import fs from "fs";
import { POSTS_FOLDER_PATH } from "@/lib/posts/helpers/constants";

export function getAllPostsFilenames(): string[] {
  try {
    checkPostsFolderPathExistence();
    return fs.readdirSync(POSTS_FOLDER_PATH);
  } catch (error) {
    console.error(error);
    return [];
  }
}

function checkPostsFolderPathExistence() {
  if (!fs.existsSync(POSTS_FOLDER_PATH))
    throw `${POSTS_FOLDER_PATH} is not proper path for posts data`;
}
