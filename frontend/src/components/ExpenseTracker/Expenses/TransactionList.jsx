import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const TransactionList = () => {
  const { transactions, getTransactions, deleteTransaction } = useContext(GlobalContext);

  useEffect(()=> {
      getTransactions()
      // This will fire a warning that's disbale with eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  console.log("This is context", transactions);
  // Returns transactions array

  return (
    <>
      <h3>Recent Transactions</h3>
      <ul id="list" className="list">
        {transactions.map((transaction) => {
          const sign = transaction.amount < 0 ? "-" : "+";
          const signClass = transaction.amount < 0 ? "minus" : "plus";

          return (
            <li className={`${signClass}`} key={transaction}>
              {transaction.text}{" "}
              <span>{sign + "$" + Math.abs(transaction.amount)} </span>
              <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction._id)}
              >
                x
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
