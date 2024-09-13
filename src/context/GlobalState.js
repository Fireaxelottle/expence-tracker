import React, { createContext , useReducer} from "react";
import AppReducer from "./AppReducer";
import Transaction from "../components/Transaction";

const initialState ={
    transactions : []
}

// Contax

export const GlobalContext = createContext(initialState)

// provider

export const GlobalProvider = ({children}) => {

    const [state, dispatch] = useReducer(AppReducer, initialState);

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }
       

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });

    }

    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions
            , deleteTransaction ,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}