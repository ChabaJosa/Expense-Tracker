import React, {useContext }from 'react'
import {GlobalContext} from "../../../context/GlobalState"

export const TransactionList = () => {
    const {transactions}        = useContext(GlobalContext)
    const {deleteTransaction}   = useContext(GlobalContext)

    console.log("This is context",transactions)
    // Returns transactions array


    return (
        <>
            <h3>History</h3>
            <ul id="list" className="list">
                {transactions.map( transaction => {
                    const sign          = transaction.amount < 0 ? '-' : '+';
                    const classesita    = transaction.amount < 0 ? 'minus' : 'plus';


                    return (
                    <li className={`${classesita}`} key={transaction}>
                        {transaction.text} <span>{sign+"$"+Math.abs(transaction.amount)} </span><button 
                        className="delete-btn"
                        onClick={() => deleteTransaction(transaction.id)}
                        >
                            x
                        </button>
                    </li> 
                    )

                })}
            
            </ul>
        </>
    )
}
