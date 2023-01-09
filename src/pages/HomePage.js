import { useSelector } from "react-redux";

function HomePage() {
  const favShowsArray = useSelector((state) => {
    return state.favShows.favArray;
  });
  return (
    <div>
      <h1> Home Page</h1>
      {favShowsArray.map((show) => {
        return <div>{show.title}</div>;
      })}
    </div>
  );
}

export default HomePage;
