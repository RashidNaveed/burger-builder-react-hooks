import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";

const Burger = (props) => {
  // Transforming the object into array of objects
  // Alternative approch is (for-in) loop as shown in Order.js file line:7
  let transformedIngerdients = Object.keys(props.ingredients)
    .map((ingKey) => {
      //   console.log("props ingredients", props.ingredients);
      //   console.log("ingKey", ingKey);
      return [...Array(props.ingredients[ingKey])].map((_, i) => {
        // console.log("ingKey", props.ingredients[ingKey]);
        return <BurgerIngredients key={ingKey + i} type={ingKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngerdients.length === 0) {
    transformedIngerdients = <p>Please start adding ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type="bread-top" />
      {transformedIngerdients}
      <BurgerIngredients type="bread-bottom" />
    </div>
  );
};

export default Burger;
