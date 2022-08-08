import { useState } from "react";
import axios from "axios";
import { urlBuilder } from "../util";

import DisplayCard from "../components/DisplayCard";

function Search() {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);

    const handleSubmit = (event) => {
    event.preventDefault();

    const url = urlBuilder({ query: value });
    console.log(url)
    axios.get(url)
        .then((res) => {
            console.log(res)
            setResults(res.data.results)
            
        })
        .catch((err) => {
            console.log(err)
        });

  }

  console.log(results)

    return (
        <div className="container-fluid">
            <form className="d-flex search-bar" role="search" onSubmit={handleSubmit}>
                <input name="query" className="form-control" type="search" placeholder="Search" aria-label="Search" value={value} onChange={(event) => setValue(event.target.value)} />
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>

            <div className="mb-4">
                {results && results.map((result, index) => 
                    <DisplayCard key={index} data={result} />
                )}
            </div>
        </div>
    )
}

export default Search;