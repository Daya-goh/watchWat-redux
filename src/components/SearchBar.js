import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setTerm } from "../store";
import { useFetchShowsQuery } from "../store/api";

function SearchBar() {
  const dispatch = useDispatch();

  const inputTerm = useSelector((state) => {
    return state.shows.searchTerm;
  });
  //   const { data, error, isLoading } = useFetchShowsQuery(inputTerm);

  const handleChange = (event) => {
    dispatch(setTerm(event.target.value));
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    console.log(inputTerm);
    const key = "Xi2NW1MlhJARxSqBIbyUJD68ZjljDinK2iKSzG6F";
    const searchURL = `https://api.watchmode.com/v1/autocomplete-search/?apiKey=${key}&search_field=name&search_value=${inputTerm}&search_type=2`;
    const response = await axios.get(searchURL);
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="search"
        className="input input-bordered w-54 max-w-xs h-8 text-sm"
        onChange={handleChange}
        value={inputTerm}
      />
    </form>
  );
}
export default SearchBar;
