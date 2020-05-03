import React                from 'react';
import {Header}             from "./components/Header"            // Curly braces are required here because of the ES7 syntax
import {Balance}            from "./components/Balance"           // Same here
import {IncomeExpenses}     from "./components/IncomeExpenses"    // Same here
import {TransactionList}    from "./components/TransactionList"   // Same here
import {AddTransaction}     from "./components/AddTransaction"    // Same here

import './App.css';

const App = () => {


  return (
    <div className="">

    <Header/>
    <div className="container">

      <Balance          />
      <IncomeExpenses   />
      <TransactionList  />
      <AddTransaction   />
      
    </div>    

    </div>
  );
}

export default App;
