import React, { useState } from "react";

function ExerciseForm({ exerciseFunction, buttonText, exerciseToEdit }) {
  const [name, setName] = useState(
    exerciseToEdit === undefined ? "" : exerciseToEdit.name
  );
  const [reps, setReps] = useState(
    exerciseToEdit === undefined ? 0 : exerciseToEdit.reps
  );
  const [weight, setWeight] = useState(
    exerciseToEdit === undefined ? 0 : exerciseToEdit.weight
  );
  const [unit, setUnit] = useState(
    exerciseToEdit === undefined ? "" : exerciseToEdit.unit
  );
  const [date, setDate] = useState(
    exerciseToEdit === undefined ? "" : exerciseToEdit.date
  );
  return (
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
        <button
          onClick={(e) => {
            const newExercise = { name, reps, weight, unit, date };
            if (exerciseToEdit !== undefined) {
              exerciseFunction(newExercise, exerciseToEdit);
            } else {
              exerciseFunction(newExercise);
            }
            e.preventDefault();
          }}
        >
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default ExerciseForm;
