function displayDetails(result) {
    const instructions = result.analyzedInstructions[0].steps;

    const equipments = [];
    const ingredients = [];
    const steps = [];

    instructions.forEach((instruction) => {
        instruction.ingredients.forEach((ing) => addIfUnique(ingredients, ing));
        instruction.equipment.forEach((equ) => addIfUnique(equipments, equ));
        steps.push(instruction.step);
    })

    console.log(equipments)
    console.log(ingredients)
    console.log(steps)

    return [steps, ingredients, equipments];
}

function addIfUnique(list, item) {
    for (let i = 0; i < list.length; i++)
        if (list[i].id === item.id)
            return;
    list.push(item);
}

export default displayDetails;