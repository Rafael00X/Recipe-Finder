import { useState } from "react";
import fetchData from "../query";

import DisplayCard from "./DisplayCard";

function Search() {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        fetchData({ query: value }, (res) => (setResults(res)));
    }

    console.log(results);

    return (
        <div className="container-fluid">
            <form className="d-flex search-bar" role="search" onSubmit={handleSubmit}>
                <input name="query" className="form-control" type="search" placeholder="Search" aria-label="Search" value={value} onChange={(event) => setValue(event.target.value)} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div className="container">
                <div className="row">
                    
                {results && results.map((result, index) => {
                    const { title, image } = result;
                    return (
                        <div className="col col-md-6 col-lg-auto">
                            <DisplayCard key={index} title={title} image={image} />
                        </div>
                    )
                })}
                
                </div>
            </div>
        </div>
    )
}

export default Search;