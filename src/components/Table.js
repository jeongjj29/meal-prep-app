import React, { useState, useEffect } from "react";

function Table({ mealPlan }) {
  return (
    <table className="meal-plan-table">
      <thead className="meal-plan-table-header">
        <tr>
          <th className="meal-plan-table-cell"></th>
          <th className="meal-plan-table-cell">Sunday</th>
          <th className="meal-plan-table-cell">Monday</th>
          <th className="meal-plan-table-cell">Tuesday</th>
          <th className="meal-plan-table-cell">Wednesday</th>
          <th className="meal-plan-table-cell">Thursday</th>
          <th className="meal-plan-table-cell">Friday</th>
          <th className="meal-plan-table-cell">Saturday</th>
        </tr>
      </thead>
      <tbody>
        <tr className="meal-plan-table-row-alt">
          <th className="meal-plan-table-meal-header">Breakfast</th>
          <td className="meal-plan-table-cell">{mealPlan[0].breakfast}</td>
          <td className="meal-plan-table-cell">{mealPlan[1].breakfast}</td>
          <td className="meal-plan-table-cell">{mealPlan[2].breakfast}</td>
          <td className="meal-plan-table-cell">{mealPlan[3].breakfast}</td>
          <td className="meal-plan-table-cell">{mealPlan[4].breakfast}</td>
          <td className="meal-plan-table-cell">{mealPlan[5].breakfast}</td>
          <td className="meal-plan-table-cell">{mealPlan[6].breakfast}</td>
        </tr>
        <tr>
          <th className="meal-plan-table-meal-header">Lunch</th>
          <td className="meal-plan-table-cell">{mealPlan[0].lunch}</td>
          <td className="meal-plan-table-cell">{mealPlan[1].lunch}</td>
          <td className="meal-plan-table-cell">{mealPlan[2].lunch}</td>
          <td className="meal-plan-table-cell">{mealPlan[3].lunch}</td>
          <td className="meal-plan-table-cell">{mealPlan[4].lunch}</td>
          <td className="meal-plan-table-cell">{mealPlan[5].lunch}</td>
          <td className="meal-plan-table-cell">{mealPlan[6].lunch}</td>
        </tr>
        <tr className="meal-plan-table-row-alt">
          <th className="meal-plan-table-meal-header">Dinner</th>
          <td className="meal-plan-table-cell">{mealPlan[0].dinner}</td>
          <td className="meal-plan-table-cell">{mealPlan[1].dinner}</td>
          <td className="meal-plan-table-cell">{mealPlan[2].dinner}</td>
          <td className="meal-plan-table-cell">{mealPlan[3].dinner}</td>
          <td className="meal-plan-table-cell">{mealPlan[4].dinner}</td>
          <td className="meal-plan-table-cell">{mealPlan[5].dinner}</td>
          <td className="meal-plan-table-cell">{mealPlan[6].dinner}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
