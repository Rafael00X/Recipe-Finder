function buildUrl(params) {
    const apiKey = "66e7b3b2778a466ba117bbfcef038c96";
    const apiUrl = "https://api.spoonacular.com/recipes/complexSearch";
    let url = `${apiUrl}?apiKey=${apiKey}`;

    Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== "") url = url + `&${key}=${value}`;
    });
    return url;
}

function extractDetails(result) {
    if (result.analyzedInstructions.length === 0) return [[], [], []];
    const instructions = result.analyzedInstructions[0].steps;

    const equipments = [];
    const ingredients = [];
    const steps = [];

    instructions.forEach((instruction) => {
        instruction.ingredients.forEach((ing) => addIfUnique(ingredients, ing));
        instruction.equipment.forEach((equ) => addIfUnique(equipments, equ));
        steps.push(instruction.step);
    });

    return [steps, ingredients, equipments];
}

function addIfUnique(list, item) {
    for (let i = 0; i < list.length; i++) if (list[i].id === item.id) return;
    list.push(item);
}

export { buildUrl, extractDetails };
