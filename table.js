import React from "react";
import { Table } from "react-bootstrap";

function TableList({ result, apiresponse, remove }) {
  return (
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Country</th>
          <th>Languages</th>
          <th>Capital</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {!result &&
          apiresponse &&
          apiresponse.map(x => (
            <tr key={x.name}>
              <td>{x.name}</td>
              <td >
                {x.languages.map(lan => (
                  <li style={{ display: "block" }} key={lan.name}>{lan.name}</li>
                ))}
              </td>
              <td>{x.capital}</td>
              <td>
                <button onClick={() => remove(x)}>Remove </button>
              </td>
            </tr>
          ))}
        {result &&
          result.map(x => (
            <tr key={x.name}>
              <td>{x.name}</td>
              <td style={{ display: "block" }}>
                {x.languages.map(lan => (
                  <li style={{ display: "block" }} key={lan.name}>{lan.name}</li>
                ))}
              </td>
              <td>{x.capital}</td>
              <td>
                <button onClick={() => remove(x)}>Remove </button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TableList;
