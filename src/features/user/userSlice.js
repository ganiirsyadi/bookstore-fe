import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: null
};

export const userSlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    signIn(state, action) {
      state.data = action.payload
    },
    signOut(state) {
      state.data = []
    }
  }
});

export const {signIn, signOut} = userSlice.actions
export const selectUser = (state) => state.user.data;

export default userSlice.reducer;
