import React from "react";
import styles from "./Input.module.css";
import PropTypes from "prop-types";

const Input = React.forwardRef(
  ({ type, onChange, placeholder, required, ...props }, ref) => {
    return (
      <input
        type={type ?? "text"}
        className={styles.input}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.propTypes = {
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
