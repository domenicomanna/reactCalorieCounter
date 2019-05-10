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