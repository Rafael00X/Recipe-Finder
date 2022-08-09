import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {
    add: (state, action) => (state = { recipes: state.recipes.concat(action.payload) }),
    replace: (state, action) => (state = { recipes: action.payload }),
  },
});

export const { add, replace } = recipeSlice.actions;
export default recipeSlice.reducer;
