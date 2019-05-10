import React, { Component } from 'react';
import CalorieCounterFoodList from './CalorieCounterFoodList';
import CalorieCounterInputs from './CalorieCounterInputs';
import CalorieCounterTotals from './CalorieCounterTotals';
import FoodItemDataAccess from './CalorieCounterModels/FoodItemDataAccess'

export default class CalorieCounterContainer extends Component {
    constructor(props){
        super(props);

        this.foodItemsDataAccess = new FoodItemDataAccess();
        this.id = 10;

        this.state = {
            foodItems : this.foodItemsDataAccess.getFoodItems(),
            foodTotals : this.foodItemsDataAccess.getFoodTotals()
        }
    }

    render() {
        return (
            <div>
                <CalorieCounterFoodList foods = {this.state.foodItems} />
                <CalorieCounterTotals foodTotals = {this.state.foodTotals} />
                <CalorieCounterInputs />
            </div>
        );
    }
}