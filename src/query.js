import axios from "axios";
import { buildUrl } from "./util";

function fetchData(params, callback) {
    const url = buildUrl(params);
    axios
        .get(url)
        .then((res) => {
            const result = {
                recipes: res.data.results,
                totalResults: res.data.totalResults
            }
            callback(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

export default fetchData;
