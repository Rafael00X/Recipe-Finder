import { useSelector } from "react-redux";

import DisplayCard from "./DisplayCard";

function ItemGrid() {
  const recipes = useSelector((state) => {
    return state.recipe.recipes;
  });

  return (
    <div className="container">
      <div className="row">
        {recipes.map((recipe, index) => {
          return (
            <div className="col col-md-6 col-lg-auto">
              <DisplayCard key={index} data={recipe} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemGrid;
