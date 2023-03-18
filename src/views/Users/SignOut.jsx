import { useAuth, useCurrentUser } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

export const SignOut = async () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const user = useCurrentUser();
  const setUserNull = useCurrentUser();

  const runLogout = async () => {
    try {
      await logout()
        .then(() => setUserNull())
        .finally(() => navigate("/main", { replace: true }));
    } catch (err) {
      console.error(err);
    }
  };

  user?.username && runLogout();

  return <></>;
};
