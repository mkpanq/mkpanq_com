import {Post} from "@/lib/posts/post";
import PostListElement from "@/app/blog/components/postListElement";

export default function PostsList({allPostsList}: {allPostsList: Post[]}) {
  return <div className='my-5'>
    <ul className='py-5 space-y-4'>
      {
        allPostsList.map(post =>
          <li key={post.slug}>
            <PostListElement post={post}/>
          </li>
        )
      }
    </ul>
  </div>
}
