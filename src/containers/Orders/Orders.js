import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import axios from "../../axios-order";
import Order from "../../components/Order/Order";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import * as orderActions from "../../store/actions/index";
import Spinner from "../../components/UI/Spinner/Spinner";

export const Orders = (props) => {
  const orders = useSelector((state) => {
    return state.order.orders;
  });
  const loading = useSelector((state) => {
    return state.order.loading;
  });
  const token = useSelector((state) => {
    return state.auth.token;
  });
  const userId = useSelector((state) => {
    return state.auth.userId;
  });

  const dispatch = useDispatch();

  const onFetchOrders = useCallback(
    (token, userId) => dispatch(orderActions.fetchOrders(token, userId)),
    [dispatch]
  );

  useEffect(() => {
    onFetchOrders(token, userId);
  }, [onFetchOrders, token, userId]);

  let ordersDetail = <Spinner />;
  if (!loading) {
    ordersDetail = orders.map((order) => (
      <Order
        key={order.id}
        ingredients={order.ingredients}
        price={order.price}
      />
    ));
  }
  return <div>{ordersDetail}</div>;
};

export default withErrorHandler(Orders, axios);
