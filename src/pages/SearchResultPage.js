import { useSelector } from "react-redux";
import SearchResults from "../components/SearchResults";

function SearchResultPage() {
  const inputTerm = useSelector((state) => {
    return state.shows.searchTerm;
  });
  console.log(inputTerm);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-white">Searched for {inputTerm}</h1>
      <SearchResults />
    </div>
  );
}
export default SearchResultPage;
