import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getPosts } from "../services/posts";
import { renderView } from "../utils/renderView";

const PostsContext = createContext();

export const PostsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts()
      .then(setPosts)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const state = useMemo(
    () => ({ error, loading, posts }),
    [error, loading, posts]
  );

  return (
    <PostsContext.Provider value={state}>
      {renderView({ ...state, children })}
    </PostsContext.Provider>
  );
};

export const usePosts = () => {
  const context = useContext(PostsContext);

  if (context === undefined)
    throw new Error("usePosts must be used withing a PostsProvider");

  return context.posts;
};

export const usePost = (id) => {
  const context = useContext(PostsContext);
  const numId = Number(id.id);
  console.log(`*** numId ==> ` + numId);

  if (context === undefined)
    throw new Error("usePost must be used withing a PostsProvider");

  const posts = context.posts;

  posts.find((post) => {
    if (post.id === Number(numId)) {
      console.log(`*** JSON.stringify(post) ==> ` + JSON.stringify(post.title));
      return post;
    }
    console.log("did not find");
    return null;
  });

  return context.posts.find((post) => post.id === JSON.stringify(id));
};
