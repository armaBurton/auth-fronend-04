import "./Header.css";
import { Link } from "react-router-dom";

export const Header = ({ children }) => {
  return (
    <header>
      <Link className="header-link">All_Together_Now</Link>
      {children}
    </header>
  );
};
