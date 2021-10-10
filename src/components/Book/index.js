import PropTypes from "prop-types";
import React from "react";
import { formatDate } from "../../lib/date";
import styles from "./Book.module.css";

const Book = ({ data }) => {
  return (
    <div className={styles.body}>
      <div className={styles.description}>
        <h4>{data.title}</h4>
        <p>Book by {data.author}</p>
        <div className={styles.grid}>
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
