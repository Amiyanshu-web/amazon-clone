import React from "react";
import "./product.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import FlipMove from "react-flip-move";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: Math.random(),
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <img src={image} />
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <CurrencyFormat
            rendertext={(value) => <strong>{value}</strong>}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            thousandSpacing={"2s"}
            prefix={"₹"}
          />
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
