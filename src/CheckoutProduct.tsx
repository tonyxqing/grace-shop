import React from "react";
import { Rating } from "@mui/material";
import "./CheckoutProduct.css";

interface ProductProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  quantity: number;
}
function CheckoutProduct(props: ProductProps) {
  const { image, name, price, rating, quantity } = props;
  return (
    <div className="checkoutproduct">
      <div className="checkoutproduct__left">
        <img src={image} />
      </div>
      <div className="checkoutproduct__right">
        <p>{quantity}</p>
        <p className="product__title">{name}</p>
        <Rating size="small" sx={{ color: "#ca96a9" }} value={rating} />
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
      </div>
    </div>
  );
}

export default CheckoutProduct;
