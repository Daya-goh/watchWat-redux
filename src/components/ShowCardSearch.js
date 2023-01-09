import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import LikeButton from "./LikeButton";

function ShowCardSearch({ show }) {
  const navigate = useNavigate();
  const handleShowClick = () => {
    console.log(show.id);
    navigate(`/${show.name}/${show.id}`);
  };
  return (
    <div
      key={show.id}
      className="flex relative h-44 w-32 rounded hover: cursor-pointer"
      onClick={handleShowClick}
    >
      <img
        src={show.image_url}
        alt={show.name}
        className="absolute inset-0 w-full h-full object-fill object-center rounded-sm"
      />
      <div className="px-8 py-10 relative z-10 w-full h-full border border-gray-200 bg-white transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 rounded ">
        <div className="absolute inset-0 object-cover object-center">
          <img src={show.image_url} alt={show.title} className="rounded" />

          <div className="relative bottom-9 inset-x-0  w-full bg-gray-200 bg-opacity-20 p-1">
            <div className="flex flex-row justify-center">
              <LikeButton show={show} />
              <AddButton show={show} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCardSearch;
