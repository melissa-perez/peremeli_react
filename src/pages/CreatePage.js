import React from "react";
import { useHistory } from "react-router-dom";
import ExerciseForm from "../components/ExerciseForm";

export const CreatePage = () => {
  const history = useHistory();

  const addExercise = async (newExercise) => {
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
      <ExerciseForm
        exerciseFunction={addExercise}
        buttonText={"Add"}
      ></ExerciseForm>
    </div>
  );
};

export default CreatePage;
