import Link from "next/link";
import { Post } from "@/app/blog/_lib/post.type";

export default function PostListElement({ post }: { post: Post }) {
  const postUrl = `/blog/${post.slug}`;

  return (
    <Link href={postUrl}>
      <div
        className="
       text-slate-200
       border border-california-100/50
       rounded-xl p-5
       hover:border-california-100 hover:shadow-lg hover:shadow-california-100/20"
      >
        <div className="w-full flex flex-col gap-2 items-start px-2 sm:px-5">
          <div className="w-full flex flex-col space-y-2 justify-between items-start sm:flex-row-reverse sm:items-center">
            <p className="text-xs sm:text-sm font-thin">
              {post.metadata.publishDate}
            </p>
            <p className="text-sm sm:text-xl font-semibold">
              {post.metadata.title}
            </p>
          </div>
          <p className="font-light max-sm:text-xs line-clamp-2">
            {post.metadata.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
