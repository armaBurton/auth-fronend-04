import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function Posts({ posts, currentSelected }) {
  const focused = useRef();
  console.log(
    "*** -6 -Posts.js *** JSON.stringify(posts) ==> ",
    JSON.stringify(posts)
  );
  useEffect(() => {
    focused?.current?.focus();
  }, [currentSelected]);

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            to={`/posts/${post.id} {...{ref: currentSelected=== post.id ? focused: null}}`}
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
