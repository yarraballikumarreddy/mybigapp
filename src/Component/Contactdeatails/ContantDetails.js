import React from "react";
import Table from "react-bootstrap/Table";
function ContantDetails({ data }) {
  return (
    <div>
      <Table responsive="xl" striped bordered hover>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Phone</th>
            <th>User Name</th>
            <th>Company</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>
                    <ul className="list-unstyled">
                      <li>{item.name}</li>
                      <li> {item.email}</li>
                    </ul>
                  </td>
                  <td>{item.phone}</td>
                  <td>{item.username}</td>
                  <td>{item.company.name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
}
export default ContantDetails;
