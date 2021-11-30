import React from "react";
import { MdAdd, MdRemove } from "react-icons/md";
/*  
    Defines a single tr for a table
    that includes params for exercises,
    onDelete, and onEdit. When Delete is clicked,
    remove the row from the database, when Edit is
    clicked, launch the EditPage.
*/
function Row({ exercise }) {
  return (
    <>
      <tr>
        <td>{exercise.name}</td>
        <td>{exercise.reps}</td>
        <td>{exercise.weight}</td>
        <td>{exercise.unit}</td>
        <td>{exercise.date}</td>
        <td>Edit</td>
        <td>Delete</td>
      </tr>
    </>
  );
}

export default Row;
