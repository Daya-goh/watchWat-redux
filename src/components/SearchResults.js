import searchData from "../Data/SearchResultData";
import ShowCard from "./ShowCard";
function SearchResults() {
  //* for api search -> currently use imported data
  // const searchResultsData = useSelector((state) => {
  //   return state.shows.data;
  // });

  const renderedSearchResults = searchData.map((result) => {
    return <ShowCard key={result.id} show={result} />;
  });

  return (
    <div className="flex flex-row flex-wrap gap-5 m-10 ">
      {renderedSearchResults}
    </div>
  );
}

export default SearchResults;
