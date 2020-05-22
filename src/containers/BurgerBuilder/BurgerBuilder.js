import React, { useState, useEffect } from "react";
import axios from "../../axios-order";
import { connect } from "react-redux";

import Aux from "../../hoc/Auxiliray/Auxiliray";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import ShowModal from "../../components/UI/Modal/ShowModal";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from "../../components/UI/Spinner/Spinner";
import * as burgerBuilderActions from "../../store/actions/index";

const BurgerBuilder = (props) => {
  const { onInitIngredients } = props;
  const [modal, setModal] = useState(false);
  useEffect(() => {
    onInitIngredients();
  }, [onInitIngredients]);

  const updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((ingKey) => {
        return ingredients[ingKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    return sum > 0;
  };

  const toggle = () => {
    if (props.isAuthenticated) {
      setModal(!modal);
    } else {
      props.onSetAuthRedirectPath("/checkout");
      props.history.push("/auth");
    }
  };

  const purchaseContinueHandler = () => {
    props.onPurchaseInit();
    props.history.push("/checkout");
  };

  const disabledInfo = {
    ...props.ings,
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }
  let orderSummary = null;
  let burger = props.error ? (
    <p>Failed to load ingredients from server</p>
  ) : (
    <Spinner />
  );
  if (props.ings) {
    burger = (
      <Aux>
        <Burger ingredients={props.ings} />
        <BuildControls
          addIngredients={props.onAddIngredients}
          removeIngredients={props.onRemoveIngredients}
          disabled={disabledInfo}
          purchasable={updatePurchaseState(props.ings)}
          isAuth={props.isAuthenticated}
          price={props.price}
          toggle={toggle}
        />
      </Aux>
    );
    orderSummary = (
      <OrderSummary
        ingredients={props.ings}
        toggle={toggle}
        price={props.price}
        order={purchaseContinueHandler}
      />
    );
  }

  return (
    <Aux>
      <ShowModal title="Order Summary" toggle={toggle} modal={modal}>
        {orderSummary}
      </ShowModal>
      {burger}
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice,
    error: state.burgerBuilder.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddIngredients: (ingName) =>
      dispatch(burgerBuilderActions.addIngredients(ingName)),
    onRemoveIngredients: (ingName) =>
      dispatch(burgerBuilderActions.removeIngredients(ingName)),
    onInitIngredients: () => dispatch(burgerBuilderActions.initIngredients()),
    onPurchaseInit: () => dispatch(burgerBuilderActions.purchaseInit()),
    onSetAuthRedirectPath: (path) =>
      dispatch(burgerBuilderActions.authRedirectPath(path)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
