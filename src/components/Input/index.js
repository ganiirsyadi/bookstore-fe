import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

const Input = ({ type, onChange, placeholder, required, ...props }) => {
  return (
    <input
      type={type ?? "text"}
      className={styles.input}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      {...props}
    />
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
