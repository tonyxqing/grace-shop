import { createContext, useContext, useReducer } from "react";
import { State, Action } from "./types";

//prepares data layer
export const StateContext = createContext<any | null>(null);

enum ActionKind {
  Add = "ADD_TO_CART",
  Remove = "REMOVE_FROM_CART",
}

export const StateProvider = ({
  reducer,
  initialState,
  children,
}: {
  reducer: (state: State, action: Action) => State;
  children: any;
  initialState: State;
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);

export default StateProvider;
