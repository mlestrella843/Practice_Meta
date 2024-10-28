
import React, { useContext } from 'react';
import { MealsContext } from '../../App.js'


function MealsList() {
  const { meals } = useContext(MealsContext);

  return (
    <div>
      <h2>Meals List</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealsList;