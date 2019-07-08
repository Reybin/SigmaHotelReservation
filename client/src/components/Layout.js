import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./user/LoginForm";
import RegisterForm from "./user/RegisterForm";
import Booking from "./booking/Booking";
import Nav from "./Nav.js";
import Hotel from "./cruds/hotel";

function Layout() {
  return (
    <div>    
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/beginBooking" component={Booking} />        
        <Route path="/hotel" component={Hotel} />
      </Switch>
    </Router>
    </div>
  );
}

export default Layout;
