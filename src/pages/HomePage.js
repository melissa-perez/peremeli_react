import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Table from "../components/Table";

function HomePage() {
  const [movies, setMovies] = useState([]);

  return (
    <>
      <h2>Exercise Tracker</h2>
      <Table exercises={exercises}></Table>
      <Link to="/add-exercise">Add an exercise</Link>
    </>
  );
}

export default HomePage;
