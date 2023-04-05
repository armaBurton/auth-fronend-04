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

  if (context === undefined)
    throw new Error("usePost must be used withing a PostsProvider");

  const posts = context.posts;

  const thisPost = posts.find((post) => {
    if (post.id === id) {
      const postJSON = {
        id: post.id,
        title: post.title,
        content: post.content,
        author: post.author,
      };

      return postJSON;
    }
    console.log("did not find");
    return null;
  });

  console.log(`*** thisost ==> ` + thisPost);
  return thisPost;
  // return context.posts.find((post) => post.id === JSON.stringify(id));
};
