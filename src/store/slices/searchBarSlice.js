import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setTerm(state, action) {
      state.searchTerm = action.payload;
    },
  },
});

export const { setTerm } = searchBarSlice.actions;
export const showsReducer = searchBarSlice.reducer;
