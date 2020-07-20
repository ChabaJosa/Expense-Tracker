import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// // Initial State: Any state that's applied in a global scale
const initialState = {
  transactions: [
    // { id: 1, text: "Movie Popcorn", amount: -20 },
    // { id: 2, text: "Sold website in Fiverr", amount: 300 },
    // { id: 3, text: "Bought 50 Udemy courses", amount: -100 },
    // { id: 4, text: "Amazon Prime", amount: 150 },
  ],
  error: null,
  loading: true,
};

// Create Global Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions

  async function getTransactions() {
    try {
      const res = await axios.get("api/v1/transactions");
      dispatch({ type: "GET_TRANSACTIONS", payload: res.data.data });
    } catch (err) {
      dispatch({ type: "TRANSACTION_ERROR", payload: err.res.data.error });
    }
  }

  async function deleteTransaction(id) {
    try {
      await axios.delete(`/api/v1/transactions/${id}`); // Deletes post from DB
    } catch (err) {
      dispatch({ type: "TRANSACTION_ERROR", payload: err.res.data.error });
    }

    dispatch({
      type: "DELETE_TRANSACTION", // Deletes post from state
      payload: id,
    });
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("api/v1/transactions", transaction, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({ type: "TRANSACTION_ERROR", payload: err.res.data.error });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        deleteTransaction,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
