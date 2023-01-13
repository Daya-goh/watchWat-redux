import ShowCard from "./ShowCard";
import { useSelector } from "react-redux";
import { FaRegSadTear } from "react-icons/fa";
function FavList() {
  const favArray = useSelector((state) => {
    return state.favShows.favArray;
  });

  let content;

  if (favArray.length < 1) {
    return (
      <div className="text-white flex flex-col items-center mt-10">
        <FaRegSadTear />
        <h1 className="text-center">
          You do have any favorite show... Add shows now!
        </h1>
      </div>
    );
  } else {
    content = favArray.map((show) => {
      return <ShowCard show={show} key={show.id} />;
    });
  }

  return (
    <div className="flex flex-col flow-wrap gap-3 m-5 md:flex-row lg:flex-row">
      {content}
    </div>
  );
}

export default FavList;
