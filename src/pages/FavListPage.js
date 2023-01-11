import FavList from "../components/FavList";

function FavListPage() {
  return (
    <div className="bg-zinc-900 flex flex-col items-center gap-2">
      <h1 className="text-white text-3xl font-bold">Fav list</h1>
      <FavList />
    </div>
  );
}

export default FavListPage;
