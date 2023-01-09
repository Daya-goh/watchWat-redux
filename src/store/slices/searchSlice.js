import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchTerm: "",
    searchData: [],
    showData: null,
  },
  reducers: {
    setTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setData(state, action) {
      state.searchData = action.payload;
    },
    setShowDetails(state, action) {
      state.showData = action.payload;
    },
    resetData(state, action) {
      state.searchTerm = "";
    },
  },
});

export const { setTerm, setData, resetData, setShowDetails } =
  searchSlice.actions;
export const showsReducer = searchSlice.reducer;
