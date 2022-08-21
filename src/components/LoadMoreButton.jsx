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
        console.log(`Before query, searchString = ${searchString}`)
        fetchData({ query: searchString, addRecipeInformation: true, number: 12, offset: recipeCount }, (res) => {
            console.log("From LoadMoreButton")
            console.log(res)
            dispatch(add({ ...res, searchString }))
        }
        );
    };

    return (
        <button className="btn btn-outline-success load-btn" onClick={handleClick}>
            Load More
        </button>
    );
}

export default LoadMoreButton;