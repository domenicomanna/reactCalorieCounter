import React from 'react';
import '../index.css';
import './CalorieCounter.css';

export default function CalorieCounterColumnHeaders(){
    return (
        <ul className="list calorie-counter__group calorie-counter__label-group">
            <li className="calorie-counter__label">Description</li>
            <li className="calorie-counter__label">Calories</li>
            <li className="calorie-counter__label">Fat (g)</li>
            <li className="calorie-counter__label"><i className="fas fa-times calorie-counter__dummy-icon"></i></li>
        </ul>
    )
}
