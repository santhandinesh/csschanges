import React from 'react';
import './App.css';
import 'react-multi-carousel/lib/styles.css';
import "@reach/dialog/styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Pdp from '../src/containers/pdp';
import Cart from '../src/containers/cart';
import Home from '../src/containers/home'
import Checkout from '../src/containers/checkout'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  render() {

    return (

      <Router>
      <div>
        <Switch>
        <Route exact path="/pdp/:productId" component={Pdp} />
        <Route exact path="/cart/:productId" component={Cart} />
          <Route path="/pdp">
            <Pdp />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>

    );
  }
}

export default App;
