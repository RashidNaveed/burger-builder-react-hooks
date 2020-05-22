import React from "react";
import classes from "./Navigation.module.css";
import burgerLogo from "../../../assets/images/burger-logo.png";

const Logo = () => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt="My Burger"></img>
    </div>
  );
};

export default Logo;
