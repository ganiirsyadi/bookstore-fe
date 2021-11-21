import axios from "axios";

const url = process.env.REACT_APP_API_URL + "/books"

export const getBooks = () =>
  axios.get(url);

export const addBook = (data) =>
  axios.post(url, data);
