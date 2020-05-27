import React from 'react'
import { Table } from 'reactstrap';


export const Fixed = (props) => {



    return (

      <Table dark>
      <thead>
        <tr>
          <th>Fixed</th>
          <th>Description</th>
          <th>Due Date</th>
          <th>Frequency</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <th scope="row">Rent</th>
          <td>No to ways around it</td> {/* Description */}
          <td>Every 3rd</td> {/* Due Date    */}
          <td>Monthly</td> {/* Frequency   */}
        </tr>
        <tr>
          <th scope="row">Car insurance</th>
          <td>Better be safe than sorry</td> {/* Description */}
          <td>Every 15th</td> {/* Due Date    */}
          <td>Monthly</td> {/* Frequency   */}
        </tr>
        <tr>
          <th scope="row">Student Loan</th>
          <td>It was worth it.</td> {/* Description */}
          <td>Every 14th</td> {/* Due Date    */}
          <td>Twice a year</td> {/* Frequency   */}
        </tr>
      </tbody>
    </Table>

    )
    
}