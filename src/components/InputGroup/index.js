import PropTypes from "prop-types";
import React from "react";
import Input from "../Input";
import styles from "./InputGroup.module.css";

const InputGroup = ({
  label,
  placeholder,
  type,
  onChange,
  required,
  errorMessage,
  ...props
}) => {
  console.log(props);
  return (
    <div className={styles.group}>
      <label htmlFor={label ? label.replace(" ", "_") : ""}>{label}</label>
      <Input
        required={required}
        type={type}
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
      {errorMessage && <small>{errorMessage}</small>}
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputGroup;
