import { useState } from "react";
import { useSelector } from "react-redux";

function ShowDetail() {
  const [openTab, setOpenTab] = useState(1);
  const showDetail = useSelector((state) => {
    return state?.shows?.showData;
  });

  const renderedGenre = showDetail?.genre_names?.map((genre, index) => {
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
    content = <h1>{showDetail?.plot_overview}</h1>;
  } else if (openTab === 2) {
    content = (
      <iframe
        src={`https://www.youtube.com/embed/${embedTag(
          showDetail.trailer
        )}?autoplay=1`}
        title={showDetail.title}
        allow="autoplay"
        width="560"
        height="315"
        className=""
      />
    );
  }

  return (
    <div
      style={{
        backgroundImage: `url(${showDetail?.backdrop})`,
      }}
      className=" hero w-screen h-screen flex flex-row"
    >
      <div className="bg-black bg-opacity-50 w-screen h-screen flex flex-row">
        <div className="h-screen flex flex-row items-center justify-around w-1/2">
          <img
            src={showDetail?.poster}
            alt={showDetail?.title}
            className="h-3/4 rounded"
          />
        </div>

        <div className="flex flex-col justify-center w-1/2  gap-2 m-2  text-white ">
          <h1 className="text-4xl font-bold">{showDetail?.title}</h1>
          <h1>{showDetail?.original_title}</h1>
          <h1>{showDetail?.release_date}</h1>
          <div className="flex flex-row gap-1">{renderedGenre} </div>

          <div className="flex flex-row gap-5">
            <h1
              onClick={handleOverviewClick}
              className={`${
                openTab === 1 ? "font-bold bg-white bg-opacity-10 p-2" : "p-2"
              }`}
            >
              Overview
            </h1>
            <h1
              onClick={handleTrailerClick}
              className={`${
                openTab === 2 ? "font-bold  bg-white bg-opacity-10 p-2" : "p-2"
              }`}
            >
              Trailer
            </h1>
          </div>
          <hr />
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}
export default ShowDetail;
