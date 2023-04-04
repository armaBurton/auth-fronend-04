import { usePost } from "../../context/PostProvider";
import { useParams } from "react-router-dom";

export const PostDetail = () => {
  const id = useParams();
  // const id = JSON.stringify(useParams());
  const post = usePost(id);
  return <>peepeepoopoo</>;
};
