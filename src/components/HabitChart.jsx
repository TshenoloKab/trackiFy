// components/HabitChart.jsx
import React from "react";
import "../App.css";

function HabitChart({ habits }) {
  const completed = habits.filter(h => h.completed).length;
  const total = habits.length;
  const percentage = totalHabits > 0 ? (completedHabits / totalHabits) * 100 : 0;

  return (
    <div className="habit-chart">
      <div className="progress-bar">
        <div className="fill" style={{ width: `${percentage}%` }}></div>
      </div>
      <p>{percentage}% completed</p>
    </div>
  );
}

export default HabitChart;

