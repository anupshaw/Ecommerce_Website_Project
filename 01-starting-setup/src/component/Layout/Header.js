import React from "react";
import HeaderButton from "./HeaderButton";
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header className={classes.header}>
      <ul className={classes.headerList}>
        <li><a href="#a">Home</a></li>
        <li><a href="#a">Store</a></li>
        <li><a href="#a">About</a></li>
      </ul>
      <HeaderButton onConfirmation={props.onShowCart} />
    </header>
  );
};

export default Header;
