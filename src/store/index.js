import { configureStore } from "@reduxjs/toolkit";
import { showsApi } from "./api";
import { showsReducer } from "./slices/searchBarSlice";
import { setTerm, setData } from "./slices/searchBarSlice";
import { addShow, favShowsReducer } from "./slices/favouriteShowsSlice";

const store = configureStore({
  reducer: {
    shows: showsReducer,
    favShows: favShowsReducer,
  },
});

export { store };
export { setTerm, setData, addShow };
// export { useFetchShowsQuery } from "./api";
