import "../styles/navbar.css"; 
import { HashLink as Link } from 'react-router-hash-link'; 
const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#about">تماس با ما</a>
      <Link to="/board-members">هیات مدیره</Link>
      <a href="#services">درباره شرکت</a>
    </nav>
  );
};

export default NavBar;