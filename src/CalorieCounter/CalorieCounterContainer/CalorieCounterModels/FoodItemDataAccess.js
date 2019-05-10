import FoodItemModel from './FoodItemModel.js';

export default function FoodItemDataAccess(){
    this.foodItems = [];
}

FoodItemDataAccess.prototype.addFoodItem = function(FoodItem){
    this.foodItems.push(FoodItem);
}

FoodItemDataAccess.prototype.removeFoodItem = function(index){
    this.foodItems.splice(index, 1);
}

// Returns a deepy copy of the all the food items
FoodItemDataAccess.prototype.getFoodItems = function(){
    let deepCopy = this.foodItems.map(food =>{
        return new FoodItemModel(food.id, food.description, food.calories, food.fat);
    })
    return deepCopy;
}

FoodItemDataAccess.prototype.getFoodTotals = function(){
    let foodTotals = { calories: 0, fat: 0};

    this.foodItems.forEach(foodItem =>{
        foodTotals.calories += Number(foodItem.calories);
        foodTotals.fat += Number(foodItem.fat);
    })

    return foodTotals;
}