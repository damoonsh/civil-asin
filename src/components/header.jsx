import "../styles/header.css";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header className="header">
      <div className="left-content">
        <NavBar />
      </div>
      <div className="right-content">
        <Link to="/" className="logo-link">
          <img
            src="/civil_asin_logo.png"
            alt="سیویل آسین — Civil Asin"
            className="logo"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
