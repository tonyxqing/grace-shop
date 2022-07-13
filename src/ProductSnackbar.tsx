import {SnackbarContent, SnackbarMessage} from "notistack";
import React from "react";
import "./ProductSnackbar.css";
interface ProductSnackbarProps {
  message: SnackbarMessage;
  image: string;
}

const ProductSnackbar = React.forwardRef<HTMLDivElement, ProductSnackbarProps>(
  (props, ref) => {
    const {message, image, ...other} = props;

    return (
      <SnackbarContent
        className="productsnackbar"
        ref={ref}
        role="alert"
        {...other}
      >
        <div className="productsnackbar__container">
          <text className="productsnackbar__message">{message}</text>
          <img className="productsnackbar__image" src={image} />
        </div>
      </SnackbarContent>
    );
  }
);

export default ProductSnackbar;
