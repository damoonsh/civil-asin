
import "../styles/navbar.css"; // Ensure styles are applied

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#home">تیم مدیریت</a>
      <a href="#about">تماس با ما</a>
      <a href="#services">درباره ما</a>
      <a href="#contact">کارکنان کلیدی</a>
    </nav>
  );
};

export default NavBar;