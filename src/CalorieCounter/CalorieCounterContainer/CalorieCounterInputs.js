import React from 'react';
import '../../index.css';
import '../CalorieCounter.css';

export default function FoodInput(props) {
    return (
        <ul className="list calorie-counter__group calorie-counter__inputs">
            <li>
                <input type="text" name="description" className="calorie-counter__food-input" 
                placeholder="Description" onChange = {props.handleInputChange}/>
            </li>
            <li>
                <input type="number" name = "calories" className="calorie-counter__food-input" 
                placeholder="Calories" onChange = {props.handleInputChange}/>
            </li>
            <li>
                <input type="number" name = "fat" className="calorie-counter__food-input" 
                placeholder="Fat" onChange = {props.handleInputChange}/>
            </li>
            <li className="calorie-counter__add button button--add">
                <i className="fas fa-plus"></i>
            </li>
            <li className="calorie-counter__label">
                <i className="fas fa-times calorie-counter__dummy-icon"></i>
            </li>
        </ul>
    )
}