import "./UserStatus.css";
import { Link } from "react-router-dom";
import { useAuth, useCurrentUser } from "../../../context/UserProvider";

export const UserStatus = () => {
  const user = useCurrentUser();
  console.log(`*** user ==> ` + JSON.stringify(user));

  return (
    <div className="auth-div">
      <p>
        <Link to="/signup" className="nav-style">
          sign_up
        </Link>
      </p>
      <p>
        <Link to="login" className="nav-style">
          login
        </Link>
      </p>
    </div>
  );
};
