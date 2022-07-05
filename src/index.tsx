import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";

import StateProvider from "./StateProvider";
import reducer, { initialState } from "./reducer";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const sampleContext = {
  cart: {
    "A Court of Thorns and Roses": {
      name: "A Court of Thorns and Roses",
      image: "https://m.media-amazon.com/images/I/51RlqfADKXL.jpg",
      price: 6.65,
      rating: 4,
      quantity: 3,
    },
    "A Court of Wings and Ruin": {
      name: "A Court of Wings and Ruin",
      image: "https://m.media-amazon.com/images/I/51QRVCbF-tL.jpg",
      price: 6.65,
      rating: 5,
      quantity: 1,
    },
  },
};
root.render(
  <React.StrictMode>
    <StateProvider reducer={reducer} initialState={initialState}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
