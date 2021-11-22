import React, { useEffect } from "react";
import Book from "../Book";
import styles from "./BookList.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getBookAsync } from "../../../features/book/bookSlice";
import Spinner from "../../../components/Spinner";
import { STATUS } from "../../../features/const";
import { selectUser } from "../../../features/user/userSlice";

const BookList = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser)
  const { data, status } = useSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBookAsync());
  }, [dispatch, user]);

  return (
    <div className={styles.column} data-testid="booklist">
      {status === STATUS.loading ? (
        <Spinner size="l" className={styles.spinner} />
      ) : (
        data.map((elem) => <Book key={elem.id} data={elem} />)
      )}
    </div>
  );
};

export default BookList;
