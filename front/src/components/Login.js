import React, { Component, Fragment } from "react";
import { login } from "../api/Auth";
// import Input from "../utils/Input";
import "../styles/Login.css";
import Header from "../utils/Header";

class Login extends Component {
  state = {
    username: "",
    password: ""
  }

  handleChangeUsername = (event) => {
    const newPseudo = event.target.value
    this.setState({ username: newPseudo })
  }

  handleChangePassword = (event) => {
    const newPassword = event.target.value
    this.setState({ password: newPassword })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    login(this.state.username, this.state.password)
  }

  render () {
    return (
      <div className="login-wrapper">
        <Header className="login-header"/>
        <div className="login-form">
          <h1>Login</h1>
          <form onSubmit={ this.handleSubmit }>
            <label>
              <p>Username</p>
              <input type="text" value={ this.state.username } onChange={ this.handleChangeUsername }/>
            </label>
            <label>
              <p>Password</p>
              <input type="password" value={ this.state.password } onChange={ this.handleChangePassword }/>
            </label>
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login