import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import AdvancedSearchPage from "../pages/AdvancedSearchPage";
import BookDetails from "../pages/BookDetails";
import SearchResults from "../pages/SearchResults";
import Favorites from "../pages/Favorites";

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/advanced" element={<AdvancedSearchPage />} />{" "}
    <Route path="/book/:id" element={<BookDetails />} />
    <Route path="/search" element={<SearchResults />} />
    <Route path="/favoris" element={<Favorites />} />
  </Routes>
);

export default AppRoutes;
