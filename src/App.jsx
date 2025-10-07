import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import WorkoutForm from "./Components/WorkoutForm";
import WorkoutList from "./Components/WorkoutList";
import Goals from "./Components/Goals";
import Progress from "./Components/Progress";

const App = () => {
  const [workouts, setWorkouts] = useState([]);
  const [goals, setGoals] = useState({ calories: 0, minutes: 0 });

  // Load data from localStorage
  useEffect(() => {
    const storedWorkouts = JSON.parse(localStorage.getItem("workouts")) || [];
    const storedGoals = JSON.parse(localStorage.getItem("goals")) || { calories: 0, minutes: 0 };
    setWorkouts(storedWorkouts);
    setGoals(storedGoals);
  }, []);

  // Save workouts & goals to localStorage
  useEffect(() => {
    localStorage.setItem("workouts", JSON.stringify(workouts));
  }, [workouts]);

  useEffect(() => {
    localStorage.setItem("goals", JSON.stringify(goals));
  }, [goals]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  return (
    <div className="container" style={{ width: "80%", margin: "auto", fontFamily: "Arial" }}>
      <Header />
      <Goals goals={goals} setGoals={setGoals} />
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} deleteWorkout={deleteWorkout} />
      <Progress workouts={workouts} goals={goals} />
    </div>
  );
};

export default App;
