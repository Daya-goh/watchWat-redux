import { useDispatch, useSelector } from "react-redux";
import { addFavShow, removeFavShow } from "../store";

function LikeButton({ show }) {
  const dispatch = useDispatch();

  const handleLikeClick = () => {
    searchFavShow(show.id);
  };

  const searchFavShow = (showId) => {
    if (favShowsArray.find((each) => each.id === showId)) {
      dispatch(removeFavShow(showId));
    } else {
      dispatch(addFavShow(show));
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
      onClick={handleLikeClick}
      style={{ backgroundColor: likeStatus }}
    >
      {heart}
    </button>
  );
}

export default LikeButton;
