import React from "react";
import TableHead from "../components/TableHead";
import Row from "../components/Row";

/*
    Returns a table for use in the Home Page.
    It can rerout to the Edit and CreatePages from its components/
    Note that some pages require two extra columns
    for Edit and Delete.(Added in Edit and Delete columns)
*/
function Table({ exercises, onDelete }) {
  return (
    <table id="exercises">
      <TableHead></TableHead>
      <tbody>
        {exercises.map((exercise) => (
          <Row exercise={exercise} onDelete={onDelete} key={exercise._id} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
