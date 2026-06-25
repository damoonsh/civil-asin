import { useState } from "react";
import "../styles/navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const navLinks = [
  { to: "/about-us", label: "درباره ما" },
  { to: "/board-members", label: "هیات مدیره" },
  { to: "/contact-us", label: "تماس با ما" },
];

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <nav className="navbar">
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
        className="menu-icon-button"
      >
        <MenuIcon />
      </IconButton>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{ className: "drawer-paper" }}
      >
        <div className="drawer-header">
          <h2>منو</h2>
          <IconButton
            aria-label="close menu"
            onClick={toggleDrawer(false)}
            className="drawer-close"
            size="small"
          >
            <CloseIcon />
          </IconButton>
        </div>
        <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          {navLinks.map(({ to, label }) => (
            <ListItem
              key={to}
              button
              component={Link}
              to={to}
              className="drawer-link"
            >
              <ListItemText primary={label} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </nav>
  );
};

export default NavBar;
