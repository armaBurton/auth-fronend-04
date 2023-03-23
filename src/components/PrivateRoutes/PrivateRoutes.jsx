import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../context/UserProvider";
import { getCurrentUser } from "../../services/users";

export const PrivateRoutes = async () => {
  const user = await getCurrentUser();

  return user.username ? <Outlet /> : <Navigate to="/main" />;
};
