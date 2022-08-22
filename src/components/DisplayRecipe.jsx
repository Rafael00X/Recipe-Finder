import { useLocation } from "react-router-dom";
import { extractDetails } from "../util";

function DisplayRecipe() {
    const data = useLocation().state;
    const { title, image } = data;
    const [steps, ingredients] = extractDetails(data);

    return (
        <div className="container" style={{ textAlign: "left" }}>
            <br />
            <h1>{title}</h1>
            <img src={image} alt="..." />
            <hr />
            <h2>Ingredients</h2>
            <ol>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.name}</li>
                ))}
            </ol>
            <hr />
            <h2>Steps</h2>
            <ol>
                {steps.map((step, index) => (
                    <li key={index}>{step}</li>
                ))}
            </ol>
        </div>
    );
}

export default DisplayRecipe;
