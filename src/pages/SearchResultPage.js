import { useSelector } from "react-redux";
import SearchResults from "../components/SearchResults";

function SearchResultPage() {
  const inputTerm = useSelector((state) => {
    return state.shows.searchTerm;
  });
  return (
    <div>
      <h1>Searched for {inputTerm}</h1>
      <SearchResults />
    </div>
  );
}
export default SearchResultPage;
