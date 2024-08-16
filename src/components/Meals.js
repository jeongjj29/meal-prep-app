import React from "react";

function Meals({ meal }) {
  return (
    <div className="w-56 m-4 border-2 text-center">
      <div className="w-56 h-20 flex items-center justify-center">
        <h3 className="meal-title text-wrap w-52">{meal.name}</h3>
      </div>
      {meal.image ? (
        <img
          className="w-56 h-56 object-cover"
          src={meal.image}
          alt={meal.name}
        />
      ) : (
        <div className="w-56 h-56"></div>
      )}

      <h4 className="font-bold">Ingredients:</h4>
      <ul className="">
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
