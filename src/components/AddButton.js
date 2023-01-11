import { useDispatch, useSelector } from "react-redux";
import { addToWatchList, removedFromWatchList } from "../store";
import { BsCheck } from "react-icons/bs";

function AddButton({ show }) {
  const dispatch = useDispatch();

  const watchList = useSelector((state) => {
    return state.watchShows.watchListArray;
  });

  const handleAddClick = () => {
    console.log(watchList);
    console.log("click");
    console.log(show);
    console.log(show.id);
    searchWatchShow(show.id || show.data.id);
  };

  const searchWatchShow = (showId) => {
    if (watchList.find((each) => each.id === showId)) {
      dispatch(removedFromWatchList(showId));
    } else {
      dispatch(addToWatchList(show));
    }
  };

  const watchStatus = watchList.find((each) => each.id === show.id)
    ? "gray"
    : "";

  const symbol = watchStatus ? <BsCheck /> : "+";

  return (
    <button
      className="bg-white text-black active:bg-gray-300 font-bold uppercase text-xs px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-gray-200"
      onClick={handleAddClick}
      style={{ backgroundColor: watchStatus }}
    >
      {symbol}
    </button>
  );
}

export default AddButton;
