import React,{ useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function MealDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id, image, ingredients, mealTime, name } = location.state;
  const [showForm, setShowForm] = useState(false);

  const handleDelete = () => {
    fetch(`https://meal-app-server.onrender.com/meals/${id}`, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-semibold mt-8 mb-4 text-center">{name}</h1>
      <h2 className="text-2xl mb-4">Meal Time: {mealTime}</h2>
      <img className="w-3/4 mb-2" src={image} alt={name} />
      <div className="flex flex-row gap-4 mb-8">
        <button className="bg-green-500 text-white font-bold hover:bg-green-600 mt-2 w-24">
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
        <h4 className="text-3xl">Ingredients:</h4>
        <ul className="list-disc">
          {ingredients.map((ingredient) => (
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
