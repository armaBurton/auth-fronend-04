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
