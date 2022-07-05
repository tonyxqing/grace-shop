import React from "react";
import { Rating } from "@mui/material";
import { useStateValue } from "./StateProvider";
import "./Product.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSnackbar } from "notistack";
interface ProductProps {
  image: string;
  name: string;
  price: number;
  rating: number;
}
function Product(props: ProductProps) {
  const { image, name, price, rating } = props;
  const [state, dispatch] = useStateValue();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
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
    enqueueSnackbar(`Added ${name} to cart!`);
  };
  return (
    <div className="product__info">
      <h4 className="product__title">{name}</h4>
      <div onClick={addToCart} className="product__img">
        <div className="product__image">
          <img src={image} />
        </div>
        <div className="product__imageIcon">
          <AddCircleOutlineIcon className="icon" />
        </div>
      </div>
      <div className="produce_priceContainer">
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <Rating size="small" sx={{ color: "#ca96a9" }} value={rating} />
      </div>
    </div>
  );
}

export default Product;
