import React, { Component } from "react";
import axios from 'axios'

import { withSignIn } from 'react-auth-kit';

class Login extends Component {
  state={email: '', password: ''}

  onSubmit = (e) => {
      e.preventDefault()
      axios.post('/api/login', this.state)
          .then((res)=>{
              if(res.status === 200){
                  if(this.props.signIn(
                      {
                          token: res.data.token,
                          expiresIn:res.data.expiresIn,
                          tokenType: "Bearer",
                          authState: res.data.authUserState,
                          refreshToken: res.data.refreshToken,                    // Only if you are using refreshToken feature
                          refreshTokenExpireIn: res.data.refreshTokenExpireIn     // Only if you are using refreshToken feature
                      }
                  )){
                      // Redirect or do-something
                  }else {
                      //Throw error
                  }
              }
          })
  }


  render () {
    return (
      <div className="login-wrapper">
        <h1>Please login</h1>
        <form>
          <label>
            <p>Username</p>
            <input type="text" />
          </label>
          <label>
            <p>Password</p>
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

export default withSignIn(Login)