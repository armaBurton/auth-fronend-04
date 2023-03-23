import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../context/UserProvider";
import { getCurrentUser } from "../../services/users";

export const PrivateRoutes = async () => {
  const user = await useCurrentUser();

  return (
    <div>
      <h1>testing Outlet</h1>
      <Outlet />
    </div>
  );
  // return user.username ? <Outlet /> : <Navigate to="/main" />;
};
