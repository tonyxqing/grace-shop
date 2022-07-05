import React, {useEffect, useState} from "react";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {Link} from "react-router-dom";
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import "./Payment.css";
import CurrencyFormat from "react-currency-format";
import axios from "./axios";
import {useNavigate} from "react-router-dom";

function Payment() {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState<boolean>(true);
  const [processing, setProcessing] = useState<boolean>(false);
  const [state, dispatch] = useStateValue();
  const [clientSecret, setClientSecret] = useState<any>(true);
  const totalCost = React.useRef<number>(0);
  const totalQuantity = React.useRef<number>(0);

  totalCost.current = 0;
  totalQuantity.current = 0;
  Object.values(state.cart).forEach((item: any) => {
    totalCost.current = totalCost.current + item.quantity * item.price;
    totalQuantity.current = totalQuantity.current + item.quantity;
  });

  useEffect(() => {
    // generate customer secret

    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `/payments/create?total=${totalCost.current * 100}`,
      });
      setClientSecret(response.data.clientSecret);
    };
    if (totalQuantity.current > 0) getClientSecret();
  }, [state]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    setProcessing(true);
    const payload = await stripe
      ?.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements?.getElement(CardElement)!,
        },
      })
      .then(({paymentIntent}) => {
        // payment intent = paymentcomfirmation
        setSucceeded(true);
        setError(null);
        setProcessing(false);
        navigate("/history");
      });
  }
  function handleChange(e: any) {
    setDisabled(e.empty);
    setError(e.error?.message ?? "");
  }
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>Checkout: {<Link to="/checkout">{totalQuantity.current}</Link>}</h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__delivery">
            <h4>{state.user?.email ?? "Guest User"}</h4>
            <h4>1234 Mickey Lane</h4>
            <h4>Los Angeles</h4>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review your items</h3>
          </div>
          <div className="payment__reviewItems">
            {Object.values(state.cart).map((product: any) => {
              const {image, name, rating, price, quantity} = product;

              if (quantity < 0 || !name) return;
              return (
                <CheckoutProduct
                  image={image}
                  name={name}
                  rating={rating}
                  price={price}
                  quantity={quantity}
                ></CheckoutProduct>
              );
            }) ?? <p> No items in cart. </p>}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Information</h3>
          </div>
          <div className="payment__paymentInfo">
            <form>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value: string) => <h3>Order Total: {value} </h3>}
                  fixedDecimalScale
                  decimalScale={2}
                  value={totalCost.current}
                  displayType={"text"}
                  thousandSeporator={true}
                  prefix="$"
                />
                <button
                  disabled={processing || disabled || succeeded}
                  className="payment__submitButton"
                  onClick={handleSubmit}
                >
                  <span>{processing ? "Processing..." : "Buy Now"}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
