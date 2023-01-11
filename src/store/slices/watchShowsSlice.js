import { createSlice } from "@reduxjs/toolkit";

const watchShowsSlice = createSlice({
  name: "watchlist",
  initialState: {
    watchListArray: [],
  },
  reducers: {
    addToWatchList(state, action) {
      console.log("added");
      state.watchListArray.push(action.payload);
    },
    removedFromWatchList(state, action) {
      const filteredList = state.watchListArray.filter((show) => {
        return show.id !== action.payload;
      });
      state.watchListArray = filteredList;
    },
  },
});

export const { addToWatchList, removedFromWatchList } = watchShowsSlice.actions;
export const watchShowsReducer = watchShowsSlice.reducer;
