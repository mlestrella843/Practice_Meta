// App.js
import React, { useState } from 'react';
import MealsList from './components/lifting_state_up/MealsList';
import Counter from './components/lifting_state_up/Counter';

function App() {
  const [meals, setMeals] = useState([
    { id: 1, name: 'Pasta' },
    { id: 2, name: 'Salad' },
    { id: 3, name: 'Burger' }
  ]);

  // Function to handle adding meals or updating state, if needed
  const addMeal = (newMeal) => {
    setMeals([...meals, newMeal]);
  };

  return (
    <div>
      <h1>Meal Tracker</h1>
      <Counter mealCount={meals.length} />
      <MealsList meals={meals} addMeal={addMeal} />
    </div>
  );
}

export default App;
