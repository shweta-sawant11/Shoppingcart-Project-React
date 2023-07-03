import React, { createContext, useReducer } from 'react'

export const DataContext = createContext();

const ContextApi = ({ children }) => {

  const reducer = (state, action) => {

    switch (action.type) {
      case 'Add':
        const tempstate = state.filter((elem) => action.payload.id === elem.id)
        if (tempstate.length > 0) {
          return state
        } else {
          return [...state, action.payload];
        }

      case 'increase':
        const tempstate1 = state.map((elem) => {
          if (elem.id === action.payload.id) {
            return { ...elem, quantity: elem.quantity + 1 };
          } else {
            return elem;
          }
        });
        return tempstate1;

      case 'decrease':
        const tempstate2 = state.map((elem) => {
          if (elem.id === action.payload.id) {
            return { ...elem, quantity: elem.quantity - 1 };
          } else {
            return elem;
          }
        });
        return tempstate2;

      case 'remove':
        const tempstate3=state.filter((elem)=>
         elem.id!==action.payload.id
        );

        return tempstate3

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, [])
  const info = { state, dispatch }

  return (

    <DataContext.Provider value={info}>
      {children}
    </DataContext.Provider>

  )
}

export default ContextApi