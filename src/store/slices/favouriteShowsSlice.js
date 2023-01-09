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
    removeShow(state, action) {
      console.log(action.payload);
      const filteredList = state.favArray.filter(
        (show) => show.id !== action.payload
      );
      state.favArray = filteredList;
    },
  },
});
export const { addShow, removeShow } = favShowSlice.actions;
export const favShowsReducer = favShowSlice.reducer;
