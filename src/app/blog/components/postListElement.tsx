import { Post } from "@/lib/posts/post";
import Link from "next/link";

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
        <div className="w-full flex flex-col gap-2 text-sm sm:text-xl items-start px-2 sm:px-5">
          <span className="font-semibold">{post.data.title}</span>
          <span className="text-xs sm:text-sm font-thin">{post.data.date}</span>
        </div>
      </div>
    </Link>
  );
}
