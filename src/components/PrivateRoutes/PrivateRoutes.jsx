import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../context/UserProvider";

export const PrivateRoutes = () => {
  const user = useCurrentUser();
  console.log(`*** user ==> ` + user);

  return user.username ? <Outlet /> : <Navigate to="/main" />;
};
