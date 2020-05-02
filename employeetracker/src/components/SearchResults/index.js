import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className='table'>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Phone Number</th>
        <th>Email</th>
      </tr>
      {props.results.map((employee, index) => (
        <tr>
          <td>{employee.name.first}</td>
          <td>{employee.name.last}</td>
          <td>{employee.phone}</td>
          <td>{employee.email}</td>
        </tr>
      ))}
    </table>
    
  );
}

export default SearchResults;
