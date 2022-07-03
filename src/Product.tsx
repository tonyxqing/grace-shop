import React from "react";
import { Rating } from "@mui/material";
import { useStateValue } from "./StateProvider";
import "./Product.css";

interface ProductProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}
function Product(props: ProductProps) {
  const { image, name, price, rating } = props;
  const [state, dispatch] = useStateValue();
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: { image: image, name: name, price: price, rating: rating },
    });
  };
  return (
    <div className="product__info">
      <p className="product__title">{name}</p>
      <Rating size="small" sx={{ color: "#ca96a9" }} value={rating} />
      <img src={image} />
      <p className="product__price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <button className="product__addToBasket" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}

export default Product;
