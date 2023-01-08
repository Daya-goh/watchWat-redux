import { useSelector } from "react-redux";

function SearchResults() {
  const searchResultsData = useSelector((state) => {
    return state.shows.data;
  });
  const renderedSearchResults = searchResultsData.map((result) => {
    return <div key={result.id}>{result.name}</div>;
  });

  return <div>{renderedSearchResults}</div>;
}

export default SearchResults;
