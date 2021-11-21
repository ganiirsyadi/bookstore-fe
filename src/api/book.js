import axios from "axios";

const url = process.env.REACT_APP_API_URL + "/books"

export const getBooks = () =>
  axios.get(url);

export const addBook = (data) =>
  axios.post(url, data);

export const likeBook = (bookId) =>
  axios.patch(url + "/like", {"book_id": bookId})

export const dislikeBook = (bookId) =>
  axios.patch(url + "/dislike", {"book_id": bookId})