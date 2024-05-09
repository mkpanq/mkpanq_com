import PostListElement from "@/app/blog/_components/postListElement";
import { Post } from "@/app/blog/_lib/post.type";

export default function PostsList({ allPostsList }: { allPostsList: Post[] }) {
  return (
    <div className="my-5">
      <ul className="py-5 space-y-4">
        {allPostsList.map((post) => (
          <li key={post.slug}>
            <PostListElement post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
