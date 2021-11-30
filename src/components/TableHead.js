import React from "react";

/*
    Returns a thead for use in all three pages.
    Note that some pages require two extra columns
    for Edit and Delete.
*/
function TableHead() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Reps</th>
        <th>Weight</th>
        <th>Unit</th>
        <th>Date</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
  );
}

export default TableHead;
