import React from "react";
import "./subtotal.css";
import { useHistory } from "react-router-dom";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  console.log(basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket?.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order contains a gift.
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        thousandSeparator={true}
        thousandSpacing={"2s"}
        displayType={"text"}
        prefix={"₹"}
      />
      <button onClick={(e) => history.push("./payment")}>
        Proceed to checkout
      </button>
    </div>
  );
}

export default Subtotal;
