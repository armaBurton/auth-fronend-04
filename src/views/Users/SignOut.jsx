import { useAuth } from "../../context/UserProvider";
import { useNavigate } from "react-router-dom";

export const SignOut = async () => {
  const { logout } = useAuth();
  const { navigate } = useNavigate();

  await logout();

  navigate("/main", { replace: true });
  return <></>;
};
