import React, { Component } from 'react';
import FoodList from './FoodList';
import CalorieCounterInputs from './CalorieCounterInputs';
import CalorieCounterTotals from './CalorieCounterTotals';

export default class CalorieCounterContainer extends Component {
    render() {
        return (
            <div>
                <FoodList />
                <CalorieCounterTotals />
                <CalorieCounterInputs />
            </div>
        );
    }
}