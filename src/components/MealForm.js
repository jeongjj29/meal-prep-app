import React, { useState } from "react";
import "../index.css";

const MealForm = () => {
  const [mealName, setMealName] = useState("");
  const [mealTime, setMealTime] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!mealName || !mealTime || !ingredients) {
      return;
    }

    const mealData = {
      name: mealName,
      mealTime: mealTime,
      ingredients: ingredients.split(",").map((i) => i.trim()),
      image: imageUrl || "https://example.com/images/default-meal.jpg",
    };

    try {
      const response = await fetch(
        "https://meal-app-server.onrender.com/meals",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(mealData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        console.log("Meal added:", result);

        setMealName("");
        setMealTime("");
        setIngredients("");
        setImageUrl("");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="meal-form">
      <div className="form-group">
        <h2 className="form-header">Add a Meal</h2>
        <label htmlFor="mealName" className="form-label">
          Meal Name
        </label>
        <input
          id="mealName"
          type="text"
          value={mealName}
          onChange={(e) => setMealName(e.target.value)}
          placeholder="Enter meal name"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="mealTime" className="form-label">
          When We'll Eat This
        </label>
        <select
          id="mealTime"
          value={mealTime}
          onChange={(e) => setMealTime(e.target.value)}
          className="form-select"
          required
        >
          <option value="">Select meal time</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="ingredients" className="form-label">
          Ingredients
        </label>
        <input
          id="ingredients"
          type="text"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          placeholder="Enter ingredients, separated by commas"
          className="form-input"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="imageUrl" className="form-label">
          Image URL (optional)
        </label>
        <input
          id="imageUrl"
          type="url"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="Enter image URL"
          className="form-input"
        />
      </div>

      <button type="submit" className="submit-button">
        Add Meal
      </button>
    </form>
  );
};

export default MealForm;
