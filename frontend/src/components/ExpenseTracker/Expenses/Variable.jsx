import React from 'react'
import { Table } from 'reactstrap';


export const Variable = (props) => { 

    let today = new Date()

    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    let yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;

    return (

        <Table dark>
        <thead>
          <tr>
            <th>Variable</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody >
          <tr>
            <th scope="row">More Pizza</th>
            <td>{today}</td> 
            <td>20</td> 
          </tr>
          <tr>
            <th scope="row">Monitor</th>
            <td>{today}</td> 
            <td>200</td>
          </tr>
          <tr>
            <th scope="row">Overwatch 2</th>
            <td>{today}</td> 
            <td>60</td>
          </tr>
        </tbody>
      </Table>
    )

}