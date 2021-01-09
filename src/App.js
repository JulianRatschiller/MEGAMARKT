import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Footer from './Footer';
import FooterTop from './FooterTop';
import Payment from './Payment';
import Orders from './Orders';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

const promise = loadStripe(
  'pk_test_51I3i5CFcDiEFl5m0KRzszNYNY5QaqGrn7XlroIXLCRfLWnGtIgbzfiD7qLNex8zQm1yNsorfyAkZ9RhGSF0rberJ00PNpv93Ix'
)

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>> ', authUser);

      if (authUser) {
        // if the user has / was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // if the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])   //will only run once when app is loaded because brackets are empty

  return (
    // BEM Naming Convention
    // Switch Statements - Routes that get checked until one matches
    <Router>
      <div className="app">


        <Switch>

          <Route path="/orders">
            <Header />
            <Orders />
            {/* <Footer /> */}
          </Route>

          <Route path="/login">
            <Login />
            {/* <Footer /> */}
          </Route>

          <Route path="/product">
            <Header />
            <h1>Product Page</h1>
            {/* <ProductPage /> */}
            {/* <Footer /> */}
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            {/* <Footer /> */}
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            {/* <Footer /> */}
          </Route>


          <Route path="/">
            <Header />
            <FooterTop />
            <Home />
            {/* <Footer /> */}
          </Route>

          {/* <Footer /> */}

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
