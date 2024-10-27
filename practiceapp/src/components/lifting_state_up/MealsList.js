// MealsList.js
import React from 'react';
import MealItem from './MealItem';

function MealsList({ meals, addMeal }) {
  console.log("function addMeal into App component", meals);
  return (
    <div>
      <h2>Meals:</h2>
      {meals.map((meal) => (
        <MealItem key={meal.id} name={meal.name} />
      ))}
      <button onClick={() => addMeal({ id: 4, name: 'Pizza' })}>Add Pizza</button>
    </div>
  );
}

export default MealsList;