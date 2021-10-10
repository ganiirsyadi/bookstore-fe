import Button from "../../components/Button";
import Header from "../../components/Header";
import styles from "./Main.module.css";
import cn from "classnames";
import BookList from "../../components/BookList";
import { scrollToTop } from "../../lib/scroll";
import { BiChevronUp } from "react-icons/bi";
import Modal from "../../components/Modal";
import { useState } from "react";
import FormAddBook from "../../components/FormAddBook";

function Main() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Header />
      <div className={cn("container", styles.body)}>
        <div className={styles.row}>
          <h5>
            Books <span>(54)</span>
          </h5>
          <Button className={styles.button} onClick={() => setShowModal(true)}>
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
        <FormAddBook />
      </Modal>
      <Button className={styles.chevron} onClick={scrollToTop}>
        <BiChevronUp size={32} />
      </Button>
      {!showModal && (
        <Button className={styles.floating} onClick={() => setShowModal(true)}>
          Add Book
        </Button>
      )}
    </>
  );
}

export default Main;
