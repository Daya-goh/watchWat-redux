import ShowCard from "./ShowCard";
import { useSelector } from "react-redux";
import { FaRegSadTear } from "react-icons/fa";
function WatchList() {
  const watchList = useSelector((state) => {
    return state.watchShows.watchListArray;
  });

  let content;

  if (watchList.length < 1) {
    return (
      <div className="text-white flex flex-col items-center mt-10">
        <FaRegSadTear />
        <h1 className="text-center">
          You aren't watching any shows? Add one now!
        </h1>
      </div>
    );
  } else {
    content = watchList.map((show) => {
      return <ShowCard show={show} />;
    });
  }

  return <div className="flex flex-row flow-wrap gap-3 mt-5">{content}</div>;
}

export default WatchList;
