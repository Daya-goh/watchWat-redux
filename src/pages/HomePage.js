import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel";
import { setShows } from "../store";
import comedyData from "../Data/ComedyData";
import animeData from "../Data/AnimeData";
import CarouselImported from "../components/CarouselImported";

function HomePage() {
  const dispatch = useDispatch();
  const key = "Xi2NW1MlhJARxSqBIbyUJD68ZjljDinK2iKSzG6F";
  const networkUrl = `https://api.watchmode.com/v1/list-titles/?apiKey=${key}&network_ids=511`;

  const carouselShowArray = useSelector((state) => {
    return state.shows.showArray;
  });

  useEffect(() => {
    let codeArray = [];
    const fetchShowsBaseData = async () => {
      const response = await axios.get(networkUrl);
      codeArray = response.data.titles.splice(0, 10);

      const fetchData = await Promise.all(
        codeArray.map((show) => {
          const url = `https://api.watchmode.com/v1/title/${show.imdb_id}/details/?apiKey=${key}`;
          return axios.get(url);
        })
      );
      dispatch(setShows(fetchData));
    };
    fetchShowsBaseData();
  }, []);

  console.log(carouselShowArray);
  return (
    <div>
      <Carousel shows={carouselShowArray} />
      <CarouselImported shows={animeData} />
      <CarouselImported shows={comedyData} />
    </div>
  );
}

export default HomePage;
