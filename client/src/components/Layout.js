import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./user/LoginForm";
import RegisterForm from "./user/RegisterForm";
import Booking from "./booking/Booking";

function Layout() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/beginBooking" component={Booking} />
      </Switch>
    </Router>
  );
}

export default Layout;
