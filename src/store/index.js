import { configureStore } from "@reduxjs/toolkit";
// import { showsApi } from "./api";
import { showsReducer } from "./slices/showSlice";
import {
  setTerm,
  setSearchData,
  resetData,
  setShowDetails,
  setShows,
  setInputStatus,
} from "./slices/showSlice";
import {
  addFavShow,
  removeFavShow,
  favShowsReducer,
} from "./slices/favouriteShowsSlice";

import {
  addToWatchList,
  removedFromWatchList,
  watchShowsReducer,
} from "./slices/watchShowsSlice";

const store = configureStore({
  reducer: {
    shows: showsReducer,
    favShows: favShowsReducer,
    watchShows: watchShowsReducer,
  },
});

export { store };
export {
  setTerm,
  setSearchData,
  resetData,
  addFavShow,
  removeFavShow,
  setShowDetails,
  setShows,
  setInputStatus,
  removedFromWatchList,
  addToWatchList,
};
// export { useFetchShowsQuery } from "./api";
