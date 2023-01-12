import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AddButton from "./AddButton";
import LikeButton from "./LikeButton";
import ShowCard from "./ShowCard";

const CarouselImported = ({ shows }) => {
  const navigate = useNavigate();
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  const handleClick = (show) => {
    navigate(`/${show.title}/${show.id}`);
  };

  return (
    <div className="carousel my-12 mx-auto bg-zinc-900">
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className="hover:bg-zinc-800/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="hover:bg-zinc-800/75 text-white w-10 h-full text-center opacity-75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
            disabled={isDisabled("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>

        <div
          ref={carousel}
          className="carousel-container relative flex gap-3 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {shows?.map((show, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-36 h-44 snap-start "
              >
                <div
                  href={show}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{
                    backgroundImage: `url(${show.poster || ""})`,
                  }}
                >
                  <img
                    src={show.poster || ""}
                    alt={show.title}
                    className="w-full aspect-square hidden"
                  />
                </div>
                <div
                  href={show}
                  className="h-full w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-90 bg-black z-10 hover:scale-110 rounded"
                >
                  <img
                    src={show.backdrop}
                    alt={show.tile}
                    className="h-1/2"
                    onClick={() => handleClick(show)}
                  />
                  <h3 className="text-white mx-auto text-xs text-center m-2">
                    {show.title}
                    <div className="absolute bottom-4 inset-x-0 justify-center">
                      <LikeButton show={show} />
                      <AddButton show={show} />
                    </div>
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CarouselImported;
