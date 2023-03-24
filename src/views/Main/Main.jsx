import { useCurrentUser } from "../../context/UserProvider";
import { Navigate } from "react-router-dom";
import "./Main.css";

export const Main = () => {
  const user = useCurrentUser();

  return (
    <section className="main-section">
      {user.status === 401 ? user.message : <Navigate to={"/hidden"} />}
    </section>
  );
};
