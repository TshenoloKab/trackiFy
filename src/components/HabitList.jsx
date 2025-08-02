import React from "react";
import HabitItem from "./HabitItem";

export default function HabitList({ habits, onToggleDone }) {
  if (habits.length === 0) {
    return <p className="text-gray-500">No habits yet. Add one above!</p>;
  }
  return (
    <div>
      {habits.map((habit) => (
        <HabitItem key={habit.id} habit={habit} onToggleDone={onToggleDone} />
      ))}
    </div>
  );
}

