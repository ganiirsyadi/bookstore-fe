import React, { useRef } from "react";
import PropTypes from "prop-types";
import styles from "./Select.module.css";

const Select = ({ options, onChange, defaultValue, ...props }) => {
  const selectRef = useRef(null);

  return (
    <select
      ref={selectRef}
      className={styles.select}
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {options?.map((el, i) => (
        <option key={i} value={el}>
          {el}
        </option>
      ))}
    </select>
  );
};

Select.propTypes = {
  optionos: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

export default Select;
