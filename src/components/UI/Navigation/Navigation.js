import React from "react";
import classes from "./Navigation.module.css";
import Logo from "./Logo";
import NavigationItems from "./NavigationItems/NavigationItems";
import DrawerToggle from "./SideDrawer/DrawerToggle/DrawerToggle";

const Navigation = (props) => {
  return (
    <header className={classes.ToolBar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      <Logo />
      <nav className={classes.DesktopOnly}>
        <NavigationItems isAuthenticated={props.isAuth} />
      </nav>
    </header>
  );
};

export default Navigation;
