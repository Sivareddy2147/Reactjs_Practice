import React from "react";
import WorkoutItem from "../Context/WorkoutItem";

const WorkoutList = ({ workouts, deleteWorkout }) => {
  const sortedWorkouts = [...workouts].sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <div>
      <h2>Workout Log</h2>
      {sortedWorkouts.length === 0 ? (
        <p>No workouts added yet.</p>
      ) : (
        sortedWorkouts.map((workout) => (
          <WorkoutItem key={workout.id} workout={workout} deleteWorkout={deleteWorkout} />
        ))
      )}
      <hr />
    </div>
  );
};

export default WorkoutList;
