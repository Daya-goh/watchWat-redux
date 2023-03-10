import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import LikeButton from "./LikeButton";

function ShowCard({ show }) {
  const navigate = useNavigate();
  const handleShowClick = () => {
    console.log(show.id);
    navigate(`/${show.name}/${show.id}`);
  };

  const showType = show.type.replace("_", " ");

  return (
    <div
      key={show.id}
      className="flex relative h-44 w-32 rounded hover: cursor-pointer bg-zinc-800"
    >
      <img
        src={show.poster || show.image_url}
        alt={show.title || show.name}
        className="absolute inset-0 w-full h-full object-fill object-center rounded-sm"
      />
      <div className="px-8 py-10 relative z-10 w-full h-full border border-gray-200  transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 rounded bg-zinc-800 ">
        <div className="absolute inset-0 object-cover object-center">
          <img
            src={show.backdrop || show.image_url}
            alt={show.title}
            className="rounded-t h-2/5 w-full"
            onClick={handleShowClick}
          />
          <h1 className="text-white text-center text-xs mt-3">
            {show.title || show.name}
          </h1>
          <h1 className="text-white text-center text-xs mt-1">{showType}</h1>
        </div>
        <div className="absolute bottom-0 inset-x-0  w-full p-1">
          <div className="flex flex-row justify-center">
            <LikeButton show={show} />
            <AddButton show={show} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
