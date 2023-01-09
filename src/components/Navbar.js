import { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";
function NavBar() {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const handleSearchClick = () => {
    setSearch(true);
  };

  const handleTitleClick = () => {
    navigate("/");
  };

  let searchButtonDisplay;

  if (search) {
    searchButtonDisplay = <SearchBar />;
  } else {
    searchButtonDisplay = (
      <button className="btn btn-square btn-ghost" onClick={handleSearchClick}>
        <GoSearch />
      </button>
    );
  }
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <button
          onClick={handleTitleClick}
          className="btn btn-ghost normal-case text-xl"
        >
          WatchWat
        </button>
      </div>
      {searchButtonDisplay}
    </div>
  );
}

export default NavBar;
