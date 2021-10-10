import React from "react";
import { countries } from "../../mocks/countries";
import Button from "../Button";
import InputGroup from "../InputGroup";
import SelectGroup from "../SelectGroup";
import styles from "./FormAddBook.module.css";

const COUNTRY_OPTIONS = countries.map((el) => el.name);

const FormAddBook = () => {

  const submit = () => console.log("submitted")

  return (
    <form style={styles.form} onSubmit={submit}>
      <InputGroup
        label="Title"
        required
        placeholder="e.g. Super Awesome Book"
      />
      <InputGroup label="Author" required placeholder="e.g. John Doe" />
      <InputGroup
        label="ISBN"
        required
        placeholder="e.g. xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
      />
      <InputGroup label="Published on" type="date" required />
      <InputGroup
        label="Number of Page"
        type="number"
        min="1"
        required
        placeholder="99"
      />
      <SelectGroup label="Country Publisher" options={COUNTRY_OPTIONS} />
      <Button className={styles.button}>Submit</Button>
    </form>
  );
};

export default FormAddBook;
