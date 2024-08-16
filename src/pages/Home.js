import React, { useEffect, useState } from "react";
import MealsCollection from "../components/MealsCollection";

function Home() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://meal-app-server.onrender.com/meals")
      .then((r) => r.json())
      .then((data) => setMeals(data));
  }, []);

  return (
    <div>
      <MealsCollection meals={meals} />
    </div>
  );
}

export default Home;
