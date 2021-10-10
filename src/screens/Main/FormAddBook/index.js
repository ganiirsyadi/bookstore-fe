import React from "react";
import Button from "../../../components/Button";
import styles from "./FormAddBook.module.css";
import InputGroup from "../../../components/InputGroup";
import SelectGroup from "../../../components/SelectGroup";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getCountryAsync,
  selectCountry,
} from "../../../features/country/countrySlice";
import { addBookAsync } from "../../../features/book/bookSlice";

const FormAddBook = ({ onSubmit }) => {
  const countries = useSelector(selectCountry);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, formState: {errors} } = useForm();

  useEffect(() => {
    if (countries?.length === 0) {
      dispatch(getCountryAsync());
    }
  }, [countries, dispatch]);

  const submit = async (data) => {
    dispatch(addBookAsync(data));
    reset();
    onSubmit();
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit(submit)}>
      <InputGroup
        label="Title"
        required
        placeholder="e.g. Super Awesome Book"
        {...register("title")}
        data-testid="name_field"
      />
      <InputGroup
        label="Author"
        required
        placeholder="e.g. John Doe"
        {...register("author")}
        data-testid="author_field"
      />
      <InputGroup
        label="ISBN"
        required
        placeholder="e.g. xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        {...register("isbn")}
        data-testid="isbn_field"
      />
      <InputGroup
        label="Published on"
        type="datetime-local"
        required
        {...register("publishedOn")}
        data-testid="published_on_field"
      />
      <InputGroup
        label="Number of Page"
        type="number"
        min="1"
        required
        placeholder="99"
        {...register("numberOfPages")}
        data-testid="number_of_pages_field"
      />
      <SelectGroup
        defaultValue="Indonesia"
        label="Country Publisher"
        options={countries?.map((el) => el.name)}
        {...register("country")}
        data-testid="country_field"
      />
      <Button data-testid="submit_button" className={styles.button} onClick={() => console.log(errors)}>
        Submit
      </Button>
    </form>
  );
};

export default FormAddBook;
