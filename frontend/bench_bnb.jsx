import React from "react";
import ReactDOM from "react-dom";

import * as APIUtil from "./util/session_api_util.js"
import configureStore from "./store/store.js"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  
  window.signup = APIUtil.signup;
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

});