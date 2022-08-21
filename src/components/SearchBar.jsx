import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import fetchData from "../query";
import { replace } from "../redux/slice/recipeSlice";

function SearchBar() {
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData({ query: value, addRecipeInformation: true, number: 12 }, (res) =>
            dispatch(replace({ ...res, searchString: value }))
        );
        navigate("/");
    };

    return (
        <div className="container-fluid">
            <form className="d-flex search-bar" role="search" onSubmit={handleSubmit} action="/">
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
