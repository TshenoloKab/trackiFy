import React from "react";
import "./HabitItem.css";

function HabitItem({ habit, index, toggleHabit, deleteHabit }) {
  return (
    <div className={`habit-item ${habit.done ? "done" : ""}`}>
      <input
        type="checkbox"
        checked={habit.done}
        onChange={() => toggleHabit(index)}
      />
      <span className="habit-text">{habit.text}</span>
      <button className="delete-btn" onClick={() => deleteHabit(index)}>X</button>
    </div>
  );
}

export default HabitItem;
