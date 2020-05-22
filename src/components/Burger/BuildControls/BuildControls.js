import React from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

const BuildControls = (props) => {
  const controls = [
    { label: "Salad", type: "salad" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
    { label: "Bacon", type: "bacon" },
  ];
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price Rs: <strong>{props.price}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          addMore={() => props.addIngredients(ctrl.type)}
          removeLess={() => props.removeIngredients(ctrl.type)}
          disable={props.disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.toggle}
      >
        {props.isAuth ? "ORDER NOW" : " SIGNUP TO ORDER"}{" "}
      </button>
    </div>
  );
};

export default BuildControls;
