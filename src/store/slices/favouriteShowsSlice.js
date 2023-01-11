import { createSlice } from "@reduxjs/toolkit";

const favShowSlice = createSlice({
  name: "favShows",
  initialState: {
    favArray: [],
  },
  reducers: {
    addFavShow(state, action) {
      state.favArray.push(action.payload);
    },
    removeFavShow(state, action) {
      const filteredList = state.favArray.filter(
        (show) => show.id !== action.payload
      );
      state.favArray = filteredList;
    },
  },
});
export const { addFavShow, removeFavShow } = favShowSlice.actions;
export const favShowsReducer = favShowSlice.reducer;
