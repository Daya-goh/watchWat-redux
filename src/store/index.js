import { configureStore } from "@reduxjs/toolkit";
// import { showsApi } from "./api";
import { showsReducer } from "./slices/searchSlice";
import {
  setTerm,
  setSearchData,
  resetData,
  setShowDetails,
  setShows,
} from "./slices/searchSlice";
import {
  addShow,
  removeShow,
  favShowsReducer,
} from "./slices/favouriteShowsSlice";

const store = configureStore({
  reducer: {
    shows: showsReducer,
    favShows: favShowsReducer,
  },
});

export { store };
export {
  setTerm,
  setSearchData,
  resetData,
  addShow,
  removeShow,
  setShowDetails,
  setShows,
};
// export { useFetchShowsQuery } from "./api";
