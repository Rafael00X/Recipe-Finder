import { useDispatch, useSelector } from "react-redux";

import fetchData from "../query";
import { add } from "../redux/slice/recipeSlice";

function LoadMoreButton() {
    const dispatch = useDispatch();
    const { recipes, totalResults, searchString } = useSelector((state) => {
        return state.recipe;
    });
    const recipeCount = recipes.length;

    if (recipeCount === totalResults) return;

    const handleClick = () => {
        fetchData({ query: searchString, addRecipeInformation: true, number: 12, offset: recipeCount }, (res) => {
            dispatch(add({ ...res, searchString }));
        });
    };

    return (
        <button className="btn btn-success load-btn" onClick={handleClick}>
            Load More Results
        </button>
    );
}

export default LoadMoreButton;
