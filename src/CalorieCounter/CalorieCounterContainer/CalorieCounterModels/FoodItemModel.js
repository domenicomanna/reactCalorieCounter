export default function FoodItemModel(id, description, calories, fat){
    if (!lengthIsGreaterThan0(description)){
        throw new Error("A description must be provided");
    }

    if (!lengthIsGreaterThan0(calories)|| !lengthIsGreaterThan0(fat)){
        throw new Error("Calories and fat must be provided");
    }

    if (Number(calories) < 0 || Number(fat) < 0){
        throw new Error("Calories and fat must be greater than 0");
    }

    this.id = id;
    this.description = description;
    this.calories = calories;
    this.fat = fat;
}

function lengthIsGreaterThan0(argument){
    return argument.trim().length > 0;
}