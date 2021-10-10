import React from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.css";

const Select = React.forwardRef(
  ({ options, onChange, defaultValue, ...props }, ref) => {
    return (
      <select
        className={styles.select}
        onChange={onChange}
        defaultValue={defaultValue}
        ref={ref}
      >
        {options?.map((el, i) => (
          <option key={i} value={el}>
            {el}
          </option>
        ))}
      </select>
    );
  }
);

Select.propTypes = {
  optionos: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Select;
