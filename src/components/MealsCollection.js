import React, { useState } from "react";
import Meals from "./Meals";
import "../index.css";

function MealsCollection({ meals, onDeleteMeal }) {
  const [filter, setFilter] = useState("all");

  const filteredMeals =
    filter === "all"
      ? meals
      : meals.filter((meal) => meal.mealTime.toLowerCase() === filter);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleDelete = (mealId) => {
    onDeleteMeal(mealId);
  };

  return (
    <div>
      <div className="filter-container">
        <label htmlFor="mealFilter" className="filter-label">
          Filter Meals:
        </label>
        <select
          id="mealFilter"
          value={filter}
          onChange={handleFilterChange}
          className="filter-select"
        >
          <option value="all">All Meals</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>
      <div className="flex flex-wrap ">
        {filteredMeals.map((meal) => {
          return <Meals key={meal.id} meal={meal} onDelete={handleDelete} />;
        })}
      </div>
    </div>
  );
}

export default MealsCollection;
