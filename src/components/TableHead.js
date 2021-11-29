import React from "react";

/*
    Returns a thead for use in all three pages.
    Note that some pages require two extra columns
    for Edit and Delete.
*/
function TableHead() {
  return (
    <>
      <thead>
        <td>Name</td>
        <td>Reps</td>
        <td>Weight</td>
        <td>Unit</td>
        <td>Date</td>
      </thead>
    </>
  );
}

export default TableHead;
