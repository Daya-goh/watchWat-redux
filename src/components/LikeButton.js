import { useDispatch } from "react-redux";
import { addShow } from "../store";

function LikeButton({ show }) {
  const dispatch = useDispatch();

  const handleAddFavShow = () => {
    console.log(show.title);
    dispatch(addShow(show));
  };
  return (
    <button
      className="bg-white text-black active:bg-gray-300 font-bold uppercase text-xs px-2 py-1 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 border border-gray-200"
      onClick={handleAddFavShow}
    >
      ♡
    </button>
  );
}

export default LikeButton;
