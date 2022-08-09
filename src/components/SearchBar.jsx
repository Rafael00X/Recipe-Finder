import { useState } from "react";
import { useDispatch } from "react-redux";

import fetchData from "../query";
import { replace } from "../redux/slice/recipeSlice";

function SearchBar() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData({ query: value, addRecipeInformation: true }, (res) => dispatch(replace(res)));
  };

  return (
    <div className="container-fluid">
      <form className="d-flex search-bar" role="search" onSubmit={handleSubmit}>
        <input
          name="query"
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
