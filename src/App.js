import "./App.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import Navigation from "./components/Navigation";

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState([]);
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/add-exercise">
            <CreatePage />
          </Route>
          <Route path="/edit-exercise">
            <EditPage exerciseToEdit={exerciseToEdit} />
          </Route>
        </div>
        <Navigation></Navigation>
      </Router>
    </div>
  );
}

export default App;
