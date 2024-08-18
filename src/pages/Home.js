import React, { useEffect, useState } from "react";
import MealsCollection from "../components/MealsCollection";
import Table from "../components/Table";

function Home() {
  const [meals, setMeals] = useState([]);
  const [mealPlan, setMealPlan] = useState([
    { id: "sunday", breakfast: "", lunch: "", dinner: "" },
    {
      id: "monday",
      breakfast: "",
      lunch: "",
      dinner: "",
    },
    {
      id: "tuesday",
      breakfast: "",
      lunch: "",
      dinner: "",
    },
    {
      id: "wednesday",
      breakfast: "",
      lunch: "",
      dinner: "",
    },
    {
      id: "thursday",
      breakfast: "",
      lunch: "",
      dinner: "",
    },
    {
      id: "friday",
      breakfast: "",
      lunch: "",
      dinner: "",
    },
    {
      id: "saturday",
      breakfast: "",
      lunch: "",
      dinner: "",
    },
  ]);

  useEffect(() => {
    fetch("https://meal-app-server.onrender.com/meals")
      .then((r) => r.json())
      .then((data) => setMeals(data));
    fetch("https://meal-app-server.onrender.com/mealPlan")
      .then((r) => r.json())
      .then((data) => setMealPlan(data));
  }, []);

  const handleDeleteMeal = (deletedMealId) => {
    setMeals((prevMeals) =>
      prevMeals.filter((meal) => meal.id !== deletedMealId)
    );
  };

  const onAddToMealPlan = (day, mealTime, mealName) => {
    const updatedMealPlan = mealPlan.map((obj) => {
      if (obj.id === day) {
        const newObj = { ...obj, [mealTime]: mealName };
        return newObj;
      } else {
        return obj;
      }
    });
    setMealPlan(updatedMealPlan);
  };

  const onUpdateIngredients = (mealId, updatedIngredients) => {
    setMeals((prevMeals) =>
      prevMeals.map((meal) =>
        meal.id === mealId ? { ...meal, ingredients: updatedIngredients } : meal
      )
    );
  };

  return (
    <div className="">
      <Table mealPlan={mealPlan} />
      <MealsCollection
        meals={meals}
        onDeleteMeal={handleDeleteMeal}
        onAddToMealPlan={onAddToMealPlan}
        onUpdateIngredients={onUpdateIngredients}
      />
    </div>
  );
}

export default Home;
