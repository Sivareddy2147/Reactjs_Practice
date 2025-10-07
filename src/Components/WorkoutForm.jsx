import React, { useState } from "react";

const WorkoutForm = ({ addWorkout }) => {
  const [exercise, setExercise] = useState("");
  const [minutes, setMinutes] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!exercise || !minutes || !calories || !date) return;

    const newWorkout = {
      id: Date.now(),
      exercise,
      minutes: parseInt(minutes),
      calories: parseInt(calories),
      date,
    };

    addWorkout(newWorkout);
    setExercise("");
    setMinutes("");
    setCalories("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>Add Workout</h2>
      <input
        type="text"
        placeholder="Exercise"
        value={exercise}
        onChange={(e) => setExercise(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Minutes"
        value={minutes}
        onChange={(e) => setMinutes(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Calories"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add</button>
      <hr />
    </form>
  );
};

export default WorkoutForm;
