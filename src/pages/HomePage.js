import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Table from "../components/Table";

function HomePage() {
  const [exercises, setExercises] = useState([]);

  //connection to our REST API dbs
  const loadExercises = async () => {
    const response = await fetch("/exercises");
    const data = await response.json();
    setExercises(data);
  };

  //requires a non async function as first parameter
  useEffect(() => {
    loadExercises();
  }, []);

  return (
    <>
      <h2>Exercise Tracker</h2>
      <Table exercises={exercises}></Table>
      <Link to="/add-exercise">Add an exercise</Link>
    </>
  );
}

export default HomePage;
