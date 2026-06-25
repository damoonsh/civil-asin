import "../styles/header.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="left-content">
        <NavBar />
        <Link to="/" className="company-title">
          <h1>Civil Asin CO.</h1>
        </Link>
      </div>
      <div className="right-content">
        <Link to="/" className="logo-link">
          <img
            src="/logo_icon.png"
            alt="Civil Asin Logo"
            className="logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
