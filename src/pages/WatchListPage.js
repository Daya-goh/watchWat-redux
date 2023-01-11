import WatchList from "../components/WatchList";

function WatchListPage() {
  return (
    <div className="bg-zinc-900 flex flex-col items-center gap-2">
      <h1 className="text-white text-3xl font-bold">Watch list</h1>
      <WatchList />
    </div>
  );
}

export default WatchListPage;
