import { createSlice } from "@reduxjs/toolkit";

const showsSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchData: [],
    showData: {},
    showArray: [],
    inputStatus: false,
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
    setInputStatus(state, action) {
      state.inputStatus = action.payload;
    },
  },
});

export const {
  setTerm,
  setSearchData,
  resetData,
  setShowDetails,
  setShows,
  setInputStatus,
} = showsSlice.actions;
export const showsReducer = showsSlice.reducer;
