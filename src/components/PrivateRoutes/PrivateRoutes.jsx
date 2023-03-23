import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../context/UserProvider";

export const PrivateRoutes = async () => {
  const user = await useCurrentUser();

  return user?.username ? <Outlet /> : <Navigate to="/main" />;
};
