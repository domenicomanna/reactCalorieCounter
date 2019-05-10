import React from 'react';
import '../../index.css';
import '../CalorieCounter.css';

export default function FoodTotals(props) {
    return (
        <ul className="list calorie-counter__group calorie-counter__totals">
            <li className="calorie-counter__label">Totals</li>
            <li className="calorie-counter__label">{props.foodTotals.calories}</li>
            <li className="calorie-counter__label">{props.foodTotals.fat}</li>
            <li className="calorie-counter__label"><i className="fas fa-times calorie-counter__dummy-icon"></i></li>
        </ul>
    );
}