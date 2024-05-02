import { Post } from "@/lib/posts/post";
import { remark } from "remark";
import html from "remark-html";

export default async function PostPageContent({
  postContent,
}: {
  postContent: Post["content"];
}) {
  const htmlData = await convertMarkdownToHTML(postContent);
  return (
    <div
      dangerouslySetInnerHTML={htmlData}
      className="
        py-5
        prose
        prose-california
        max-w-none
        leading-loose max-sm:leading-relaxed
        text-base max-sm:text-sm
        text-justify text-wrap"
    />
  );
}

async function convertMarkdownToHTML(postContent: Post["content"]) {
  const processedContent = await remark().use(html).process(postContent);
  return { __html: processedContent.toString() };
}
