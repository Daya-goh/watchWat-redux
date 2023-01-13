import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import searchData from "../Data/SearchResultData";
import {
  inputStatus,
  resetData,
  setSearchData,
  setTerm,
  setInputStatus,
} from "../store";
// import { useFetchShowsQuery } from "../store/api";

function SearchBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const inputTerm = useSelector((state) => {
    return state.shows.searchTerm;
  });

  const handleChange = (event) => {
    dispatch(setTerm(event.target.value));
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    const key = "nmHHQa7DASZOcKZoR9Ok3bcbzXbS6ocMNhw1H1FF";
    const searchURL = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${key}&search_field=name&search_value=${inputTerm}&search_type=2`;
    const response = await axios.get(searchURL);
    console.log(response.data);
    dispatch(setSearchData(response.data.results));
    // dispatch(setData(searchData));
    dispatch(setInputStatus(false));
    navigate(`/searchResults/${inputTerm}`);
    // dispatch(resetData());
  };

  const handleOnBlur = (event) => {
    dispatch(setInputStatus(false));
  };

  return (
    <form onSubmit={handleSearchSubmit} className="mx-3">
      <input
        type="text"
        placeholder="search"
        className="input input-bordered w-20 h-8 text-sm mx-10 md:mx-3 md:w-56"
        onChange={handleChange}
        value={inputTerm}
        onBlur={handleOnBlur}
      />
    </form>
  );
}
export default SearchBar;
