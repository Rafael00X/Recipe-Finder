import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Favourites from "./pages/Favourites";
import Profile from "./pages/Profile";
import DisplayRecipe from "./components/DisplayRecipe";

import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/recipe" element={<DisplayRecipe />} />
      </Routes>
    </div>
  );
}

export default App;