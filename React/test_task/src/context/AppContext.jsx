import React, { createContext, useReducer, useContext } from 'react';
import {appContextReducer} from './AppContextReducer.jsx'

export {useApp, useAppDispatch, AppContext, AppContextDispatch}

// Create the context
const AppContext = createContext();

const AppContextDispatch = createContext();

const initialState = {};

export const AppProvider = ({ children }) => {
    const [data, dispatch] = useReducer(appContextReducer, initialState);

    return (
        <AppContext.Provider value={ data }>
            <AppContextDispatch.Provider value={ dispatch }>
                {children}
            </AppContextDispatch.Provider>
        </AppContext.Provider>
    );
};

function useApp(){
    return useContext(AppContext);
}

function useAppDispatch(){
    return useContext(AppContextDispatch);
}
