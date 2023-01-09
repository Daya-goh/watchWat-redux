import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import SearchResultPage from "./pages/SearchResultPage";
import ShowDetailPage from "./pages/ShowDetailPage";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
