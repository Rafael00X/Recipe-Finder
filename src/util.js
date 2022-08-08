
function urlBuilder(params) {
    const apiKey = "66e7b3b2778a466ba117bbfcef038c96";
    const apiUrl = "https://api.spoonacular.com/recipes/complexSearch";
    let url = `${apiUrl}?apiKey=${apiKey}`;

    Object.entries(params).forEach(([key, value]) => {
        if (value != undefined && value != null && value != "")
            url = url + `&${key}=${value}`;
    });
    return url;
}

export { urlBuilder };