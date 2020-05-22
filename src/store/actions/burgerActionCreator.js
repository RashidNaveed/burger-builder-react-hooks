import * as actionType from "./actionTypes";
import axios from "../../axios-order";

export const addIngredients = (name) => {
  return { type: actionType.ADD_INGREDIENT, ingredientName: name };
};
export const removeIngredients = (name) => {
  return { type: actionType.REMOVE_INGREDIENT, ingredientName: name };
};

export const setIngredients = (ingredients) => {
  return { type: actionType.SET_INGREDIENTS, ingredients: ingredients };
};
export const fetchIngredientsFail = () => {
  return { type: actionType.FETCH_INGREDIENTS_FAILED };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("https://react-my-burger-e3301.firebaseio.com/ingredients.json")
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((error) => {
        dispatch(fetchIngredientsFail());
      });
  };
};
