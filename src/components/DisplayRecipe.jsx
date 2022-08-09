import { useLocation } from "react-router-dom";
import displayDetails from "./displayDetails";

function DisplayRecipe() {
    const data = useLocation().state;
    const { title, image } = data;
    const [ steps, ingredients ] = displayDetails(data);

    return (
        <div className="container" style={{textAlign: "left"}}>
            
            <br/>
            <h1>{title}</h1>
            <img src={image} alt="..."/>
            <hr/>
            <h2>Ingredients</h2>
            <ol>
                {ingredients.map((ing) => <li>{ing.name}</li>)}
            </ol>
            <hr/>
            <h2>Steps</h2>
            <ol>
                {steps.map((step) => (<li>{step}</li>))}
            </ol>
            
        </div>
    )
}

export default DisplayRecipe;