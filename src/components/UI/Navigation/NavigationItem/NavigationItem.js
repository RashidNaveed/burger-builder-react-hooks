import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";

const NavigationItem = (props) => {
  return (
    <div>
      <li className={classes.NavigationItem}>
        <NavLink activeClassName={classes.active} to={props.link} exact={props.exact}>
          {props.children}
        </NavLink>
      </li>
    </div>
  );
};

export default NavigationItem;
