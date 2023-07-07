import axios from "axios"

var API_URL = "http://localhost:8000/"

function register(username, email, password) {
  axios.post(API_URL + "register/", {
    "username": username,
    "email": email,
    "password": password
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
}

function login(username, password) {
  console.log("logging in")
  axios.post(API_URL + "login/", {
    "username": username,
    "password": password
  })
  .then(function (response) {
    console.log(response)
  })
  .catch(function (error) {
    console.log(error)
  })
}

export {
  login,
  register
} 