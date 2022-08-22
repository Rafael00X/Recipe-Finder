import { useSelector } from "react-redux";

import DisplayCard from "./DisplayCard";
import LoadMoreButton from "./LoadMoreButton";

function ItemGrid() {
    const { recipes } = useSelector((state) => {
        return state.recipe;
    });

    if (!recipes) return;

    if (recipes.length === 0)
        return (
            <div className="search-error">
                <h2>No match found</h2>
            </div>
        )

    return (
        <div className="container item-grid">
            <div className="row d-flex justify-content-center">
                {recipes.map((recipe, index) => {
                    return (
                        <div key={index} className="col col-md-6 col-lg-auto d-flex justify-content-center">
                            <DisplayCard data={recipe} />
                        </div>
                    );
                })}
            </div>
            <LoadMoreButton />
        </div>
    );
}

export default ItemGrid;
