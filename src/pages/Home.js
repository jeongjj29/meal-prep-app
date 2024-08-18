import React, { useEffect, useState } from "react";
import MealsCollection from "../components/MealsCollection";

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://meal-app-server.onrender.com/meals")
      .then((r) => r.json())
      .then((data) => setMeals(data));
  }, []);
  const handleDeleteMeal = (deletedMealId) => {
    setMeals((prevMeals) =>
      prevMeals.filter((meal) => meal.id !== deletedMealId)
    );
  };

  return (
    <div>
      <MealsCollection meals={meals} onDeleteMeal={handleDeleteMeal} />
    </div>
  );
}

export default Home;