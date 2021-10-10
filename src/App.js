import Button from "./components/Button";
import Header from "./components/Header";
import styles from "./App.module.css"
import cn from "classnames"
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <Header />
      <div className={cn("container", styles.body)}>
        <div className={styles.row}>
          <h5>Books <span>(54)</span></h5>
          <Button>Add +</Button>
        </div>
        <BookList />
      </div>
    </>
  );
}

export default App;
