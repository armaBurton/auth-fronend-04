import { useCurrentUser } from "../../context/UserProvider";
import "./Hidden.css";

export const Hidden = () => {
  const user = useCurrentUser();
  return (
    <section className="hidden-section">
      <h1>welcome_to_the_hidden_page_{user.username}</h1>
    </section>
  );
};
