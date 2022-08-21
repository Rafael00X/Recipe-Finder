import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recipes: null,
    searchString: null,
    totalResults: 0,
};

const recipeSlice = createSlice({
    name: "recipe",
    initialState,
    reducers: {
        add: (state, action) => (state = { ...state, recipes: state.recipes.concat(action.payload.recipes) }),
        replace: (state, action) => (state = { ...action.payload }),
    },
});

export const { add, replace } = recipeSlice.actions;
export default recipeSlice.reducer;
