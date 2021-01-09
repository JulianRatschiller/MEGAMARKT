import React, { createContext, useContext, useReducer } from 'react';

// prepares the DataLayer
export const StateContext = createContext();

//Wraps the app and provides the DataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Pulls information from the DataLayer
export const useStateValue = () => useContext(StateContext);