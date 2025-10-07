import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Progress = ({ workouts, goals }) => {
  // Aggregate workouts by date
  const data = workouts.reduce((acc, w) => {
    const existing = acc.find((item) => item.date === w.date);
    if (existing) {
      existing.calories += w.calories;
      existing.minutes += w.minutes;
    } else {
      acc.push({ date: w.date, calories: w.calories, minutes: w.minutes });
    }
    return acc;
  }, []);

  const totalMinutes = workouts.reduce((sum, w) => sum + w.minutes, 0);
  const totalCalories = workouts.reduce((sum, w) => sum + w.calories, 0);

  return (
    <div>
      <h2>Progress Overview</h2>
      <p>
        Total Minutes: {totalMinutes} / {goals.minutes} | Total Calories: {totalCalories} / {goals.calories}
      </p>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="calories" stroke="#FF5733" name="Calories Burned" />
          <Line type="monotone" dataKey="minutes" stroke="#33C3FF" name="Workout Minutes" />
        </LineChart>
      </ResponsiveContainer>
      <hr />
    </div>
  );
};

export default Progress;
