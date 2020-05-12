import React                from 'react';
import {Header}             from "./components/Header"            // Curly braces are required here because of the ES7 syntax, 
import {Balance}            from "./components/Balance"           // not sure if it's desctrocturing
import {IncomeExpenses}     from "./components/IncomeExpenses"    
import {TransactionList}    from "./components/TransactionList"   
import {AddTransaction}     from "./components/AddTransaction"    
import {GlobalProvider}     from "./context/GlobalState"
import { Container }        from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.css";
import './App.css';

const App = () => {


  return (
    // It all must be wrapped in the Global Provider to access the Global State value
    <GlobalProvider>

      <Header/>

      {/* <div className="d-flex flex-row"> */}

        <Container >
          <Balance          />
          <IncomeExpenses   />
          <TransactionList  />
          <AddTransaction   />
        </Container>    

        {/* <div className="container">
          <Balance          />
          <IncomeExpenses   />
          <TransactionList  />
          <AddTransaction   />
        </div>  */}

      {/* </div> */}
      

    </GlobalProvider>
  );
}

export default App;
