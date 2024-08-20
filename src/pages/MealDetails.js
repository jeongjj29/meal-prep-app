import React from "react";
import { useLocation } from "react-router-dom";

function MealDetails() {
  const location = useLocation();
  const { id, image, ingredients, mealTime, name } = location.state;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-semibold mt-8 mb-4">{name}</h1>
      <h2 className="text-2xl mb-4">Meal Time: {mealTime}</h2>
      <img className="w-1/2 mb-8" src={image} alt={name} />
      <div>
        <h4 className="text-3xl">Ingredients:</h4>
        <ul className="list-disc">
          {ingredients.map((ingredient) => (
            <li className="ml-6" key={ingredient}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MealDetails;
