import React from "react";
import styles from "./SelectGroup.module.css";
import PropTypes from "prop-types";
import Select from "../Select";

const SelectGroup = React.forwardRef(
  (
    { label, options, onChange, defaultValue, errorMessage, ...props },
    ref
  ) => {
    return (
      <div className={styles.group}>
        <label htmlFor={label ? label.replace(" ", "_") : ""}>{label}</label>
        <Select
          ref={ref}
          options={options}
          onChange={onChange}
          defaultValue={defaultValue}
          {...props}
        />
        {errorMessage && <small>{errorMessage}</small>}
      </div>
    );
  }
);

SelectGroup.propTypes = {
  label: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default SelectGroup;
