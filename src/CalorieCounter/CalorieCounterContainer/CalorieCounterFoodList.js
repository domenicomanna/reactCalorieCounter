import React from 'react';
import '../../index.css';
import '../CalorieCounter.css';
import CalorieCounterFoodItem from './CalorieCounterFoodItem';

export default function CalorieCounterFoodList(props) {
    let foods = props.foods.map(food => {
        return <CalorieCounterFoodItem key={food.id}
            description={food.description}
            calories={food.calories}
            fat={food.fat} />
    })

    return <ul className="list calorie-counter__list-items"> {foods} </ul>;

}