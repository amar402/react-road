import React from "react";
import { Table } from "react-bootstrap";

 function isAction(e,apiresponse) {
    const newlist = apiresponse.filter(l => {
      return l.name.includes(e.name);
    });
   // this.setState({ result: newlist });
   console.log(newlist)
  };

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
              <td style={{ display: "block", border: "1px solid red" }}>
                {x.languages.map(lan => (
                  <li key={lan.name}>{lan.name}</li>
                ))}
              </td>
              <td>{x.capital}</td>
              <td>
                <button onClick={()=>isAction(x,apiresponse)}>Remove </button>
              </td>
            </tr>
          ))}
        {result &&
          result.map(x => (
            <tr key={x.name}>
              <td>{x.name}</td>
              <td style={{ display: "block" }}>
                {x.languages.map(lan => (
                  <li>{lan.name}</li>
                ))}
              </td>
              <td>{x.capital}</td>
              <td>
                <button onClick={remove}>Remove </button>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default TableList;
