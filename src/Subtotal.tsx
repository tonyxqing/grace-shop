import React from "react";
import "./Subtotal.css";
//@ts-ignore
import * as CurrencyFormat from "react-currency-format";

function Subtotal({ value, quantity }: { value: number; quantity: number }) {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: number) => (
          <>
            <p>
              Subtotal ({quantity} items): <strong>{value}</strong>{" "}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={value}
        displayType={"text"}
        thousandSeporator={true}
        prefix="$"
      />
      <button className="subtotal__checkoutButton">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
