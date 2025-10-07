import React, { useState } from "react";

const Goals = ({ goals, setGoals }) => {
  const [caloriesGoal, setCaloriesGoal] = useState(goals.calories);
  const [minutesGoal, setMinutesGoal] = useState(goals.minutes);

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoals({ calories: parseInt(caloriesGoal), minutes: parseInt(minutesGoal) });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Set Fitness Goals</h2>
      <input
        type="number"
        placeholder="Calories Goal"
        value={caloriesGoal}
        onChange={(e) => setCaloriesGoal(e.target.value)}
      />
      <input
        type="number"
        placeholder="Minutes Goal"
        value={minutesGoal}
        onChange={(e) => setMinutesGoal(e.target.value)}
      />
      <button type="submit">Save</button>
      <hr />
    </form>
  );
};

export default Goals;
