import { usePost } from "../../context/PostProvider";
import { useParams } from "react-router-dom";

export const PostDetail = () => {
  const { id } = useParams();

  const post = usePost(id);
  console.log(`*** post ==> ` + JSON.stringify(post));

  return <>peepeepoopoo</>;
};
