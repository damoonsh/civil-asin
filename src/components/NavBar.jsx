import { useState } from "react";
import "../styles/navbar.css";
import "../styles/header.css"; // Import header styles
import { HashLink as Link } from "react-router-hash-link";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

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
      <div className="left-content">
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer(true)}
          className="menu-icon-button"
        >
          <MenuIcon />
        </IconButton>
      </div>
      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: "drawer" }}
        style={{ paddingTop: "60px" }} // Add padding to the top
      >
        <List onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
          <ListItem button component={Link} to="/contact-us">
            <ListItemText primary="تماس با ما" />
          </ListItem>
          <ListItem button component={Link} to="/board-members">
            <ListItemText primary="هیات مدیره" />
          </ListItem>
          <ListItem button component={Link} to="/about-us">
            <ListItemText primary="درباره ما" />
          </ListItem>
        </List>
      </Drawer>
    </nav>
  );
};

export default NavBar;
