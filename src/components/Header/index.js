import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header data-testid="header" className={styles.header}>
      BOOK STORE
    </header>
  );
};

export default Header;
