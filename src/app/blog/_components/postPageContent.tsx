import { remark } from "remark";
import html from "remark-html";
import { Post } from "@/app/blog/_lib/post.type";

export default async function PostPageContent({
  description,
  postContent,
}: {
  description: Post["metadata"]["description"];
  postContent: Post["content"];
}) {
  const htmlData = await convertMarkdownToHTML(postContent);
  return (
    <>
      <p
        className="
          pt-5
          prose
          prose-california
          max-w-none
          leading-loose max-sm:leading-relaxed
          text-base max-sm:text-sm
          text-justify text-wrap italic"
      >
        {description}
      </p>
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
    </>
  );
}

async function convertMarkdownToHTML(postContent: Post["content"]) {
  const processedContent = await remark().use(html).process(postContent);
  return { __html: processedContent.toString() };
}
