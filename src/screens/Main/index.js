import React from "react";
import Button from "../../components/Button";
import Header from "../../components/Header";
import styles from "./Main.module.css";
import cn from "classnames";
import BookList from "./BookList";
import { scrollToTop } from "../../lib/scroll";
import { BiChevronUp } from "react-icons/bi";
import Modal from "../../components/Modal";
import { useState } from "react";
import FormAddBook from "./FormAddBook";
import { useSelector } from "react-redux";
import { selectBook } from "../../features/book/bookSlice";
import { signInWithGoogle, signOutUser } from "../../lib/auth";
import { useEffect } from "react";
import { supabase } from "../../lib/supabaseClient";
import { useDispatch } from "react-redux";
import { selectUser, signIn } from "../../features/user/userSlice";
import axios from "axios";

// Component
function Main() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const books = useSelector(selectBook);
  const user = useSelector(selectUser);

  useEffect(() => {
    (async () => {
      const session = await supabase.auth.session();
      if (session) {
        dispatch(signIn(session.user))
        axios.defaults.headers.common['Authorization'] = `${session.token_type} ${session.access_token}`
      };
    })();
  }, [dispatch, books]);

  return (
    <>
      <Header>
        {user ? (
          <>
            Welcome, {user.user_metadata.name}!{" "}
            <span onClick={signOutUser} className={styles.login_btn}>
              Logout
            </span>
          </>
        ) : (
          <>
            <span onClick={signInWithGoogle} className={styles.login_btn}>
              Login
            </span>
            {" "}untuk Vote dan Menambahkan buku favoritmu!
          </>
        )}
      </Header>
      <div className={cn("container", styles.body)}>
        <div className={styles.row}>
          <h5>
            Books <span>({books ? books.length : "loading"})</span>
          </h5>
          <Button
            data-testid="button_add_+"
            className={styles.button}
            onClick={() => {
              user ? setShowModal(true) : signInWithGoogle()
            }}
          >
            Add +
          </Button>
        </div>
        <BookList />
      </div>
      <Modal
        title="Add Book"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <FormAddBook onSubmit={() => setShowModal(false)} />
      </Modal>
      <Button className={styles.chevron} onClick={scrollToTop}>
        <BiChevronUp size={32} />
      </Button>
      {!showModal && (
        <Button className={styles.floating} onClick={() => {
          user ? setShowModal(true) : signInWithGoogle()
        }}>
          Add Book
        </Button>
      )}
    </>
  );
}

export default Main;
