import { usePost } from "../../context/PostProvider";
import { useParams } from "react-router-dom";
import "./PostDetail.css";

export const PostDetail = () => {
  const { id } = useParams();

  // const post = usePost(id);
  const { title, content, author } = usePost(id);
  console.log(`*** title, content, author ==> ` + title, content, author);

  return (
    <div className="post-container">
      <h1>{title}</h1>
      <p>{content}</p>
      <p>{author}</p>
    </div>
  );
};
