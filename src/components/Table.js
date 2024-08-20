import React, { useState, useEffect } from "react";

function Table({ mealPlan }) {
  return (
    <table className="table-auto border-collapse border border-slate-500 w-9/12 mt-20 ml-auto mr-auto text-center">
      <thead>
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
      </thead>
      <tbody>
        <tr>
          <th className="border border-slate-500">Breakfast</th>
          <td className="border border-slate-500">{mealPlan[0].breakfast}</td>
          <td className="border border-slate-500">{mealPlan[1].breakfast}</td>
          <td className="border border-slate-500">{mealPlan[2].breakfast}</td>
          <td className="border border-slate-500">{mealPlan[3].breakfast}</td>
          <td className="border border-slate-500">{mealPlan[4].breakfast}</td>
          <td className="border border-slate-500">{mealPlan[5].breakfast}</td>
          <td className="border border-slate-500">{mealPlan[6].breakfast}</td>
        </tr>
        <tr>
          <th>Lunch</th>
          <td className="border border-slate-500">{mealPlan[0].lunch}</td>
          <td className="border border-slate-500">{mealPlan[1].lunch}</td>
          <td className="border border-slate-500">{mealPlan[2].lunch}</td>
          <td className="border border-slate-500">{mealPlan[3].lunch}</td>
          <td className="border border-slate-500">{mealPlan[4].lunch}</td>
          <td className="border border-slate-500">{mealPlan[5].lunch}</td>
          <td className="border border-slate-500">{mealPlan[6].lunch}</td>
        </tr>
        <tr>
          <th className="border border-slate-500">Dinner</th>
          <td className="border border-slate-500">{mealPlan[0].dinner}</td>
          <td className="border border-slate-500">{mealPlan[1].dinner}</td>
          <td className="border border-slate-500">{mealPlan[2].dinner}</td>
          <td className="border border-slate-500">{mealPlan[3].dinner}</td>
          <td className="border border-slate-500">{mealPlan[4].dinner}</td>
          <td className="border border-slate-500">{mealPlan[5].dinner}</td>
          <td className="border border-slate-500">{mealPlan[6].dinner}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
