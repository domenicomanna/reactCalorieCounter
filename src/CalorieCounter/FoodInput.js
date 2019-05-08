import React from 'react';
import '../index.css';
import './CalorieCounter.css';

export default function FoodInput() {
    return (
        <ul className="list calorie-counter__group calorie-counter__inputs">
            <li><input type="text" className="calorie-counter__food-input" placeholder="Description" /></li>
            <li><input type="number" className="calorie-counter__food-input" placeholder="Calories" /></li>
            <li><input type="number" className="calorie-counter__food-input" placeholder="Fat" /></li>
            <li className="calorie-counter__add button button--add">
                <i className="fas fa-plus"></i>
            </li>
            <li className="calorie-counter__label"><i className="fas fa-times calorie-counter__dummy-icon"></i></li>
        </ul>
    )
}