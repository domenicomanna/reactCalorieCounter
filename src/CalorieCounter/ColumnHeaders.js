import React from 'react';
import '../index.css';
import './CalorieCounter.css';

export default function ColumnHeaders(){
    return (
        <ul class="list calorie-counter__group calorie-counter__label-group">
            <li class="calorie-counter__label">Description</li>
            <li class="calorie-counter__label">Calories</li>
            <li class="calorie-counter__label">Fat</li>
            <li class="calorie-counter__label"><i class="fas fa-times calorie-counter__dummy-icon"></i></li>
        </ul>
    )
}
