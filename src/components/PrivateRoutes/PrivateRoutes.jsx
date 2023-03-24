import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../context/UserProvider";
// import { getCurrentUser } from "../../services/users";

export const PrivateRoutes = async () => {
  try {
    const user = await useCurrentUser();
    console.log(`*** user ==> ` + user);
  } catch (err) {
    console.error(err);
  }
  return <Outlet />;

  // return user.username ? <Outlet /> : <Navigate to="/main" />;
};
