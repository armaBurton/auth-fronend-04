import { useAuth, useCurrentUser } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const SignOut = async () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const user = useCurrentUser();
  const setUserNull = useCurrentUser();

  useEffect(() => {
    // user?.username && logout();
    // navigate("/main", { replace: true });
  }, []);

  const runLogout = async () => {
    try {
      await logout().then(() => setUserNull());

      navigate("/main", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  user?.username && runLogout();

  return <></>;
};
