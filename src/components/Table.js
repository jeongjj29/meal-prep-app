import React, { useState, useEffect } from "react";

function Table() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://meal-app-server.onrender.com/mealPlan")
      .then((r) => r.json())
      .then((data) => setMeals(data));
  }, []);

  return (
    <table className="table-auto border-collapse border border-slate-500 w-9/12 mt-20">
      <tr>
        <th></th>
        <th className="border border-slate-500">Sunday</th>
        <th className="border border-slate-500">Monday</th>
        <th className="border border-slate-500">Tuesday</th>
        <th className="border border-slate-500">Wednesday</th>
        <th className="border border-slate-500">Thursday</th>
        <th className="border border-slate-500">Friday</th>
        <th className="border border-slate-500">Saturday</th>
      </tr>
      <tr>
        <th className="border border-slate-500">Breakfast</th>
        <td className="border border-slate-500">
          {meals[0].breakfast ? meals[0].breakfast : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[1].breakfast ? meals[1].breakfast : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[2].breakfast ? meals[2].breakfast : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[3].breakfast ? meals[3].breakfast : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[4].breakfast ? meals[4].breakfast : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[5].breakfast ? meals[5].breakfast : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[6].breakfast ? meals[6].breakfast : "N/A"}
        </td>
      </tr>
      <tr>
        <th>Lunch</th>
        <td className="border border-slate-500">
          {meals[0].lunch ? meals[0].lunch : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[1].lunch ? meals[1].lunch : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[2].lunch ? meals[2].lunch : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[3].lunch ? meals[3].lunch : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[4].lunch ? meals[4].lunch : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[5].lunch ? meals[5].lunch : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[6].lunch ? meals[6].lunch : "N/A"}
        </td>
      </tr>
      <tr>
        <th className="border border-slate-500">Dinner</th>
        <td className="border border-slate-500">
          {meals[0].dinner ? meals[0].dinner : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[1].dinner ? meals[1].dinner : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[2].dinner ? meals[2].dinner : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[3].dinner ? meals[3].dinner : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[4].dinner ? meals[4].dinner : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[5].dinner ? meals[5].dinner : "N/A"}
        </td>
        <td className="border border-slate-500">
          {meals[6].dinner ? meals[6].dinner : "N/A"}
        </td>
      </tr>
    </table>
  );
}

export default Table;
