import { useState } from "react";
import { useSelector } from "react-redux";

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
    content = <h1 className="mt-2">{show?.plot_overview}</h1>;
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
        className="mt-2"
      />
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${show?.backdrop})`,
      }}
      className=" hero w-screen h-screen flex flex-row"
    >
      <div className="bg-black bg-opacity-50 w-screen h-screen flex flex-row">
        <div className="h-screen flex flex-row items-center justify-around w-1/2">
          <img src={show?.poster} alt={show?.title} className="h-3/4 rounded" />
        </div>

        <div className="absolute right-8 top-40 w-1/2  m-2  text-white ">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-bold ">{show?.title}</h1>
            <h1>{show?.original_title}</h1>
            <h1>{show?.release_date}</h1>
            <div className="flex flex-row gap-1">{renderedGenre} </div>

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
          <hr />
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}
export default ShowDetail;
