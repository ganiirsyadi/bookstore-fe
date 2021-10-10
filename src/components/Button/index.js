import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import cn from "classnames";

const Button = ({ children, onClick, className }) => {
  return (
    <button className={cn(styles.button, className)} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  className: PropTypes.string
};

export default Button;
