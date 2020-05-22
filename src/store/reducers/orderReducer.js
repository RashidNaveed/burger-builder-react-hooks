import * as actiontypes from "../actions/actionTypes";
import { updateObject } from "../../shared/utility";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};
const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const purchaseBurgerSuccess = (state, action) => {
  const newOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(newOrder),
  });
};
const purchaseBurgerFail = (state, action) => {
  return updateObject(state, { loading: false });
};
const fetchOrderStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const fetchOrderSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};
const fetchOrderFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actiontypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actiontypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actiontypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actiontypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFail(state, action);
    case actiontypes.FETCH_ORDER_START:
      return fetchOrderStart(state, action);
    case actiontypes.FETCH_ORDER_SUCCESS:
      return fetchOrderSuccess(state, action);
    case actiontypes.FETCH_ORDER_FAIL:
      return fetchOrderFail(state, action);
    default:
      return state;
  }
};

export default orderReducer;
