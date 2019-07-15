import "./styles.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import API from "../utils/API";

class RegisterForm extends Component {
  handleRegister = ev => {
    ev.preventDefault();
    API.post("Users/register", {
      userName: this.userName.value,
      password: this.password.value
    })
      .then(response => {
        if (response.data) {
          localStorage.setItem("authToken", response.data.token);
          this.props.history.push("/beginBooking");
        }
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          this.manageUnAuthorizedLogin();
        }
      });
  };

  manageUnAuthorizedLogin() {
    alert("Nombre de Usuario no disponible.");
  }

  render() {
    return (
      <div className="overAll">
        <div className="card">
          <div className="card-body">
            <div className="form form-register col-md-6 offset-3">
              <h3 className="display-5">Registrarse</h3>
              <form action="" className="">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Usuario"
                  ref={input => (this.userName = input)}
                />
                <input
                  className="form-control"
                  type="password"
                  placeholder="Contraseña"
                  ref={input => (this.password = input)}
                />
                <button
                  className="btn btn-lg btn-primary btn-block"
                  onClick={this.handleRegister}
                >
                  GUARDAR
                </button>
              </form>
              <Link to={"/"} className="nav-link">
                Ya tienes usuario?
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
