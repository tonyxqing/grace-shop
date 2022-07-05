import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import { SnackbarProvider } from "notistack";
import Registration from "./Registration";
import Payment from "./Payment";
import Account from "./Account";
import Orders from "./Orders";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51LHupqI2HkViCwBLC7VivjH4dSVGb0vCAMLLjUz6Xt0wLePBAfwdPTzoQA6YyI8PV1U2cOEqTK1Y5jVySoFjGE9200DUuoQnFr"
);
function App() {
  //   const classes = useStyles();
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
    >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="account" element={<Account />} />
          <Route path="history" element={<Orders />} />
          <Route path="checkout" element={<Checkout />} />
          <Route
            path="payment"
            element={
              <Elements stripe={promise}>
                <Payment />
              </Elements>
            }
          />

          <Route path="register" element={<Registration />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;
