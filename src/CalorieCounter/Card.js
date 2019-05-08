import React from 'react';
import '../index.css'
import './CalorieCounter.css'
import Header from './Header'
import ColumnHeaders from './ColumnHeaders';

export default function Card() {
    return (
        <div className="calorie-counter">
            <div class="container">
                <Header />
                <ColumnHeaders />
            </div>
        </div>
    )
}