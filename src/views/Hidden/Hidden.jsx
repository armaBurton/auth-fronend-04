import { useCurrentUser } from "../../context/UserProvider";

export const Hidden = () => {
  const user = useCurrentUser();
  return <h1>{user.username}</h1>;
};
