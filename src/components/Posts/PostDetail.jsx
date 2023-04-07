import { usePost } from "../../context/PostProvider";
import { useParams } from "react-router-dom";
import "./PostDetail.css";
import { getUserById } from "../../services/users";

export const PostDetail = (post) => {
  const { id } = useParams();
  console.log(`*** id ==> ` + id);

  // const post = usePost(id);
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
