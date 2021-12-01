import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const CreatePage = () => {
  const [name, setName] = useState("");
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");

  const history = useHistory();

  const addExercise = async () => {
    const newExercise = { name, reps, weight, unit, date };
    const response = await fetch("/exercises", {
      method: "POST",
      body: JSON.stringify(newExercise),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 201) {
      alert("Successfully added the exercise!");
    } else {
      alert(`Failed to add exercise, status code = ${response.status}`);
    }
    history.push("/");
  };

  return (
    <div>
      <h2>Add Exercise</h2>
      <input
        type="text"
        placeholder="Enter exercise name here"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={reps}
        min="0"
        placeholder="Enter number of reps here"
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        type="number"
        min="0"
        value={weight}
        placeholder="Enter weight number here"
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="text"
        placeholder="Select unit"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      />
      <input
        type="date"
        placeholder="Select date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={addExercise}>Add</button>
    </div>
  );
};

export default CreatePage;
