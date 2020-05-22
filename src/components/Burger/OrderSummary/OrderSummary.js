import React from "react";
import Aux from "../../../hoc/Auxiliray/Auxiliray";
import { Button } from "reactstrap";

const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((ingKey) => {
    return (
      <li key={ingKey}>
        <span style={{ textTransform: "capitalize" }}>{ingKey}:</span>{" "}
        {props.ingredients[ingKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order is</h3>
      <p>A delicious bureger with following ingredients </p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price Rs: {props.price}</strong>
      </p>
      <p>continue to checkout</p>
      <Button outline color="danger" onClick={props.toggle}>
        CANCLE
      </Button>{" "}
      &nbsp;
      <Button outline color="success" onClick={props.order}>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default OrderSummary;
