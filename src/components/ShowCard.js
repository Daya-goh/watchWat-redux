import AddButton from "./AddButton";
import LikeButton from "./LikeButton";

function ShowCard({ show }) {
  return (
    <div key={show.id} className="flex relative h-44 w-32 rounded">
      <img
        src={show.poster}
        alt={show.title}
        className="absolute inset-0 w-full h-full object-cover object-center rounded-sm"
      />
      <div className=" px-8 py-10 relative z-10 w-full border border-gray-200 bg-white transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100 rounded ">
        <div className="absolute inset-0 w-full h-full object-cover object-center ">
          <img src={show.backdrop} alt={show.title} className="rounded-t" />

          <div className="flex flex-col m-2 gap-3 items-center justify-center text-xs text-center">
            <div className="flex flex-col gap-1 ">
              <h1>{show.title}</h1>
              <h1>{show.original_title}</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-5 m-2">
            <LikeButton show={show} />
            <AddButton show={show} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
