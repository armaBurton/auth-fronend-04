import { useCurrentUser } from "../../context/UserProvider";
import "./Hidden.css";

export const Hidden = () => {
  const user = useCurrentUser();
  return (
    <section className="hidden-section">
      <p>
        welcome_to_the_hidden_page_<span>{user.username}</span>
      </p>
    </section>
  );
};
