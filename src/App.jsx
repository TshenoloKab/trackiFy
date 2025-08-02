import React, { useState, useEffect } from "react";
import HabitForm from "./components/HabitForm";
import HabitItem from "./components/HabitItem";
import ProgressChart from "./components/ProgressChart";
import "./App.css";

function App() {
  const [habits, setHabits] = useState(() => {
    const stored = localStorage.getItem("habits");
    return stored ? JSON.parse(stored) : [];
  });
  const [showChart, setShowChart] = useState(false);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => {
    if (habit.trim() === "") return;
    setHabits([...habits, { text: habit, done: false }]);
  };

  const toggleHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits[index].done = !updatedHabits[index].done;
    setHabits(updatedHabits);
  };

  const deleteHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(index, 1);
    setHabits(updatedHabits);
  };

  const startNewDay = () => {
    const resetHabits = habits.map((habit) => ({ ...habit, done: false }));
    setHabits(resetHabits);
  };

  const completedCount = habits.filter((habit) => habit.done).length;
  const progressPercent = habits.length > 0 ? (completedCount / habits.length) * 100 : 0;

  return (
    <div className="app-container">
      <header>
        <h1>TrackiFy</h1>
        <p className="subtitle">Your simple daily habit tracker</p>
        <div className="top-controls">
          <button className="btn new-day-btn" onClick={startNewDay}>Start New Day</button>
          <HabitForm addHabit={addHabit} />
        </div>
      </header>

      <section className="habits-section">
        <div className="habit-list">
          {habits.map((habit, index) => (
            <HabitItem
              key={index}
              index={index}
              habit={habit}
              toggleHabit={toggleHabit}
              deleteHabit={deleteHabit}
            />
          ))}
        </div>
        <p className="summary">
          You have completed {completedCount} of {habits.length} habits today.
        </p>
        <button className="btn chart-btn" onClick={() => setShowChart(!showChart)}>
          {showChart ? "Hide Progress Chart" : "Show Progress Chart"}
        </button>
        {showChart && <ProgressChart progress={progressPercent} />}
      </section>
    </div>
  );
}

export default App;
