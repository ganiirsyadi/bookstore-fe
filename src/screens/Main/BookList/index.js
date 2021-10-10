import React, { useEffect } from "react";
import Book from "../Book";
import styles from "./BookList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getBookAsync } from "../../../features/book/bookSlice";
import Spinner from "../../../components/Spinner";
import { STATUS } from "../../../features/const";

const BookList = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBookAsync());
  }, [dispatch]);

  return (
    <div className={styles.column}>
      {status === STATUS.loading ? (
        <Spinner size="l" className={styles.spinner} />
      ) : (
        data.map((elem) => <Book key={elem.id} data={elem} />)
      )}
    </div>
  );
};

export default BookList;
