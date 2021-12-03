import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export const EditPage = ({ exerciseToEdit }) => {
  const [name, setName] = useState(exerciseToEdit.name);
  const [reps, setReps] = useState(exerciseToEdit.reps);
  const [weight, setWeight] = useState(exerciseToEdit.weight);
  const [unit, setUnit] = useState(exerciseToEdit.unit);
  const [date, setDate] = useState(exerciseToEdit.date);

  const history = useHistory();

  const editExercise = async () => {
    const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
      method: "PUT",
      body: JSON.stringify({ name, reps, weight, unit, date }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 200) {
      alert("Successfully edited the exercise!");
    } else {
      alert(`Failed to edit exercise, status code = ${response.status}`);
    }
    history.push("/");
  };
  return (
    <div>
      <h2>Edit Exercise</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        value={reps}
        min="0"
        onChange={(e) => setReps(e.target.value)}
      />
      <input
        type="number"
        min="0"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
      />
      <input
        type="text"
        value={unit}
        onChange={(e) => setUnit(e.target.value)}
      />
      <input
        type="text"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button onClick={editExercise}>Save</button>
    </div>
  );
};

export default EditPage;
