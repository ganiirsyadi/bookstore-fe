import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../features/book/bookSlice";
import countryReducer from "../features/country/countrySlice";
import userReducer from "../features/user/userSlice"

export const store = configureStore({
  reducer: {
    book: bookReducer,
    country: countryReducer,
    user: userReducer
  },
});
