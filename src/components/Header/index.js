import React from "react";
import styles from "./Header.module.css";

const Header = ({ children }) => {
  return (
    <header>
      <div className={styles.banner}>
        <div className="container">{children}</div>
      </div>
      <div data-testid="header" className={styles.header}>
        RATE YOUR BOOK
      </div>
    </header>
  );
};

export default Header;
