import "./UserStatus.css";
import { Link } from "react-router-dom";
import { useAuth, useCurrentUser } from "../../../context/UserProvider";

export const UserStatus = () => {
  const user = useCurrentUser();
  console.log(`*** user ==> ` + JSON.stringify(user));

  return (
    <div>
      <p className="login">sign in</p>
    </div>
  );
};
