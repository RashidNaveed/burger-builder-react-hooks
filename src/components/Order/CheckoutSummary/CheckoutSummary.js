import React from "react";
import Burger from "../../Burger/Burger";
import { Button } from "reactstrap";
import classes from "./CheckoutSummary.module.css";

const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>Hope it taste good!</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button outline color="danger" onClick={props.checkoutCanclled}>
        CANCLE
      </Button>{" "}
      &nbsp;
      <Button outline color="success" onClick={props.checkoutCantinued}>
        CONTINUE
      </Button>
    </div>
  );
};

export default CheckoutSummary;
