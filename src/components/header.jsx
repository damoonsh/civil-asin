import "../styles/header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-brand">
        <h1>Civil Asin CO.</h1>
      </div>
      <div className="header-logo">
        <img
          src="/logo_icon.png"
          alt="Civil Asin Logo"
          className="logo"
        />
      </div>
    </header>
  );
};

export default Header;
