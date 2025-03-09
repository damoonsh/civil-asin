import "../styles/Header.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="left-content">
        <NavBar />
        <Link to="/" className="company-title">
          <h1>Civil Asin CO.</h1>
          <span className="registry-number">Registry #: 168128</span>
        </Link>
      </div>
      <div className="right-content">
        <Link to="/">
          <img
            src="/civil-asin/full_logo.png"
            alt="Company Logo"
            className="logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
