import React from "react";
import RewardsProgramBanner from "./assets/RewardsProgram.png";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Cart } from "./types";

function Checkout() {
  const [state, dispatch] = useStateValue();
  const totalCost = React.useRef<number>(0);
  const totalQuantity = React.useRef<number>(0);

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src={RewardsProgramBanner}
          alt="join the rewards program for up to 50% off"
          className="checkout__bannerImage"
        />
        <div className="checkout__title">
          <h3>Your Shopping Cart</h3>
        </div>
        <div className="checkout__shoppingCart">
          {Object.values(state.cart).map((product: any) => {
            const { image, name, rating, price, quantity } = product;
            totalCost.current = totalCost.current + price * quantity;
            totalQuantity.current = quantity + totalQuantity.current;
            return (
              <CheckoutProduct
                image={image}
                name={name}
                rating={rating}
                price={price}
                quantity={quantity}
              ></CheckoutProduct>
            );
          })}
        </div>
      </div>
      <div className="checkout__right">
        <div className="checkout__subtotal">
          <Subtotal
            value={totalCost.current}
            quantity={totalQuantity.current}
          />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
