import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SpellList from "./pages/SpellList";
import Favourites from "./pages/Favourites";
import SpellDetails from "./pages/SpellDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SpellList />} />
        <Route path="/spell/:id" element={<SpellDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </Router>
  );
}

export default App;
