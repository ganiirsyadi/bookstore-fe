import React from "react";
import styles from "./Spinner.module.css";
import cn from "classnames";

/**
 * @param string size: s, m, l, xl
 * @param string type: primary, secondary
 */
const Spinner = ({ size, type, className }) => {
  const getClassSize = () => {
    switch (size?.toLowerCase()) {
      case "s":
        return styles.s;
      case "l":
        return styles.l;
      case "xl":
        return styles.xl;
      default:
        return styles.m;
    }
  };

  return (
    <div
      className={cn(
        styles.spinner,
        getClassSize(),
        { [styles.secondary]: type === "secondary" },
        className
      )}
    ></div>
  );
};

export default Spinner;
