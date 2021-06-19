import React from "react";
import { GlobalProvider } from "../context/GlobalState";
import { Header } from "./ExpenseTracker/Expenses/Header"; // Curly braces are required here because of the ES7 syntax,
import { Balance } from "./ExpenseTracker/Expenses/Balance"; // not sure if it's desctrocturing
import { IncomeExpenses } from "./ExpenseTracker/Expenses/IncomeExpenses";
import { TransactionList } from "./ExpenseTracker/Expenses/TransactionList";
import { AddTransaction } from "./ExpenseTracker/Expenses/AddTransaction";
import { Fixed } from "./ExpenseTracker/Expenses/Fixed";
import { Variable } from "./ExpenseTracker/Expenses/Variable";
// import { Container }         from "react-bootstrap";
import Pic1 from "./ExpenseTracker/Expenses/backgroundImages/dollar.png";
import Pic2 from "./ExpenseTracker/Expenses/backgroundImages/calculator.jpg";
import Pic3 from "./ExpenseTracker/Expenses/backgroundImages/entrepreneur.jpg";
import Pic4 from "./ExpenseTracker/Expenses/backgroundImages/piggy-bank.jpg";

const ExpenseTracker = (props) => {
  console.log(props);

  const backImgs = [Pic1, Pic2, Pic3, Pic4];

  const randomElement = (itemsArray) => {
    let randomItem = Math.floor(Math.random() * itemsArray.length);
    console.log(randomItem);
    return itemsArray[randomItem];
  };

  return (
    <GlobalProvider>
      <div
        className="d-flex flex-column justify-content-around"
        // style={{
        // backgroundSize:"cover",
        // backgroundRepeat:" no-repeat",
        // // border-
        // backgroundImage:  `linear-gradient(
        //     rgba(0, 0, 0, 0.5),
        //     rgba(0, 0, 0, 0.5)
        //     ),url(${randomElement(backImgs)})`

        // }}
      >
        <div>
          <Header name={"Expense Tracker"} />

          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>

        <div>
          <Header name={"Fixed Expenses"} />

          <Fixed />
        </div>

        <div>
          <Header name={"Variable Expenses"} />

          <Variable />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default ExpenseTracker;
