import "./UserStatus.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useCurrentUser } from "../../../context/UserProvider";
import { signOut } from "../../../services/users";
import { useEffect, useState } from "react";

export const UserStatus = () => {
  const user = useCurrentUser();
  const navigate = useNavigate();

  const [thisUser, setThisUser] = useState(user);

  useEffect(() => {
    setThisUser(user);
  }, [user]);

  const handleLogout = async (e) => {
    e.preventDefault();
    await signOut();
    setThisUser(null);
    window.location.reload();
  };

  return (
    <div className="auth-div">
      {!thisUser?.username ? (
        <>
          <p>
            <Link to="/signup" className="nav-style">
              sign_up
            </Link>
          </p>
          <p>
            <Link to="/signin" className="nav-style">
              sign_in
            </Link>
          </p>
        </>
      ) : (
        <>
          <p>
            <Link className="nav-style">hello_{thisUser?.username}</Link>
          </p>
          <p>
            <Link to="/signout" className="nav-style" onClick={handleLogout}>
              sign_out
            </Link>
          </p>
        </>
      )}
    </div>
  );
};
