import React from 'react';
import '../../index.css'
import '../CalorieCounter.css'

export default function CalorieCounterFoodItem(props) {

    return (
        <li className="calorie-counter__food-item">
            <ul className="list calorie-counter__group">
                <li><span className="calorie-counter__food-detail">{props.description}</span></li>
                <li><span className="calorie-counter__food-detail">{props.calories}</span></li>
                <li><span className="calorie-counter__food-detail">{props.fat}</span></li>
                <li className="calorie-counter__label">
                    <i className="fas fa-times calorie-counter__delete button"
                    onClick = { _ => {props.handleFoodDeletion(props.index)} }></i>
                </li>
            </ul>
        </li>
    );
}