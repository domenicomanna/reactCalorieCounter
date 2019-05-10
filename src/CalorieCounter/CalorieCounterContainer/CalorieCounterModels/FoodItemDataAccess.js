import FoodItemModel from './FoodItemModel.js';

export default function FoodItemDataAccess(){
    this.foodItems = [
        {id: 1, description: 'ham', calories: '100', fat: '1002' },
        {id: 2, description: 'ham', calories: '100', fat: '1002' },
        {id: 3, description: 'ham', calories: '100', fat: '1002' }
    ];
}

FoodItemDataAccess.prototype.addFoodItem = function(FoodItem){
    this.foodItems.push(FoodItem);
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