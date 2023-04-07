import { useRef, useEffect } from "react";
import { usePost, usePosts } from "../../context/PostProvider";
import { useParams } from "react-router-dom";
import "./PostDetail.css";
import { getUserById } from "../../services/users";

export const PostDetail = () => {
  const { id } = useParams();
  const posts = usePosts();
  const post = usePost(id);
  const link = useRef();

  // useEffect(() => {
  //   link.current.focus();
  // }, []);

  // const post = usePost(id);
  console.log(
    `*** 17` +
      posts.find(
        (post) =>
          post.id === id &&
          console.log(`*** 51 post ==> ` + JSON.stringify(post))
      )
  );
  console.log(`*** post ==> ` + JSON.stringify(post));
  // const { title, content, author } = usePost(id);
  // console.log(`*** title, content, author ==> ` + title, content, author);

  // const findAuthor = getUserById(author);
  // console.log(`*** findAuthor ==> ` + findAuthor);

  return (
    <div className="post-container">
      {/* <h1>{post?.title}</h1>
      <p>{post?.content}</p>
      <p>{post?.author}</p> */}
    </div>
  );
};
