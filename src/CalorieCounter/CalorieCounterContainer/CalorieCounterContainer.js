import React, { Component } from 'react';
import CalorieCounterFoodList from './CalorieCounterFoodList';
import CalorieCounterInputs from './CalorieCounterInputs';
import CalorieCounterTotals from './CalorieCounterTotals';
import FoodItemDataAccess from './CalorieCounterModels/FoodItemDataAccess'
import FoodItemModel from './CalorieCounterModels/FoodItemModel';

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
        let currentFoodItem = { ...this.state.currentFoodItem };
        currentFoodItem[event.target.name] = event.target.value;
        this.setState({
            currentFoodItem: currentFoodItem
        })
    }

    handleFoodItemAdd = _ => {
        try {
            this.addFoodItem();
            this.id++;

            this.setState({
                foodItems: this.foodItemsDataAccess.getFoodItems(),
                currentFoodItem: {
                    description: '',
                    calories: '',
                    fat: ''
                }
            })
        }

        catch (error) {
            alert(error.message);
        }
    }

    addFoodItem = _ => {
        let currentFoodItem = this.state.currentFoodItem;
        let newFoodItem = new FoodItemModel(this.id, currentFoodItem.description,
            currentFoodItem.calories, currentFoodItem.fat);

        this.foodItemsDataAccess.addFoodItem(newFoodItem);
    }

    render() {
        return (
            <div>
                <CalorieCounterFoodList foodItems={this.state.foodItems} />
                <CalorieCounterTotals foodTotals={this.state.foodTotals} />
                <CalorieCounterInputs description={this.state.currentFoodItem.description}
                    calories={this.state.currentFoodItem.calories} fat={this.state.currentFoodItem.fat}
                    handleInputChange={this.handleInputChange}
                    handleFoodItemAdd={this.handleFoodItemAdd} />
            </div>
        );
    }
}