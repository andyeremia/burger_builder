import React, { Component } from "react";
import { Route, Routes } from "react-router";

import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import ContactData from "./containers/Checkout/ContactData/ContactData";
import Orders from "./containers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Routes>
            <Route path="/" element={<BurgerBuilder />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/checkout" element={<Checkout />}>
              <Route path="contact-data" element={<ContactData />} />
            </Route>
          </Routes>
        </Layout>
      </div>
    );
  }
}

export default App;
