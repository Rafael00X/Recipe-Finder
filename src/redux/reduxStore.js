import { configureStore } from "@reduxjs/toolkit";

import recipeReducer from "./slice/recipeSlice";

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
  },
});

export { store };
