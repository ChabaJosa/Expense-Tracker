import React from 'react';
import { GlobalProvider } from "../context/GlobalState"
import { Header } from "./ExpenseTracker/Expenses/Header"            // Curly braces are required here because of the ES7 syntax, 
import { Balance } from "./ExpenseTracker/Expenses/Balance"           // not sure if it's desctrocturing
import { IncomeExpenses } from "./ExpenseTracker/Expenses/IncomeExpenses"
import { TransactionList } from "./ExpenseTracker/Expenses/TransactionList"
import { AddTransaction } from "./ExpenseTracker/Expenses/AddTransaction"
// import { Container } from "react-bootstrap";


const ExpenseTracker = (props) => {
    console.log(props)
    return (
        <GlobalProvider>
            <>

                <div>
                    <Header />
                    <>
                        <Balance />
                        <IncomeExpenses />
                        <TransactionList />
                        <AddTransaction />
                    </>


                </div>


            </>
        </GlobalProvider>


    );
};

export default ExpenseTracker;