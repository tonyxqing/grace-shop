import { ContextInterface, Cart, ContextType, State, Action } from "./types";


export const initialState = { cart: [] };

// export const reducer = (
//   state: ContextInterface,
//   action: { type: string; item: Cart }
// ) => {
//   switch (action.type) {
//     case "ADD_TO_CART":
//       return {
//         ...state,
//         cart: [...state.cart, action.item],
//       };
//     default:
//       return state;
//   }
// };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_TO_CART":
      
      return {
        ...state,
        cart: {...state.cart, [action.item.name]: action.item},
      };
    case "REMOVE_FROM_CART":
      return {
        cart: {},
      };
    default:
      return {
        cart: {},
      };
  }
}

export default reducer;
