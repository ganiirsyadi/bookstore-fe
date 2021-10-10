import axios from "axios";

export const getBooks = () =>
  axios.get("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books");

export const addBook = (data) => {
  axios.post("https://5de759a9b1ad690014a4e21e.mockapi.io/api/v1/books", data);
};
