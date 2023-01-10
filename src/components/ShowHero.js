import koreanData from "../Data/KoreanData";

function ShowHero() {
  const randomNumber = Math.floor(Math.random() * koreanData.length);
  console.log(randomNumber);
  const embedTag = (url) => {
    const tag = url.split("=")[1];
    console.log(tag);
    return tag;
  };
  //! replace koreanData with fetch data of korean carousel
  return (
    <div className="relative">
      <div className="w-screen h-full bg-black absolute top-0 left-0 opacity-50 bg-blend-darken"></div>
      <div className="absolute  top-1/4 left-10 m-2 ">
        <div className="text-white text-5xl font-bold">
          {koreanData[randomNumber].title}
        </div>
        <div className="w-1/2 text-white mt-2">
          {koreanData[randomNumber].plot_overview}
        </div>
        <iframe
          src={`https://www.youtube.com/embed/${embedTag(
            koreanData[randomNumber].trailer
          )}?autoplay=1&mute=1`}
          title={koreanData[randomNumber].title}
          allow="autoplay"
          width="560"
          height="315"
          className="mt-2"
        />
      </div>
      <img
        src={koreanData[randomNumber].backdrop}
        alt={koreanData[randomNumber].title}
        className="w-screen  "
      />
    </div>
  );
}

export default ShowHero;
