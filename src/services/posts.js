export const getPosts = async () => {
  const res = await fetch("http://localhost:7890/api/v1/posts");
  return res.json();
};
