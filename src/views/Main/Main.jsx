import { useCurrentUser } from "../../context/UserProvider";

export const Main = () => {
  const user = useCurrentUser();
  console.log(`*** JSON.stringify(user) ==> ` + JSON.stringify(user));
  return (
    <section className="main-section">
      {user.status === 401 ? user.message : user.username}
    </section>
  );
};
