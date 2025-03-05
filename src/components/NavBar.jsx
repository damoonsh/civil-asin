import "../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
const NavBar = () => {
  return (
    <nav className="navbar">
      <Link to="/contact-us">
        <h3>تماس با ما</h3>
      </Link>
      <Link to="/board-members">
        <h3>هیات مدیره</h3>
      </Link>
      <Link to="/about-us">
        <h3>در طراح و ساخت</h3>
      </Link>
    </nav>
  );
};

export default NavBar;
