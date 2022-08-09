import { useState } from "react";
import fetchData from "../query";

function SearchBar(props) {
    const { setRecipes } = props;
    const [value, setValue] = useState('');

    console.log("SearchBar")

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData({ query: value, addRecipeInformation: true }, (res) => (setRecipes(res)));
    }


    return (
        <div className="container-fluid">
            <form className="d-flex search-bar" role="search" onSubmit={handleSubmit}>
                <input name="query" className="form-control" type="search" placeholder="Search" aria-label="Search" value={value} onChange={(event) => setValue(event.target.value)} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;