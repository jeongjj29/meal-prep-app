import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";

function MealDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, image, ingredients, mealTime, name, calories, recipe } =
    location.state;
  const [showForm, setShowForm] = useState(false);
  const [ingredientsList, setIngredientsList] = useState(ingredients);

  const handleDelete = () => {
    fetch(`https://meal-app-server.onrender.com/meals/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  const handleChange = (e) => {
    const updatedIngredientsList = e.target.value;
    setIngredientsList(updatedIngredientsList.split(","));
  };

  const handleUpdateIngredients = (e) => {
    e.preventDefault();

    fetch(`https://meal-app-server.onrender.com/meals/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ingredients: ingredientsList,
      }),
    }).then((response) => {
      if (response.ok) {
        setShowForm(false);
      }
    });
  };

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-5xl font-semibold mt-8 mb-4 text-center w-3/4 w-full bg-green-100 rounded-lg p-4">
        {name}
      </h1>
      <h2 className="text-2xl mb-4 bg-blue-100 rounded">
        Meal Time: {mealTime}
      </h2>
      {image === "" ? (
        <img
          className="w-1/2 h-auto mb-2"
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          alt="Not Available"
        />
      ) : (
        <img className="w-1/2 h-auto mb-2" src={image} alt={name} />
      )}
      <div>
        {showForm ? (
          <form onSubmit={handleUpdateIngredients} className="update-form">
            <textarea
              value={ingredientsList.join(",")}
              onChange={handleChange}
              className="form-input"
              rows="3"
            />
            <button type="submit" className="submit-button">
              Update Ingredients
            </button>
          </form>
        ) : null}
      </div>
      <div className="flex flex-col items-center space-y-6 w-full text-center">
        <div className="w-full bg-red-100 rounded-lg p-4">
          <h3 className="text-3xl font-bold mb-2">Calories:</h3>
          <p className="text-xl">{calories}</p>
        </div>
        <div className="w-full bg-green-100 rounded-lg p-4">
          <h3 className="text-3xl font-bold mb-2">Ingredients:</h3>
          <p className="text-xl">{ingredientsList.join(", ")}</p>
        </div>
        <div className="w-full bg-blue-100 rounded-lg p-4">
          <h3 className="text-3xl font-bold mb-2">Recipe:</h3>
          <p className="text-xl">{recipe}</p>
        </div>
      </div>
      <div className="flex justify-center gap-4 pad-4">
        <button className="edit-button" onClick={() => setShowForm(!showForm)}>
          Change Ingredient List
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Remove Meal Permanently
        </button>
      </div>
    </div>
  );
}

export default MealDetails;
