import { useState } from "react";
import { GoSearch } from "react-icons/go";
import SearchBar from "./SearchBar";
function NavBar() {
  const [search, setSearch] = useState(false);
  const handleSearchClick = () => {
    setSearch(true);
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
        <a className="btn btn-ghost normal-case text-xl">WatchWat</a>
      </div>
      {searchButtonDisplay}
    </div>
  );
}

export default NavBar;
