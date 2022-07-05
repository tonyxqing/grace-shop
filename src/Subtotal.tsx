import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useNavigate } from "react-router-dom";

function Subtotal({ value, quantity }: { value: number; quantity: number }) {
  const navigate = useNavigate();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value: string) => (
          <>
            <p>
              Subtotal ({quantity} items): <strong>{value}</strong>{" "}
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        fixedDecimalScale
        decimalScale={2}
        value={value}
        displayType={"text"}
        thousandSeporator={true}
        prefix="$"
      />
      <button
        className="subtotal__checkoutButton"
        onClick={() => {
          navigate("/payment");
        }}
      >
        Proceed to Checkout
      </button>
    </div>
  );
}

export default Subtotal;
