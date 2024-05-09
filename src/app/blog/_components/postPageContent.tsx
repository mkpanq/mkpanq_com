import { Post, PostMetadata } from "@/app/blog/_lib/post.type";
import convertMarkdownToHTML from "@/app/blog/_lib/helpers/contentTransformer";

export default async function PostPageContent({
  description,
  postContent,
}: {
  description: PostMetadata["description"];
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
