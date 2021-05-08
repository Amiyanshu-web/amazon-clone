import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";
import CurrencyFormat from "react-currency-format";

function CheckoutProduct({ id, image, price, title, rating }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <CurrencyFormat
            rendertext={(value) => <strong>{value}</strong>}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            thousandSpacing={"2s"}
            prefix={"₹"}
          />
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove From Cart</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
