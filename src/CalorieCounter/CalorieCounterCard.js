import React from 'react';
import '../index.css';
import './CalorieCounter.css';
import Header from './Header';
import ColumnHeaders from './ColumnHeaders';
import CalorieCounterContainer from './CalorieCounterContainer/CalorieCounterContainer';
import FoodTotals from './FoodTotals';
import FoodInput from './FoodInput';

export default function CalorieCounterCard() {
    return (
        <div className="calorie-counter">
            <div className="container">
                <Header />
                <div className="calorie-counter__wrapper">
                    <ColumnHeaders />
                    <CalorieCounterContainer/>
                    <FoodTotals />
                    <FoodInput />
                </div>
            </div>
        </div>
    )
}