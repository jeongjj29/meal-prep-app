import React from "react";

function MealDetails({ meal }) {
  return (
    <div>
      <h1>{meal.name}</h1>
      <img src={meal.image} alt={meal.name} />
      <p>{meal.mealTime}</p>
      <ul>
        {meal.ingredients.map((ingredient) => (
          <li>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default MealDetails;
