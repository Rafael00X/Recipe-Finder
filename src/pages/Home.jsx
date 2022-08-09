import { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import ItemGrid from "../components/ItemGrid";
import DisplayRecipe from "../components/DisplayRecipe";

function Home() {
    const [recipes, setRecipes] = useState([]);
    const [displayRecipe, setDisplayRecipe] = useState(null);

    return (
        <div id="landing-page">
            <Navbar />            
            { displayRecipe === null ?
                <>
                    <SearchBar setRecipes={setRecipes} />
                    <ItemGrid results={recipes} setRecipe={setDisplayRecipe} />
                </>
                :
                <DisplayRecipe data={displayRecipe} setDisplayRecipe={setDisplayRecipe}/>
            }

        </div>
    )
}

export default Home;