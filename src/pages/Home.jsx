import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ItemGrid from "../components/ItemGrid";

function Home() {
    const [recipes, setRecipes] = useState([]);

    return (
        <div id="landing-page">
            <SearchBar setRecipes={setRecipes} />
            <ItemGrid results={recipes} />
        </div>
    )
}

export default Home;