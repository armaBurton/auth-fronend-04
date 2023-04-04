import Posts from "../../components/Posts/Posts";
import { usePosts } from "../../context/PostProvider";

import { useCurrentUser } from "../../context/UserProvider";
import { Navigate, useLocation } from "react-router-dom";
import "./Main.css";

export const Main = () => {
  const user = useCurrentUser();
  const posts = usePosts();
  const location = useLocation();

  if (!posts.length) return "No posts found.";

  return (
    <section className="main-section">
      {/* {user.status === 401 ? user.message : <Navigate to={"/hidden"} />} */}
      {user.status === 401 ? (
        user.message
      ) : (
        <Posts posts={posts} currentSelected={location.state?.from} />
      )}
    </section>
  );
};
