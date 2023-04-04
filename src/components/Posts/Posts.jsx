import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

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
        <li key={post.id} className="list-element">
          <Link
            className="link-decoration"
            to={`/posts/${post.id} `}
            // to={`/posts/${post.id} {...{ref: currentSelected=== post.id ? focused: null}}`}
          >
            <p className="post-title">{post.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}
