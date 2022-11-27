import React from "react";
import HeaderButton from "./HeaderButton";
import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.headerList}>
        <li><a href="#a">Home</a></li>
        <li><a href="#a">Store</a></li>
        <li><a href="#a">About</a></li>
      </ul>
      <HeaderButton />
    </header>
  );
};

export default Header;
