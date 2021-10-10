import PropTypes from "prop-types";
import React, { useEffect } from "react";
import styles from "./Modal.module.css";
import { VscClose } from "react-icons/vsc";
import cn from "classnames";

const Modal = ({ title, children, isOpen, onClose }) => {

  useEffect(() => {
    document.body.classList.toggle("noscroll", isOpen)
  }, [isOpen]);

  return (
    <div
      className={cn(styles.overlay, { [styles.active]: isOpen })}
      onClick={onClose}
    >
      <div
        className={cn("container", styles.modal)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.header}>
          <h4>{title}</h4>
          <VscClose onClick={onClose} size={36} color="#6A6A6A" />
        </div>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
};

export default Modal;
