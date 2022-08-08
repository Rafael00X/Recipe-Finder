import axios from "axios";
import { urlBuilder } from "./util";

function fetchData(params, callback) {    
    const url = urlBuilder(params);
    //const url = "https://api.spoonacular.com/recipes/complexSearch?query=pasta&maxFat=25&number=2&addRecipeInformation=true";
    console.log(url)
    axios.get(url)
        .then((res) => {
            console.log(res)
            callback(res.data.results)
            
        })
        .catch((err) => {
            console.log(err)
        });
}

export default fetchData;