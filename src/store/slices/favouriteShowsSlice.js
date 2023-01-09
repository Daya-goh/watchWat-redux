import { createSlice } from "@reduxjs/toolkit";

const favShowSlice = createSlice({
  name: "favShows",
  initialState: {
    favArray: [],
  },
  reducers: {
    addShow(state, action) {
      console.log(action.payload);
      state.favArray.push(action.payload);
    },
  },
});
export const { addShow } = favShowSlice.actions;
export const favShowsReducer = favShowSlice.reducer;
