import { configureStore } from "@reduxjs/toolkit";
import { showsApi } from "./api";
import { showsReducer } from "./slices/searchBarSlice";
import { setTerm, setData } from "./slices/searchBarSlice";

const store = configureStore({
  reducer: {
    shows: showsReducer,
  },
});

export { store };
export { setTerm, setData };
// export { useFetchShowsQuery } from "./api";
