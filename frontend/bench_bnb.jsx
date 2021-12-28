import React from "react";
import ReactDOM from "react-dom";

import * as APIUtil from "./util/session_api_util.js"
import configureStore from "./store/store.js"
import Root from "./components/root";

document.addEventListener("DOMContentLoaded", () => {
  // TESTING START
  window.signup = APIUtil.signup;
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;

  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // TESTING END

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store} />, root);
});