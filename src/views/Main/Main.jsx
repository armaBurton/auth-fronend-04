import { useCurrentUser } from "../../context/UserProvider";
import "./Main.css";

export const Main = () => {
  const user = useCurrentUser();

  return (
    <section className="main-section">
      {user.status === 401 ? user.message : user.username}
    </section>
  );
};
