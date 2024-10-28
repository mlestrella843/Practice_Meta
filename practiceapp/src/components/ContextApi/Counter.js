import React, { useContext } from 'react';
import { MealsContext } from '../../App.js'


function Counter() {
  const { meals, setMeals } = useContext(MealsContext);

  const addMeal = () => {
    const newMeal = { id: meals.length + 1, name: `Meal ${meals.length + 1}` };
    setMeals([...meals, newMeal]);
  };

  return (
    <div>
      <h2>Meal Counter</h2>
      <p>Number of meals: {meals.length}</p>
      <button onClick={addMeal}>Add Meal</button>
    </div>
  );
}

export default Counter;