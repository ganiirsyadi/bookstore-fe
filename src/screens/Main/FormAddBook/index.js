import React from "react";
import Button from "../../../components/Button";
import styles from "./FormAddBook.module.css";
import InputGroup from "../../../components/InputGroup";
import SelectGroup from "../../../components/SelectGroup";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getCountryAsync } from "../../../features/country/countrySlice";
import { STATUS } from "../../../features/const";
import { addBookAsync } from "../../../features/book/bookSlice";

const FormAddBook = ({ onSubmit }) => {
  const { data: countries, status: countryStatus } = useSelector(
    (state) => state.country
  );
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

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
      />
      <InputGroup
        label="Author"
        required
        placeholder="e.g. John Doe"
        {...register("author")}
      />
      <InputGroup
        label="ISBN"
        required
        placeholder="e.g. xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
        {...register("isbn")}
      />
      <InputGroup
        label="Published on"
        type="datetime-local"
        required
        {...register("publishedOn")}
      />
      <InputGroup
        label="Number of Page"
        type="number"
        min="1"
        required
        placeholder="99"
        {...register("numberOfPages")}
      />
      <SelectGroup
        defaultValue="Indonesia"
        label="Country Publisher"
        options={countries?.map((el) => el.name)}
        loading={countryStatus === STATUS.loading}
        {...register("country")}
      />
      <Button className={styles.button}>Submit</Button>
    </form>
  );
};

export default FormAddBook;
