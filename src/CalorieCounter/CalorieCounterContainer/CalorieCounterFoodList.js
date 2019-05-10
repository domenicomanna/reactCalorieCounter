import React from 'react';
import '../../index.css';
import '../CalorieCounter.css';
import CalorieCounterFoodItem from './CalorieCounterFoodItem';

export default function CalorieCounterFoodList(props) {
    if (props.foodItems.length === 0) var foodListStyle = { display: "none" };

    let foods = props.foodItems.map((food, index) => {
        return <CalorieCounterFoodItem key={food.id}
            description={food.description}
            calories={food.calories}
            fat={food.fat}
            handleFoodDeletion={props.handleFoodDeletion}
            index={index} />
    })

    return (
        <ul className="list calorie-counter__list-items"
            style={foodListStyle}> {foods}
        </ul>
    );

}