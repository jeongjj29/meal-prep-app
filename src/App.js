import React, { useEffect, useState } from "react";

function App() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/meals")
      .then((r) => r.json())
      .then((data) => setMeals(data));
  }, []);

  return <div>App</div>;
}

export default App;
