import React, { Component } from "react";
import { Outlet } from "react-router-dom";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import withRouter from "../../hoc/withRouter/withRouter";

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };

  UNSAFE_componentWillMount() {
    console.log(this.props.router.location);
    const ingredients = this.props.router.location.state.ingredients;
    const totalPrice = this.props.router.location.state.totalPrice;
    this.setState({ totalPrice: totalPrice });
    if (ingredients) {
      this.setState({ ingredients: ingredients });
    }
  }

  checkoutCancelledHandler = () => {
    this.props.router.navigate(-1);
  };

  checkoutContinuedHandler = () => {
    const stateToPass = {
      ingredients: this.state.ingredients,
      totalPrice: this.state.totalPrice,
    };
    this.props.router.navigate("/checkout/contact-data", {
      state: stateToPass,
    });
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinued={this.checkoutContinuedHandler}
        />
        {/* <Link to="/checkout/contact-data">Pula</Link> */}
        <Outlet />
      </div>
    );
  }
}

export default withRouter(Checkout);
