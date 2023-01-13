import { useState } from "react";
import { useSelector } from "react-redux";
import AddButton from "./AddButton";
import LikeButton from "./LikeButton";

function ShowDetail({ show }) {
  const [openTab, setOpenTab] = useState(1);

  const renderedGenre = show?.genre_names?.map((genre, index) => {
    return (
      <h1 key={index} className="text-sm">
        {genre}
      </h1>
    );
  });

  const embedTag = (url) => {
    const tag = url.split("=")[1];
    console.log(tag);
    return tag;
  };

  const handleOverviewClick = () => {
    console.log("overview");
    setOpenTab(1);
  };

  const handleTrailerClick = () => {
    console.log("trailer");
    setOpenTab(2);
  };

  let content;
  if (openTab === 1) {
    content = <h1 className="mt-2 w-full">{show?.plot_overview}</h1>;
  } else if (openTab === 2) {
    content = (
      <iframe
        src={`https://www.youtube.com/embed/${embedTag(
          show.trailer
        )}?autoplay=1`}
        title={show.title}
        allow="autoplay"
        width="560"
        height="315"
        className="mt-2 mx-2"
      />
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${show?.backdrop})`,
      }}
      className=" hero w-screen h-screen"
    >
      <div className="bg-black bg-opacity-50 w-screen h-screen flex flex-col items-start md:flex-row md:items-center">
        <img
          src={show?.poster}
          alt={show?.title}
          className="h-1/3 rounded mt-10 mx-24 md:h-1/2 "
        />

        <div className=" mx-20 text-white md:mt-20 md:mx-20 md:w-1/3 lg:w-1/2">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row items-center gap-2">
              <h1 className="text-4xl font-bold ">{show?.title}</h1>
              <h1>{show?.original_title}</h1>
            </div>
            <div className="flex flex-row gap-2">
              <h1>{show?.release_date}</h1>
              <div className="flex flex-row gap-1">{renderedGenre} </div>
            </div>
            <div>
              <LikeButton show={show} />
              <AddButton show={show} />
            </div>
            <div className="flex flex-row gap-5">
              <h1
                onClick={handleOverviewClick}
                className={`${
                  openTab === 1
                    ? "font-bold bg-white bg-opacity-10 p-2 border-b-2 rounded-xs"
                    : "p-2"
                }`}
              >
                Overview
              </h1>
              <h1
                onClick={handleTrailerClick}
                className={`${
                  openTab === 2
                    ? "font-bold  bg-white bg-opacity-10 p-2 border-b-2 rounded-xs"
                    : "p-2"
                }`}
              >
                Trailer
              </h1>
            </div>
          </div>
          <hr className="" />
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}
export default ShowDetail;
