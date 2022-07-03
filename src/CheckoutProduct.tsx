import React from "react";
import { Rating } from "@mui/material";
import "./CheckoutProduct.css";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { IconButton } from "@mui/material";
import { useStateValue } from "./StateProvider";
interface ProductProps {
  image: string;
  name: string;
  price: number;
  rating: number;
  quantity: number;
}
function CheckoutProduct(props: ProductProps) {
  const [state, dispatch] = useStateValue();
  const { image, name, price, rating, quantity } = props;
  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        image: image,
        name: name,
        price: price,
        rating: rating,
        quantity: 1,
      },
    });
  };
  function removeFromCart(name: string, quantity: number) {
    dispatch({
      type: "REMOVE_FROM_CART",
      item: [name, quantity],
    });
  }
  return (
    <div className="checkoutproduct">
      <div className="checkoutproduct__left">
        <img src={image} />
      </div>
      <div className="checkoutproduct__right">
        <div className="checkoutproduct__quantity">
          <IconButton onClick={() => removeFromCart(name, -1)}>
            <RemoveShoppingCartIcon />
          </IconButton>
          <IconButton
            disabled={!quantity}
            onClick={() => removeFromCart(name, 1)}
          >
            <RemoveIcon />
          </IconButton>
          <h3>{quantity}</h3>
          <IconButton onClick={addToCart}>
            <AddIcon />
          </IconButton>
        </div>
        <h4 className="product__title">{name}</h4>
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
