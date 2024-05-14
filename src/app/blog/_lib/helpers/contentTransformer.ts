import { Post } from "@/app/blog/_lib/post.type";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify";
import rehypeClassNames from "rehype-class-names";

export default async function convertMarkdownToHTML(
  postContent: Post["content"],
): Promise<{ __html: string }> {
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: "_blank" })
    .use(rehypeClassNames, {
      img: "mx-auto",
    })
    .use(rehypeStringify)
    .process(postContent);
  return { __html: processedContent.toString() };
}
