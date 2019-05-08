import React from 'react';
import '../index.css'
import './CalorieCounter.css'

export default function FoodItem() {
    return (
        <li className="calorie-counter__food-item">
            <ul className="list calorie-counter__group">
                <li><span className="calorie-counter__food-detail">hi</span></li>
                <li><span className="calorie-counter__food-detail">hi</span></li>
                <li><span className="calorie-counter__food-detail">hi</span></li>
                <li className="calorie-counter__label">
                    <i className="fas fa-times calorie-counter__delete button"></i>
                </li>
            </ul>
        </li>
    );
}