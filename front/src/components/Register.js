import React, { Component } from "react";
import {register} from "../api/Auth";

class Register extends Component {

  handleSubmit = (event) => {
    event.preventDefault()
    register()
  }

  render () {
    return (
      <div className="login-wrapper">
        <h1>Please login</h1>
        <form onSubmit={ this.handleSubmit }>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Email</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
            <input type="password" />
          </label>
          <label>
            <p>Re-enter password</p>
            <input type="password" />
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