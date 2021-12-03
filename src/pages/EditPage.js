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
      <div>
        <form className="exerciseform">
          <fieldset>
            <legend>Exercise Information</legend>
            <p>
              <label>Enter exercise name: </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </p>
            <p>
              <label>Enter reps: </label>
              <input
                type="Number"
                value={reps}
                min="0"
                onChange={(e) => setReps(e.target.value)}
              />
            </p>
            <p>
              <label>Enter weights used: </label>
              <input
                type="Number"
                value={weight}
                min="0"
                onChange={(e) => setWeight(e.target.value)}
              />
            </p>
            <p>
              <label>Enter unit type: </label>
              <input
                type="text"
                placeholder="lbs or kg"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
            </p>
            <p>
              <label>Enter date: </label>
              <input
                type="text"
                placeholder="MM-DD-YY"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </p>
          </fieldset>
        </form>
      </div>
      <button onClick={editExercise}>Save</button>
    </div>
  );
};

export default EditPage;
