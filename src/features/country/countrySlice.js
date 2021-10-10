import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCountries } from "../../api/country";
import { STATUS } from "../const";

const initialState = {
  status: STATUS.idle,
  data: [],
};

export const getCountryAsync = createAsyncThunk(
  "country/fetchCountry",
  async () => {
    const response = await getCountries();
    return response.data;
  }
);

export const bookSlice = createSlice({
  name: "country",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(getCountryAsync.pending, (state) => {
        state.status = STATUS.loading;
      })
      .addCase(getCountryAsync.fulfilled, (state, action) => {
        state.status = STATUS.success;
        state.data = action.payload;
      });
  },
});

export const selectCountry = (state) => state.country.data;
export const selectCountryStatus = (state) => state.country.status;

export default bookSlice.reducer;
