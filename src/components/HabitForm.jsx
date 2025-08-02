import React, { useState } from "react";
import "./HabitForm.css";

function HabitForm({ addHabit }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addHabit(input);
    setInput("");
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new habit..."
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default HabitForm;
