import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetData } from "../store";
import SearchBar from "./SearchBar";
function NavBar() {
  const [search, setSearch] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSearchClick = () => {
    setSearch(true);
  };

  const handleTitleClick = () => {
    dispatch(resetData());
    navigate("/");
  };

  let searchButtonDisplay;

  if (search) {
    searchButtonDisplay = <SearchBar setSearch={setSearch} />;
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
  return (
    <div className="navbar bg-zinc-900 sticky top-0 z-30">
      <div className="flex-1">
        <button
          onClick={handleTitleClick}
          className="btn btn-ghost normal-case text-xl text-white"
        >
          WatchWat
        </button>
      </div>
      {searchButtonDisplay}
    </div>
  );
}

export default NavBar;
