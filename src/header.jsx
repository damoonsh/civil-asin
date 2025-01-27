// src/Header.jsx
import './styles/Header.css'; // Optional: for styling

const Header = () => {
  return (
    <header className="header">
      <div className="right-content">
        <h3>به وب‌سایت شرکت ما خوش آمدید</h3>
      </div>
      <div className="left-content">
        <h1>Civil Asin | سیویل آسین</h1>
        <img src="/civil-asin/logo.BMP" alt="Company Logo" className="logo" />
      </div>
    </header>
  );
};

export default Header;