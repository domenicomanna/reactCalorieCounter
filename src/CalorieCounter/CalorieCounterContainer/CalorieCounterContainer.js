import React, { Component } from 'react';
import CalorieCounterFoodList from './CalorieCounterFoodList';
import CalorieCounterInputs from './CalorieCounterInputs';
import CalorieCounterTotals from './CalorieCounterTotals';
import FoodItemDataAccess from './CalorieCounterModels/FoodItemDataAccess'

export default class CalorieCounterContainer extends Component {
    constructor(props) {
        super(props);
        this.foodItemsDataAccess = new FoodItemDataAccess();
        this.id = 10;

        this.state = {
            foodItems: this.foodItemsDataAccess.getFoodItems(),
            foodTotals: this.foodItemsDataAccess.getFoodTotals(),
            currentFoodItem: {
                description: '',
                calories: '',
                fat: ''
            }
        }
    }


    handleInputChange = event => {
        let currentFoodItem = {...this.state.currentFoodItem};
        currentFoodItem[event.target.name] = event.target.value;
        this.setState({
            currentFoodItem: currentFoodItem
        })
    }

    render() {
        console.log(this.state.currentFoodItem);
        return (
            <div>
                <CalorieCounterFoodList foodItems={this.state.foodItems} />
                <CalorieCounterTotals foodTotals={this.state.foodTotals} />
                <CalorieCounterInputs description={this.state.currentFoodItem.description}
                    calories={this.state.currentFoodItem.calories} fat={this.state.currentFoodItem.fat}
                    handleInputChange={this.handleInputChange} />
            </div>
        );
    }
}