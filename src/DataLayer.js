import { createContext ,useContext, useReducer } from 'react'
// prepearing the dataLayer
export const DataLayerContext = createContext();
// main DataLayer which rapd the app 
export const DataLayer = ({initialState,reducer,children}) => (
    <DataLayerContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () => useContext(DataLayerContext);