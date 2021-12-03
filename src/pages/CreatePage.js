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
    const response = await fetch("/exercises", {
      method: "POST",
      body: JSON.stringify({ name, reps, weight, unit, date }),
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
      <button onClick={addExercise}>Add</button>
    </div>
  );
};

export default CreatePage;
