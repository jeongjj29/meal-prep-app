import React from "react";
import Meals from "./Meals";

function MealsCollection({ meals }) {
  return (
    <div className="flex flex-wrap ">
      {meals.map((meal) => {
        return <Meals key={meal.id} meal={meal} />;
      })}
    </div>
  );
}

export default MealsCollection;
