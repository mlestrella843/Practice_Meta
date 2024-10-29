// App.js
// import React, { useState, createContext } from 'react';
// import MealsList from './components/lifting_state_up/MealsList';
// import Counter from './components/lifting_state_up/Counter';

// import Counter from './components/ContextApi/Counter'
// import MealsList from './components/ContextApi/MealsList';


//*Lifting State up App.
// function App() {
//   const [meals, setMeals] = useState([
//     { id: 1, name: 'Pasta' },
//     { id: 2, name: 'Salad' },
//     { id: 3, name: 'Burger' }
//   ]);

//   // Function to handle adding meals or updating state, if needed
//   const addMeal = (newMeal) => {
//     setMeals([...meals, newMeal]);
//   };

//   return (
//     <div>
//       <h1>Meal Tracker</h1>
//       <Counter mealCount={meals.length} />
//       <MealsList meals={meals} addMeal={addMeal} />
//     </div>
//   );
// }

// export default App;

//*Using ContextAPI
// // Create context
// export const MealsContext = createContext();

// export function App() {
//   const [meals, setMeals] = useState([
//     { id: 1, name: 'Pizza' },
//     { id: 2, name: 'Burger' },
//     { id: 3, name: 'Pasta' },
//   ]);

  
//   return (
//     <MealsContext.Provider value={{ meals, setMeals }}>
//       <MealsList />
//       <Counter />
//     </MealsContext.Provider>
//   );
  
// }
// export default App;

//* useReducer Hook

// import React from 'react';
// import Counter from './components/useReducer/Counter';

// function App() {
//   return (
//     <div>
//       <h1>My Counter App</h1>
//       <Counter />
//     </div>
//   );
// }

// export default App;

//* Lab 
import React from "react";
import Fruits from "./components/Lab/Fruits";
import FruitsCounter from "./components/Lab/FruitsCounter";

function App() {
  const [fruits] = React.useState([
    { fruitName: 'apple', id: 1 },
    { fruitName: 'apple', id: 2 },
    { fruitName: 'plum', id: 3 },
]);
  return (
    <div className="App">
      <h1>Where should the state go?</h1>
      <Fruits fruits={fruits}/>
      <FruitsCounter fruits={fruits}/>
    </div>
  );
}

export default App;
