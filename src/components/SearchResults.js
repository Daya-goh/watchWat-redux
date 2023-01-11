import { useSelector } from "react-redux";
import searchData from "../Data/SearchResultData";
import ShowCard from "./ShowCard";
import { FaRegSadTear } from "react-icons/fa";

function SearchResults() {
  //* for api search -> currently use imported data
  const searchResultsData = useSelector((state) => {
    return state.shows.searchData;
  });

  const searchTerm = useSelector((state) => {
    return state.shows.searchTerm;
  });

  let content;
  const renderedSearchResults = searchResultsData.map((result) => {
    return <ShowCard key={result.id} show={result} />;
  });

  if (searchResultsData.length < 1) {
    content = (
      <div className="text-white flex flex-col items-center mt-10">
        {" "}
        <FaRegSadTear />
        <h1 className="text-center">
          Sorry, cannot find shows with title "{searchTerm}"...
        </h1>
      </div>
    );
  } else {
    content = renderedSearchResults;
  }

  return (
    <div className="flex flex-row flex-wrap gap-5 m-10 justify-center ">
      {content}
    </div>
  );
}

export default SearchResults;
