import React from "react";
import ReactDOM from "react-dom";

import * as Util from "./util/session_api_util.js"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to BenchBnB</h1>, root);
  
  window.signup = Util.signup;
  window.login = Util.login;
  window.logout = Util.logout;
});