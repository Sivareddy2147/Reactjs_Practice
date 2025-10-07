import React from "react";

const WorkoutItem = ({ workout, deleteWorkout }) => (
  <div style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between" }}>
    <div>
      <strong>{workout.exercise}</strong> - {workout.minutes} min, {workout.calories} cal
      <br />
      <small>{workout.date}</small>
    </div>
    <button onClick={() => deleteWorkout(workout.id)}>Delete</button>
  </div>
);

export default WorkoutItem;
