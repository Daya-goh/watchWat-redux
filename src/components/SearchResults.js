import { useSelector } from "react-redux";
import searchData from "../Data/SearchResultData";
import ShowCard from "./ShowCard";
function SearchResults() {
  //* for api search -> currently use imported data
  const searchResultsData = useSelector((state) => {
    return state.shows.searchData;
  });

  const renderedSearchResults = searchResultsData.map((result) => {
    return <ShowCard key={result.id} show={result} />;
  });

  return (
    <div className="flex flex-row flex-wrap gap-5 m-10 justify-center ">
      {renderedSearchResults}
    </div>
  );
}

export default SearchResults;
