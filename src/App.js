import React, { useEffect } from "react";
import "./App.css"
import Electronics from "./Electronics"
import Groceries from "./Groceries"
import Mobile from "./Mobile"
import Header from "./Header"
import Home from "./Home"
import Login from "./Login"
import Sports from "./Sports"
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Checkout from "./Checkout"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function App() {
    const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
    return (
        <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            {/* <Orders /> */}
          </Route>
          <Route path="/Sports">
          <Header />
            <Sports />
          </Route>
          <Route path="/Electronics">
          <Header />
            <Electronics/>
          </Route>
          <Route path="/Groceries">
            <Header/>
            <Groceries />
          </Route>
          <Route path="/Mobile">
          <Header />
            <Mobile/>
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            {/* <Elements stripe={promise}>
              <Payment /> */}
            {/* </Elements> */}
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;