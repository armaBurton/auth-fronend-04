import { Navigate, Route, Routes } from "react-router-dom";
import { useCurrentUser } from "../../context/UserProvider";

export const PrivateRoutes = async ({ children, ...routeProps }) => {
  const user = await useCurrentUser();

  // return (
  //   <Route {...routeProps}>
  //     {user?.username ? children : Navigate("/main")}
  //   </Route>
  // );
  return user?.username ? (
    <Route {...routeProps}>{children}</Route>
  ) : (
    <Navigate to="/main" />
  );
};
