import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchData: [],
    showData: {},
    showArray: [],
  },
  reducers: {
    setTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSearchData(state, action) {
      state.searchData = action.payload;
    },
    setShowDetails(state, action) {
      console.log(state.showData);
      state.showData = action.payload;
    },
    resetData(state, action) {
      state.searchTerm = "";
    },
    setShows(state, action) {
      state.showArray = action.payload;
    },
  },
});

export const { setTerm, setSearchData, resetData, setShowDetails, setShows } =
  searchSlice.actions;
export const showsReducer = searchSlice.reducer;
