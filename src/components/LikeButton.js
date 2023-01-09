import { useDispatch, useSelector } from "react-redux";
import { addShow, removeShow } from "../store";

function LikeButton({ show }) {
  const dispatch = useDispatch();

  const handleAddFavShow = () => {
    console.log(show.title);
    searchFavShow(show.id);
  };

  const searchFavShow = (showId) => {
    if (favShowsArray.find((each) => each.id === showId)) {
      dispatch(removeShow(showId));
    } else {
      dispatch(addShow(show));
    }
  };

  const favShowsArray = useSelector((state) => {
    return state.favShows.favArray;
  });

  const likeStatus = favShowsArray.find((each) => each.id === show.id)
    ? "pink"
    : "";

  const heart = likeStatus ? "♥️" : "♡";

  return (
    <button
      className="bg-white text-black active:bg-gray-300 font-bold uppercase text-xs px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-gray-200"
      onClick={handleAddFavShow}
      style={{ backgroundColor: likeStatus }}
    >
      {heart}
    </button>
  );
}

export default LikeButton;
