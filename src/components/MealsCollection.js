import React, { useState } from "react";
import Meals from "./Meals";

function MealsCollection({ meals }) {
  const [filter, setFilter] = useState("all");

  const filteredMeals = filter === "all"
  ? meals
  : meals.filter(meal => meal.mealtime === filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  }

  return (
    <div>
      <div className="filter-container">
        <label>Filter Meals:</label>
        <select>
          <option></option>
          <option></option>
          <option></option>
        </select>
      </div>
      <div className="flex flex-wrap ">
        {meals.map((meal) => {
          return <Meals key={meal.id} meal={meal} />;
        })}
      </div>
    </div>
  );
}

export default MealsCollection;
