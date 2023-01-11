import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import FavListPage from "./pages/FavListPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SearchResultPage from "./pages/SearchResultPage";
import ShowDetailPage from "./pages/ShowDetailPage";
import WatchListPage from "./pages/WatchListPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/searchResults/:searchTerm"
            element={<SearchResultPage />}
          />
          <Route path="/:name/:id" element={<ShowDetailPage />} />
          <Route path="/favlist" element={<FavListPage />} />
          <Route path="/watchlist" element={<WatchListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
