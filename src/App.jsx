import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from './pages/Home';
import DisplayRecipe from "./components/DisplayRecipe";

import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe" element={<DisplayRecipe />} />
      </Routes>
    </div>
  );
}

export default App;