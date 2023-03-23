import { Navigate, Outlet } from "react-router-dom";
import { useCurrentUser } from "../../context/UserProvider";

export const PrivateRoutes = async (props) => {
  // const user = await useCurrentUser();
  console.log(`*** props ==> ` + props);

  // user?.username
  //   ? console.log(`*** user.username ==> ` + user.username)
  //   : console.log("poopoopeepee");
  // return user?.username ? <Outlet /> : <Navigate to="/main" />;
  return <></>;
};
