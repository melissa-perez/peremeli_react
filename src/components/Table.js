import React from "react";
import TableHead from "../components/TableHead";
import Row from "../components/Row";

function Table({ exercises }) {
  return (
    <table id="exercises">
      <TableHead></TableHead>
      <tbody>
        {exercises.map((exercise, i) => (
          <Exercise exercise={exercise} key={i} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
