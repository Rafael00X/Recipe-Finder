import { useSelector } from "react-redux";

import DisplayCard from "./DisplayCard";
import LoadMoreButton from "./LoadMoreButton";

function ItemGrid() {
    const { recipes } = useSelector((state) => {
        console.log(state.recipe)
        return state.recipe;
    });

    if (!recipes) return;

    if (recipes.length === 0) return <h2>No match found</h2>;

    return (
        <div className="container item-grid">
            <div className="row">
                {recipes.map((recipe, index) => {
                    return (
                        <div className="col col-md-6 col-lg-auto">
                            <DisplayCard key={index} data={recipe} />
                        </div>
                    );
                })}
            </div>
            <LoadMoreButton />
        </div>
    );
}

export default ItemGrid;
