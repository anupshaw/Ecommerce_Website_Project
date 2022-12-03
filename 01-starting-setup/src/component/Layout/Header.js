import React from "react";
import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <ul className={classes.headerList}>
        <li>
          <NavLink to="/home" activeClassName={classes.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" exact activeClassName={classes.active}>
            Store
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName={classes.active}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName={classes.active}>
            Contact
          </NavLink>
        </li>
      </ul>
      <HeaderButton onConfirmation={props.onShowCart} />
    </header>
  );
};

export default Header;
