import { createSlice } from "@reduxjs/toolkit";

const searchBarSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    setTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setTerm, setData } = searchBarSlice.actions;
export const showsReducer = searchBarSlice.reducer;
