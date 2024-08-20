import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

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
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-semibold mt-8 mb-4 text-center">{name}</h1>
      <h2 className="text-2xl mb-4">Meal Time: {mealTime}</h2>
      {image === "" ? (
        <img
          className="w-1/4 h-1/4 mb-2"
          src="https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
          alt="Not Available"
        />
      ) : (
        <img className="w-1/4 h-1/4 mb-2" src={image} alt={name} />
      )}
      <div className="flex flex-row gap-4 mb-8">
        <button
          className="bg-green-500 text-white font-bold hover:bg-green-600 mt-2 w-24"
          onClick={() => setShowForm(!showForm)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white font-bold hover:bg-red-600 mt-2 w-24"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <div>
        {showForm ? (
          <form onSubmit={handleUpdateIngredients} className="mt-2">
            <textarea
              value={ingredientsList.join(",")}
              onChange={handleChange}
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
        ) : null}
      </div>
      <div>
        <h4 className="text-3xl">Ingredients:</h4>
        <ul className="list-disc">
          {ingredientsList.map((ingredient) => (
            <li className="ml-8" key={ingredient}>
              {ingredient}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default MealDetails;
