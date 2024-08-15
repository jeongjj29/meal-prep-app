import React from "react";

function Meals({ meal }) {
  return (
    <div>
      <h3>{meal.name}</h3>
      <img src={meal.image} />
      <ul>
        {meal.ingredients.map((ingredient, index) => {
          return <li key={ingredient}>{ingredient}</li>;
        })}
      </ul>
    </div>
  );
}

export default Meals;
