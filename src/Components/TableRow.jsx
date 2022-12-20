import React from "react";

const TableRow = (props) => {
  return (
    <>
      <td>{props.id}</td>
      <td>{props.sent}</td>
      <td>{props.property1}</td>
      <td>{props.property2}</td>
      <td>{props.property3}</td>
    </>
  );
};

export default TableRow;
