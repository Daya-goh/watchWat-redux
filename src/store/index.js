import { configureStore } from "@reduxjs/toolkit";
// import { showsApi } from "./api";
import { showsReducer } from "./slices/searchSlice";
import {
  setTerm,
  setData,
  resetData,
  setShowDetails,
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
export { setTerm, setData, resetData, addShow, removeShow, setShowDetails };
// export { useFetchShowsQuery } from "./api";
