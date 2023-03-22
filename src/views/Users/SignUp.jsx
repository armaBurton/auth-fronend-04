import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useCurrentUser } from "../../context/UserProvider";

export const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const user = useCurrentUser();
  const { SignUp } = useAuth();

  const handleClick = (e) => {
    e.preventDefault();
    if ((!username, !password, !confirmPassword)) {
      setError("All inputs must be populated.");
    }
  };

  return (
    <section className="form-section">
      <form onSubmit={() => {}} className="auth-form">
        <label htmlFor="username">username</label>
        <input
          type="text"
          id="username"
          name="usernmae"
          value={username}
          onChange={({ target }) => {
            setUsername(target.value);
          }}
          placeholder="username"
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={password}
          onChange={({ target }) => {
            setPassword(target.value);
          }}
        />
        <label htmlFor="confirm_password">confirm_password</label>
        <input
          type="password"
          placeholder="confirm_password"
          id="confirm_password"
          name="confirm_password"
          value={confirmPassword}
          onChange={({ target }) => setConfirmPassword(target.value)}
        />
        <button
          className="row"
          type="submit"
          aria-disabled={!username || !password}
          onClick={handleClick}
        >
          sign_up
        </button>
        <p className="row">{error}</p>
      </form>
    </section>
  );
};
