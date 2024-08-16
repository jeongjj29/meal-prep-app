import React from "react";

function Meals({ meal }) {
  return (
    <div>
      <h3 className="meal-title">{meal.name}</h3>
      <img className="meal-image" src={meal.image} alt={meal.name} />
      <ul className="ingredient-list">
        Ingredients:
        {meal.ingredients.map((ingredient, index) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
}

export default Meals;
