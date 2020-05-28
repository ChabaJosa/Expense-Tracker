import React from 'react'
import { Table } from 'reactstrap';


export const Fixed = (props) => {



    return (

      <Table dark>
      <thead>
        <tr>
          <th>Fixed</th>
          <th>Due Date</th>
          <th>Frequency</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody >
        <tr>
          <th scope="row">Rent</th>
          <td>Every 3rd</td> {/* Due Date    */}
          <td>Monthly</td> {/* Frequency   */}
          <td>1500</td> 
        </tr>
        <tr>
          <th scope="row">Car insurance</th>
          <td>Every 15th</td> {/* Due Date    */}
          <td>Monthly</td> {/* Frequency   */}
          <td>150</td> 
        </tr>
        <tr>
          <th scope="row">Student Loan</th>
          <td>Every 14th</td> {/* Due Date    */}
          <td>Twice a year</td> {/* Frequency   */}
          <td>400</td> 
        </tr>
      </tbody>
    </Table>

    )
    
}