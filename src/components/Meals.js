import React from "react";

function Meals({ meal }) {
  return (
    <div className="w-56 m-4 border-2 items-center justify-center text-center">
      <h3 className="meal-title text-wrap">{meal.name}</h3>
      <img
        className="w-52 h-52 object-cover"
        src={meal.image}
        alt={meal.name}
      />
      <ul className="">
        <h4 className="bold">Ingredients:</h4>
        {meal.ingredients.map((ingredient, index) => {
          return (
            <li className="italic" key={ingredient}>
              {ingredient}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Meals;
