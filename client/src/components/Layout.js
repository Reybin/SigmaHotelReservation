import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from "./user/LoginForm";
import RegisterForm from "./user/RegisterForm";
import Nav from "./Nav.js";
import Hotel from "./cruds/hotels/hotel";
import RoomType from "./cruds/roomTypes/roomType";
import Steep from "./booking/steeps";

function Layout() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
        <Route path="/roomType" component={RoomType} />
        <Route path="/hotel" component={Hotel} />
        <Route path="/steps" component={Steep} />
      </Switch>
    </Router>
  );
}

export default Layout;
