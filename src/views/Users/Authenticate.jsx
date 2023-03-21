import "./Authenticate.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCurrentUser } from "../../context/UserProvider";

export const Authenticate = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useCurrentUser();
  const { login } = useAuth();

  useEffect(() => {
    if (user?.username) navigate("/main", { replace: true });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await login({ username, password });
      navigate("/main", { replace: true });
    } catch (err) {
      console.log(`*** err ==> ` + err);
      setError(err);
      navigate("/main", { replace: true });
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    if ((!username, !password)) {
      setError("Please enter a username & password.");
    } else {
      setError("");
      handleSubmit(e);
    }
  };

  return (
    <section className="form-section">
      <form onSubmit={() => {}} className="auth-form">
        <label htmlFor="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
        />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
        <button
          className="row"
          type="submit"
          aria-disabled={!username || !password}
          onClick={handleClick}
        >
          Sign In
        </button>
        <p className="row">{error}</p>
      </form>
    </section>
  );
};
