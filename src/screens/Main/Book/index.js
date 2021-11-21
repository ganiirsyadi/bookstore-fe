import PropTypes from "prop-types";
import React, { useState } from "react";
import { formatDate } from "../../../lib/date";
import styles from "./Book.module.css";
import cn from "classnames";
import {
  BsFillArrowUpSquareFill,
  BsFillArrowDownSquareFill,
} from "react-icons/bs";

const Book = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.body}>
      <div className={styles.description}>
        <div className={styles.top}>
          <div className={styles.votes}>
            <BsFillArrowUpSquareFill size="20" color="#fd6e81" />
            <span>10</span>
            <BsFillArrowDownSquareFill size="20" color="#cccccc"/>
          </div>
          <div className={styles.title}>
            <h4>{data.title}</h4>
            <p>Book by {data.author}</p>
          </div>
        </div>
        <div className={cn(styles.grid, { [styles.active]: isActive })}>
          <div>
            <h6>ISBN</h6>
            <p>{data.isbn}</p>
          </div>
          <div>
            <h6>Number of Page</h6>
            <p>{data.numberOfPages} pages</p>
          </div>
          <div>
            <h6>Published on</h6>
            <p>{formatDate(data.publishedOn)}</p>
          </div>
          <div>
            <h6>Country Publisher</h6>
            <p>{data.country}</p>
          </div>
        </div>
        <div className={styles.flex}>
          <p onClick={() => setIsActive((prev) => !prev)}>
            {isActive ? "Hide details" : "View details"}
          </p>
        </div>
      </div>
      <div className={styles.image}>
        <img src={data.imageUrl} alt={data.title} />
      </div>
    </div>
  );
};

Book.propTypes = {
  data: PropTypes.object,
};

export default Book;
