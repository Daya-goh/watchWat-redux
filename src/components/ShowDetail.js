function ShowDetail({ show }) {
  const renderedGenre = show.genre_names.map((genre) => {
    return <h1 className="text-sm">{genre}</h1>;
  });

  const embedTag = (url) => {
    const tag = url.split("=")[1];
    console.log(tag);
    return tag;
  };

  return (
    <div
      style={{
        backgroundImage: `url(${show.backdrop})`,
      }}
      className=" hero w-screen h-screen flex flex-row"
    >
      <div className="bg-white bg-opacity-30 w-screen h-screen flex flex-row">
        <div className="h-screen flex flex-row items-center justify-around w-1/2">
          <iframe
            src={`https://www.youtube.com/embed/${embedTag(
              show.trailer
            )}?autoplay=1`}
            title={show.title}
            allow="autoplay"
            width="560"
            height="315"
            className=""
          />
        </div>
        <div className="flex flex-col justify-start w-1/2">
          <h1 className="text-4xl font-bold">{show.title}</h1>
          <h1>{show.original_title}</h1>
          <h1>{show.release_date}</h1>
          <div className="flex flex-row gap-1">{renderedGenre} </div>
          <hr />
          <h1 className="">{show.plot_overview}</h1>
        </div>
      </div>
    </div>
  );
}
export default ShowDetail;
