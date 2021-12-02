import React, { useState } from "react";

function ExerciseForm({ addExercise }) {
  const [name, setName] = useState("");
  const [reps, setReps] = useState(0);
  const [weight, setWeight] = useState(0);
  const [unit, setUnit] = useState("");
  const [date, setDate] = useState("");

  return (
    <div>
      <form>
        <fieldset>
          <legend>Exercise Information</legend>
          <label>
            Enter exercise name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            Enter reps:
            <input
              type="Number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </label>
          <label>
            Enter weights used:
            <input
              type="Number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <label>
            Enter unit type:
            <input
              type="text"
              placeholder="lbs or kg"
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
            />
          </label>
          <label>
            Enter date:
            <input
              type="text"
              placeholder="MM-DD-YY"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </label>
        </fieldset>
        <button
          onClick={(e) => {
            const newExercise = { name, reps, weight, unit, date };
            addExercise(newExercise);
            e.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default ExerciseForm;
