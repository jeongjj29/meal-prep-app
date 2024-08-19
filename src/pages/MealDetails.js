import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../index.css";

function MealDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, image, ingredients, mealTime, name } = location.state;
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
    <div className="mealdetail-details">
      <h1 className="mealdetail-title">{name}</h1>
      <h2 className="mealdetail-time">Meal Time: {mealTime}</h2>
      {image === "" ? (
        <img
          className="mealdetail-image"
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          alt="Not Available"
        />
      ) : (
        <img className="mealdetail-image" src={image} alt={name} />
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
      <div>
        <h4 className="ingredients-title">Ingredients:</h4>
        <ul className="ingredient-list">
          {ingredientsList.map((ingredient) => (
            <li className="ml-8" key={ingredient}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className="button-group">
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
