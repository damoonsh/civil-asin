import '../styles/Header.css'; 
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="header">
      <div className="right-content">
        <NavBar />
        {/* <h3>به وب‌سایت شرکت ما خوش آمدید</h3> */}
      </div>
      <div className="left-content">
        {/* <h1>Civil Asin | سیویل آسین</h1> */}
        <Link to="/">
          <img src="/civil-asin/full_logo.png" alt="Company Logo" className="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;