import React, { createContext, useReducer} from 'react'
import AppReducer from "./AppReducer"

// // Initial State: Any state that's applied in a global scale
const initialState = {
    transactions: [
            { id: 1, text: 'Movie Popcorn', amount: -20 },
            { id: 2, text: 'Sold website in Fiverr', amount: 300 },
            { id: 3, text: 'Bought 50 Udemy courses', amount: -100 },
            { id: 4, text: 'Amazon Prime', amount: 150 }
        ]
}

// Create Global Context
export const GlobalContext  = createContext(initialState)


// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type: "DELETE_TRANSACTION",
            payload:id
        })
    } 
    
    function addTransaction(transaction){
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    } 

    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        
        }} > 

            {children}
        </GlobalContext.Provider>
    )

}

