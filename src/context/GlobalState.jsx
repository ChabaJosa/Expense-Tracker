import React, { createContext, useReducer} from 'react'
import AppReducer from "./AppReducer"

// // Initial State: Any state that's applied in a global scale
const initialState = {
    transactions: [
            { id: 1, text: 'MCU First 10 years feattured box set', amount: -20 },
            { id: 2, text: 'Found change in the back of my truck', amount: 300 },
            { id: 3, text: 'Bought 246 Udemy courses', amount: -10 },
            { id: 4, text: 'My brother paid me back', amount: 150 }
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
    
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction
        
        }} > 

            {children}
        </GlobalContext.Provider>
    )

}

