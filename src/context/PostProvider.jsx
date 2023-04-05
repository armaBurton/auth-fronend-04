import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getPosts } from "../services/posts";
import { renderView } from "../utils/renderView";
import { getUserById } from "../services/users";

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

export const usePost = async (id) => {
  const context = useContext(PostsContext);

  if (context === undefined)
    throw new Error("usePost must be used withing a PostsProvider");
  console.log(`*** id ==> ` + id);
  const author = await getUserById(id);
  console.log(`*** author ==> ` + JSON.stringify(author));

  return context.posts.find((post) => post.id === id);
};
