import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Table from "../components/Table";

function HomePage({ setExerciseToEdit }) {
  const [exercises, setExercises] = useState([]);

  const history = useHistory();

  const onDelete = async (_id) => {
    const response = await fetch(`/exercises/${_id}`, { method: "DELETE" });
    if (response.status === 204) {
      setExercises(exercises.filter((e) => e._id !== _id));
    } else {
      console.error(
        `Failed to delete movie with _id=${_id}, status code = ${response.status}`
      );
    }
  };

  const onEdit = async (exerciseToEdit) => {
    setExerciseToEdit(exerciseToEdit);
    history.push("/edit-exercise");
  };

  //connection to our REST API dbs
  const loadExercises = async () => {
    const response = await fetch("/exercises");
    const data = await response.json();
    setExercises(data);
  };

  //requires a non anon function as first parameter
  useEffect(() => {
    loadExercises();
  }, []);

  return (
    <>
      <h2>Exercise Tracker</h2>
      <Table exercises={exercises} onDelete={onDelete} onEdit={onEdit}></Table>
    </>
  );
}

export default HomePage;
