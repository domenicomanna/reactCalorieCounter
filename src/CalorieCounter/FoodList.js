import React from 'react';
import '../index.css';
import './CalorieCounter.css';
import FoodItem from './FoodItem';

export default function FoodList() {
    return (
        <ul className="list calorie-counter__list-items">
            <FoodItem />
            <FoodItem />
        </ul>
    );
}