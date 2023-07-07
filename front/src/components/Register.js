import React, { Component } from "react";
import {register} from "../api/Auth";

class Register extends Component {
  state = {
    username: "",
    email: "",
    password_1: "",
    password_2: ""
  }

  handleChangeUsername = (event) => {
    const newPseudo = event.target.value
    this.setState({ username: newPseudo })
  }

  handleChangeEmail = (event) => {
    const newEmail = event.target.value
    this.setState({ email: newEmail })
  }

  handleChangePassword1 = (event) => {
    const newPassword = event.target.value
    this.setState({ password_1: newPassword })
  }

  handleChangePassword2 = (event) => {
    const newPassword = event.target.value
    this.setState({ password_2: newPassword })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    register(this.state.username, this.state.email, this.state.password_1)
  }

  render () {
    return (
      <div className="login-wrapper">
        <h1>Please Register</h1>
        <form onSubmit={ this.handleSubmit }>
          <label>
            <p>Username</p>
            <input type="text" value={ this.state.username } onChange={ this.handleChangeUsername }/>
          </label>
          <label>
            <p>Email</p>
            <input type="text" value={ this.state.email } onChange={ this.handleChangeEmail }/>
          </label>
          <label>
            <p>Password</p>
            <input type="text" value={ this.state.password_1 } onChange={ this.handleChangePassword1 }/>
          </label>
          <label>
            <p>Re-enter password</p>
            <input type="text" value={ this.state.password_2 } onChange={ this.handleChangePassword2 }/>
          </label>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Register