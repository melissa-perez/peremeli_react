import React from "react";
import TableHead from "../components/TableHead";
import Row from "../components/Row";

/*
    Returns a table for use in the Home Page.
    It can rerout to the Edit and CreatePages from its components/
    Note that some pages require two extra columns
    for Edit and Delete.(Added in Edit and Delete columns)
*/
function Table({ exercises, onDelete, onEdit }) {
  return (
    <table id="exercises">
      <TableHead></TableHead>
      <tbody>
        {exercises.map((exercise, i) => (
          <Row
            exercise={exercise}
            onDelete={onDelete}
            onEdit={onEdit}
            key={i}
          />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
