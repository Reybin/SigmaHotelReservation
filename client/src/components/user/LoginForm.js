import "./styles.css";
import React, { Component } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";

class LoginForm extends Component {
  handleAuth = ev => {
    ev.preventDefault();
    API.post("Auth/login", {
      userName: this.userName.value,
      password: this.password.value
    })
      .then(response => {
        if (response.data) {
          localStorage.setItem("authToken", response.data.token);
          this.props.history.push("/Hotel");
          window.location.reload();
        }
      })
      .catch(error => {
        if (error.response && error.response.status == 401) {
          this.manageUnAuthorizedLogin();
        }
      });
  };

  manageUnAuthorizedLogin() {
    alert("USUARIO O CONTRASENA INCORECTA");
  }

  render() {
    return (
      <div className="overAll">
        <div className="login-container">
          <div className="row">
            <div className="col-md-7">
              <div className="jumbotron login-overAll">
                <h3 className="display-5">Bienvenido!</h3>
                <p className="lead">
                  Bienvenido a SigmaHotel donde podras hacer tu reserva de
                  habitacion de Hotel o guardar un borrador de alguna reserva
                  que querras hacer luego.
                </p>
                <hr className="my-4" />
                <p>
                  Para continuar por favor inicia sesion, si aun no tienes
                  cuenta, registrate.
                </p>

                <ul>
                  <li className="nav-item">
                    <Link
                      to={"/register"}
                      className="btn btn-outline-primary btn-lg"
                    >
                      REGISTRARSE
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="form">
                <h2 className="display-5">Iniciar Sesion</h2>
                <form className="">
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
                    onClick={this.handleAuth}
                  >
                    ENTRAR
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginForm;
