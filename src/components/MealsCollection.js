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
        <label className="filter-label">Filter Meals:</label>
        <select
          id="mealFilter"
          value={filter}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="all">All meals</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="flex flex-wrap ">
        {filteredMeals.map((meal) => {
          return <Meals key={meal.id} meal={meal} />;
        })}
      </div>
    </div>
  );
}

export default MealsCollection;
