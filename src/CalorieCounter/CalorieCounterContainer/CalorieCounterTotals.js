import React from 'react';
import '../../index.css';
import '../CalorieCounter.css';

export default function FoodTotals() {
    return (
        <ul className="list calorie-counter__group calorie-counter__totals">
            <li className="calorie-counter__label">Totals</li>
            <li className="calorie-counter__label">Calories</li>
            <li className="calorie-counter__label">Fat</li>
            <li className="calorie-counter__label"><i className="fas fa-times calorie-counter__dummy-icon"></i></li>
        </ul>
    );
}