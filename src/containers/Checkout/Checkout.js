import React, { Suspense } from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
const ContactData = React.lazy(() => import("./ContactData/ContactData"));
export const Checkout = (props) => {
  const checkoutCanclledHandler = () => {
    props.history.goBack();
  };
  const checkoutCantinuedHandler = () => {
    props.history.replace("/checkout/contact-data");
  };

  let summary = <Redirect to="/" />;
  if (props.ings) {
    const purchasedRedirect = props.purchased ? <Redirect to="/" /> : null;
    summary = (
      <React.Fragment>
        {purchasedRedirect}
        <CheckoutSummary
          ingredients={props.ings}
          checkoutCanclled={checkoutCanclledHandler}
          checkoutCantinued={checkoutCantinuedHandler}
        />
        <Route
          path={props.match.path + "/contact-data"}
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <ContactData />
            </Suspense>
          )}
        />
      </React.Fragment>
    );
  }
  return <div>{summary}</div>;
};

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
  };
};

export default withRouter(connect(mapStateToProps)(Checkout));
