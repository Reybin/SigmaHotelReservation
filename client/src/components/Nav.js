import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { Hidden } from "@material-ui/core";

const useStyles = makeStyles({
  nav: {
    // work around para no perder tiempo con el manejo de layout segun estado del a sesion ya que no fue pedido
    display: (localStorage.getItem("authToken")) ? 'block' : 'none'
  },
});

export default function Nav() {
  const classes = useStyles();
    return (
      <div className={classes.nav}>     
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">
          SigmaHotel
        </a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to={"/Hotel"} className="nav-link">
                Hoteles
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/RoomType"} className="nav-link">
                Tipos de Habitaciones
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Booking"} className="nav-link">
                Reservas
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>
    );
}
