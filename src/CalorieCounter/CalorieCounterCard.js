import React from 'react';
import '../index.css';
import './CalorieCounter.css';
import CalorieCounterHeader from './CalorieCounterHeader';
import CalorieCounterColumnHeaders from './CalorieCounterColumnHeaders';
import CalorieCounterContainer from './CalorieCounterContainer/CalorieCounterContainer';

export default function CalorieCounterCard() {
    return (
        <div className="calorie-counter">
            <div className="container">
                <CalorieCounterHeader />
                <div className="calorie-counter__wrapper">
                    <CalorieCounterColumnHeaders />
                    <CalorieCounterContainer/>
                </div>
            </div>
        </div>
    )
}