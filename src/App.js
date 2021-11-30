import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/add-exercise">
            <CreatePage />
          </Route>
          <Route path="edit-exercise">
            <EditPage />
          </Route>
        </div>
        <Navigation></Navigation>
      </Router>
    </div>
  );
}

export default App;
