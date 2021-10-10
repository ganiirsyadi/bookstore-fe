import React from "react";
import { books } from "../../mocks/books";
import Book from "../Book";
import styles from "./BookList.module.css";

const BookList = () => {
  return (
    <div className={styles.column}>
      {books.map((elem) => (
        <Book key={elem.id} data={elem} />
      ))}
    </div>
  );
};

export default BookList;
