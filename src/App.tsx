import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SpellList from "./pages/SpellList";
import Favourites from "./pages/Favourites";
import SpellDetails from "./pages/SpellDetails";
import { SearchProvider } from "./context/search-context";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="app-container">
      <SearchProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<SpellList />} />
            <Route path="/spell/:id" element={<SpellDetails />} />
            <Route path="/favourites" element={<Favourites />} />
          </Routes>
        </Router>
      </SearchProvider>
    </div>
  );
}

export default App;
