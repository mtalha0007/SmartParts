import React, { createContext, useReducer } from "react";
import Reducer from "./reducer";

let cartData = [];

let data = {
  cart_items: cartData,
};
export const ContextApi = createContext({ state: data, dispatch: () => null });

export const CreateContext = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, data);
  return (
    <ContextApi.Provider value={{ state, dispatch }}>
      {children}
    </ContextApi.Provider>
  );
};
