import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Meals({ meal, onDelete, onAddToMealPlan, onUpdateIngredients }) {
  const [showForm, setShowForm] = useState(false);
  const [mealTime, setMealTime] = useState("breakfast");
  const [day, setDay] = useState("sunday");
  const [showIngredientForm, setShowIngredientForm] = useState(false);
  const [ingredients, setIngredients] = useState(meal.ingredients.join(", "));
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://meal-app-server.onrender.com/mealPlan/${day}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [mealTime]: meal.name,
      }),
    }).then(() => {
      setShowForm(false);
      onAddToMealPlan(day, mealTime, meal.name);
    });
  };

  const handleUpdateIngredients = (e) => {
    e.preventDefault();
    const updatedIngredients = ingredients
      .split(",")
      .map((item) => item.trim());

    fetch(`https://meal-app-server.onrender.com/meals/${meal.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: updatedIngredients,
      }),
    }).then((response) => {
      if (response.ok) {
        onUpdateIngredients(meal.id, updatedIngredients);
        setShowIngredientForm(false);
      }
    });
  };

  return (
    <div className="w-56 m-4 border-2 text-center flex flex-col">
      <div className="w-56 h-20 flex items-center justify-center">
        <h3 className="meal-title text-wrap w-52">{meal.name}</h3>
      </div>
      {meal.image ? (
        <img
          className="w-56 h-56 object-cover"
          src={meal.image}
          alt={meal.name}
          onClick={() => {
            navigate(`/meal-details/${meal.id}`, {
              state: { ...meal },
            });
          }}
        />
      ) : (
        <div className="w-56 h-56"></div>
      )}

      {showIngredientForm ? (
        <form onSubmit={handleUpdateIngredients} className="mt-2">
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full p-1 border rounded"
            rows="3"
          />
          <button
            type="submit"
            className="bg-green-500 text-white font-bold hover:bg-green-600 mt-2 w-full"
          >
            Update Ingredients
          </button>
        </form>
      ) : (
        <button
          onClick={() => setShowIngredientForm(true)}
          className="mt-2 bg-green-500 text-white font-bold hover:bg-green-600"
        >
          Edit Ingredients
        </button>
      )}

      {showForm ? (
        <form className="mt-4" onSubmit={handleSubmit}>
          <select
            value={mealTime}
            onChange={(e) => setMealTime(e.target.value)}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="sunday">Sunday</option>
            <option value="monday">Monday</option>
            <option value="tuesday">Tuesday</option>
            <option value="wednesday">Wednesday</option>
            <option value="thursday">Thursday</option>
            <option value="friday">Friday</option>
            <option value="saturday">Saturday</option>
          </select>
          <input
            type="submit"
            className="bg-blue-100 font-bold hover:bg-blue-200 w-full"
          />
        </form>
      ) : (
        <button
          onClick={() => setShowForm(!showForm)}
          className="mt-4 bg-blue-100 font-bold hover:bg-blue-200"
        >
          Add to Meal Plan
        </button>
      )}
    </div>
  );
}

export default Meals;
