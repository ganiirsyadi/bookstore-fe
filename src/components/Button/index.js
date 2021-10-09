import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";
import cn from "classnames"

const Button = ({ children, onClick, className }) => {
  return <button className={cn(styles.button, className)}>{children}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
