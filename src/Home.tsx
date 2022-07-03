import React from "react";
import { useTheme } from "@mui/material";
import Backdrop from "./assets/pexels-james-wheeler-1486974.jpg";
import Product from "./Product";
import "./Home.css";

const ACOTAR_PRODUCTS = [
  {
    name: "A Court of Thorns and Roses",
    image: "https://m.media-amazon.com/images/I/51RlqfADKXL.jpg",
    price: 6.65,
    rating: 4,
  },
  {
    name: "A Court of Mist and Fury",
    image: "https://m.media-amazon.com/images/I/515sk-V3QDL.jpg",
    price: 9.99,
    rating: 5,
  },
  {
    name: "A Court of Wings and Ruin",
    image: "https://m.media-amazon.com/images/I/51QRVCbF-tL.jpg",
    price: 6.65,
    rating: 5,
  },
  {
    name: "A Court of Silver Flames",
    image: "https://m.media-amazon.com/images/I/51H6yHlsAaL.jpg",
    price: 9.02,
    rating: 5,
  },
];
function Home() {
  const theme = useTheme();
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__containerBackdrop" src={Backdrop} />
        <div className="home__row">
          {ACOTAR_PRODUCTS.map((p) => (
            <Product
              name={p.name}
              image={p.image}
              price={p.price}
              rating={p.rating}
            />
          ))}
        </div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
}

export default Home;
