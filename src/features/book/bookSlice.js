import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addBook, getBooks } from "../../api/book";
import { STATUS } from "../const";

const initialState = {
  status: STATUS.idle,
  data: [],
};

export const getBookAsync = createAsyncThunk("book/fetchBook", async () => {
  const response = await getBooks();
  return response.data;
});

export const addBookAsync = createAsyncThunk("book/addBook", async (data) => {
  const response = await addBook(data);
  return response.data;
});

export const bookSlice = createSlice({
  name: "book",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getBookAsync.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getBookAsync.fulfilled, (state, action) => {
        state.status = STATUS.success;
        state.data = action.payload;
      })
      .addCase(addBookAsync.pending, (state) => {
        state.status = STATUS.posting;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.status = STATUS.success;
        state.data = [...state.data, action.payload]
      });
  },
});

export const selectBook = (state) => state.book.data;
export const selectBookStatus = (state) => state.book.status;

export default bookSlice.reducer;
