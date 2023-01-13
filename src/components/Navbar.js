import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetData, setInputStatus } from "../store";
import SearchBar from "./SearchBar";
function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputStatus = useSelector((state) => {
    return state.shows.inputStatus;
  });

  const handleSearchClick = () => {
    dispatch(setInputStatus(true));
  };

  const handleTitleClick = () => {
    dispatch(resetData());
    navigate("/");
  };

  let searchButtonDisplay;

  if (inputStatus) {
    searchButtonDisplay = <SearchBar />;
  } else {
    searchButtonDisplay = (
      <button
        className="btn btn-square btn-ghost text-white mx-3"
        onClick={handleSearchClick}
      >
        <GoSearch />
      </button>
    );
  }

  const handleFavListClick = () => {
    navigate("/favlist");
    dispatch(setInputStatus(false));
  };

  const handleWatchListClick = () => {
    navigate("/watchlist");
    dispatch(setInputStatus(false));
  };

  return (
    <div className="navbar bg-zinc-900  sticky top-0 z-30">
      <div className="flex flex-start md:flex-1">
        <button
          onClick={handleTitleClick}
          className="btn btn-ghost normal-case text-sm text-white md:text-lg"
        >
          WatchWat
        </button>
        <button
          onClick={handleFavListClick}
          className="btn btn-ghost normal-case text-xs font-light text-white w-10 md:w-20"
        >
          FavList
        </button>
        <button
          onClick={handleWatchListClick}
          className="btn btn-ghost normal-case text-xs font-light text-white w-16 md:w-20"
        >
          WatchList
        </button>
      </div>
      {searchButtonDisplay}
    </div>
  );
}

export default NavBar;
