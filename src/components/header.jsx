import '../styles/Header.css'; 
import { Link } from 'react-router-dom';
import NavBar from './NavBar';

const Header = () => {
  return (
    <header className="header">
      <div className="left-content">
        <Link to="/"><h1>Civil Asin</h1></Link>
      </div>
      <div className="middle-content">
        <NavBar />
      </div>
      <div className="right-content">
        <Link to="/">
          <img src="/civil-asin/full_logo.png" alt="Company Logo" className="logo" />
        </Link>
      </div>
    </header>
  );
};

export default Header;