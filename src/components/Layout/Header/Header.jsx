import "./Header.css";
import { Link } from "react-router-dom";

export const Header = ({ children }) => {
  return (
    <header>
      <Link to="/main" className="header-link">
        all_together_now
      </Link>
      {children}
    </header>
  );
};
