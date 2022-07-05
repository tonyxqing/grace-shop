import { ContextInterface, Cart, ContextType, State, Action } from "./types";

export const initialState = { cart: {} };

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
  let basket = state.cart;
  let product = action.item;
  switch (action.type) {
    case "ADD_TO_CART":
      basket = state.cart!;
      product = action.item;
      if (basket[product.name]) {
        return {
          ...state,
          cart: {
            ...basket,
            [product.name]: {
              ...product,
              quantity: product.quantity + basket[product.name].quantity,
            },
          },
        };
      } else {
        return {
          ...state,
          cart: {
            ...basket,
            [product.name]: { ...product },
          },
        };
      }

    case "REMOVE_FROM_CART":
      basket = state.cart!;
      let [name, sub] = action.item;
      if (basket[name].quantity > 0) {
        if (sub > 0) {
          return {
            ...state,
            cart: {
              ...basket,
              [name]: {
                ...basket[name],
                quantity: basket[name].quantity - sub,
              },
            },
          };
        }
      }
      return {
        ...state,
        cart: {
          ...basket,
          [name]: {
            ...basket[name],
            name: "",
            quantity: 0,
          },
        },
      };
    case "ADD_USER":
      return {
        ...state,
        user: action.item,
      };
    default:
      return {
        cart: {},
      };
  }
}

export default reducer;
