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
        <div>
            <form method='get' onSubmit={handleSubmit}>
                <input type="text" name="query" value={value} placeholder='Enter recipe to search' onChange={(event) => setValue(event.target.value)} />
                <input type="submit" value="Search" />
            </form>

            <div>
                {results && results.map((result, index) => 
                    <DisplayCard key={index} data={result} />
                )}
            </div>
        </div>
    )
}

export default Search;