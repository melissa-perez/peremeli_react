import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/CreatePage" className="nav-link">
            Add New Exercise
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
