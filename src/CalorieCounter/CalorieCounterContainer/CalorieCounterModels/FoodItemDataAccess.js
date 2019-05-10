export default function FoodItemDataAccess(){
    this.foodItems = [];
}

FoodItemDataAccess.prototype.addFoodItem = function(FoodItem){
    this.foodItems.push(FoodItem);
}

FoodItemDataAccess.prototype.getFoodItems = function(FoodItem){
    return [...this.foodItems];
}

FoodItemDataAccess.prototype.getFoodTotals = function(){
    let foodTotals = { calories: 0, fat: 0};

    this.foodItems.forEach(foodItem =>{
        foodTotals.calories += Number(foodItem.calories);
        foodTotals.fat += Number(foodItem.fat);
    })

    return foodTotals;
}