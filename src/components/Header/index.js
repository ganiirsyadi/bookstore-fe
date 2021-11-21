import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header data-testid="header" className={styles.header}>
      RATE YOUR BOOK
    </header>
  );
};

export default Header;
