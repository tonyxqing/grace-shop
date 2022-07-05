export type Cart = {
  image: string;
  name: string;
  price: number;
  rating: number;
  quantity: number;
};

export type ContextInterface = {
  cart: { [productName: string]: Cart };
  user?: any;
};

export type State = {
  cart?: { [productName: string]: Cart };
  user?: any;
};

export type Action =
  | { type: "ADD_TO_CART"; item: Cart }
  | { type: "REMOVE_FROM_CART"; item: [string, number] }
  | { type: "ADD_USER"; item: any };
export type ContextType = [
  ContextInterface,
  (
    state: ContextInterface,
    action: { type: string; item: Cart }
  ) => ContextInterface
];
